import { Car } from '../types/car';

const XML_FEED_URL = 'https://www.autobazar.sk/api/export/654fee1c48d6036b5e29f6ab52d1f2a021/firmAdvertisements/326841/';

export interface AutobazarListing {
  idAdvertisement: string;
  title: string;
  content: string;
  contentExtend: string;
  contentOptions: string;
  link: string;
  isReserved: string;
  photos: {
    photo: string[];
  };
  params: {
    cena: string;
    'odpocet-dph_value'?: string;
    'odpocet-dph'?: string;
    odpocet_dph?: string;
    rok_value?: string;
    rok?: string;
    palivo_value?: string;
    palivo?: string;
    'najazdene-km_value'?: string;
    'najazdene-km'?: string;
    farba_value?: string;
    farba?: string;
    'pocet-dveri_value'?: string;
    'miest-na-sedenie_value'?: string;
    'miest-na-sedenie'?: string;
    pohon_value?: string;
    pohon?: string;
    'vykon-motora'?: string;
    prevodovka_value?: string;
    prevodovka?: string;
    'objem-motora'?: string;
    mesiac_value?: string;
    mesiac?: string;
    karoseria_value?: string;
    karoseria?: string;
    vin?: string;
    vybava_value?: string;
    'doplnujuce-udaje_value'?: string;
  };
}

export async function fetchAutokazarData(): Promise<Car[]> {
  try {
    // Try multiple CORS proxy services
    const proxies = [
      `https://api.allorigins.win/get?url=${encodeURIComponent(XML_FEED_URL)}`,
      `https://cors-anywhere.herokuapp.com/${XML_FEED_URL}`,
      `https://corsproxy.io/?${encodeURIComponent(XML_FEED_URL)}`
    ];

    let xmlText = '';
    let response: Response | null = null;

    // Try each proxy until one works
    for (const proxyUrl of proxies) {
      try {
        console.log('Trying proxy:', proxyUrl);
        response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json, application/xml, text/xml, */*',
          },
        });

        if (response.ok) {
          if (proxyUrl.includes('allorigins.win')) {
            const data = await response.json();
            xmlText = data.contents;
          } else {
            xmlText = await response.text();
          }
          console.log('Successfully fetched XML data');
          break;
        }
      } catch (proxyError) {
        console.warn(`Proxy ${proxyUrl} failed:`, proxyError);
        continue;
      }
    }

    if (!xmlText) {
      throw new Error('All proxy attempts failed');
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

    // Check for XML parsing errors
    const parserError = xmlDoc.querySelector('parsererror');
    if (parserError) {
      console.error('XML parsing error:', parserError.textContent);
      throw new Error('Invalid XML format');
    }

    // Try different selectors to find advertisements
    let advertisements = xmlDoc.querySelectorAll('advertisement');
    if (advertisements.length === 0) {
      advertisements = xmlDoc.querySelectorAll('advertisements > advertisement');
    }
    if (advertisements.length === 0) {
      advertisements = xmlDoc.querySelectorAll('item');
    }

    const cars: Car[] = [];
    console.log(`Found ${advertisements.length} advertisements in XML`);

    advertisements.forEach((ad) => {
      const id = ad.querySelector('idAdvertisement')?.textContent || '';
      const title = ad.querySelector('title')?.textContent || '';
      const content = ad.querySelector('content')?.textContent || '';
      const link = ad.querySelector('link')?.textContent || '';
      const isReserved = ad.querySelector('isReserved')?.textContent || '';

      // Get photos
      const photos = Array.from(ad.querySelectorAll('photos > photo')).map(
        (photo) => photo.textContent?.replace('http://', 'https://') || ''
      );

      // Get price
      const priceText = ad.querySelector('params > cena')?.textContent || '';
      const price = parseInt(priceText.replace(/\D/g, '')) || 0;

      // Get basic params
      const year = parseInt(ad.querySelector('params > rok_value, params > rok')?.textContent || '0') || 0;
      const fuel = ad.querySelector('params > palivo_value, params > palivo')?.textContent || '';
      const mileageText = ad.querySelector('params > najazdene-km_value, params > najazdene-km')?.textContent || '';
      const mileage = parseInt(mileageText.replace(/\D/g, '')) || 0;
      
      // Get additional params
      const engine = ad.querySelector('params > objem-motora')?.textContent || '';
      const powerText = ad.querySelector('params > vykon-motora')?.textContent || '';
      const power = powerText ? `${powerText} kW` : '';
      const bodyType = ad.querySelector('params > karoseria_value, params > karoseria')?.textContent || '';
      const transmissionRaw = ad.querySelector('params > prevodovka_value, params > prevodovka')?.textContent || '';
      const transmission = transmissionRaw.split('|')[0] || '';
      const vin = ad.querySelector('params > vin')?.textContent || '';
      
      // Get features
      const featuresText = ad.querySelector('params > vybava_value')?.textContent || '';
      const features = featuresText ? featuresText.split('|').map(f => f.trim()).filter(f => f) : [];

      // Extract brand and model from title
      const titleParts = title.split(' ');
      const brand = titleParts[0] || 'Unknown';
      const model = titleParts.slice(1).join(' ') || 'Unknown';

      const car: Car = {
        id,
        brand,
        model,
        year,
        price,
        mileage,
        fuel: fuel || 'Unknown',
        transmission: transmission || 'Manual',
        image: photos[0] || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNkI3Mjg4Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj5Ob1JvZGxvPC90ZXh0Pgo8L3N2Zz4=',
        images: photos,
        features,
        engine,
        power,
        bodyType,
        vin,
        description: content,
      };

      cars.push(car);
    });

    return cars;
  } catch (error) {
    console.error('Error fetching autobazar data:', error);
    // Return empty array on error, the app will fall back to initial data
    return [];
  }
}

// Function to get individual car details by ID
export async function getCarById(carId: string): Promise<Car | null> {
  const cars = await fetchAutokazarData();
  return cars.find(car => car.id === carId) || null;
}