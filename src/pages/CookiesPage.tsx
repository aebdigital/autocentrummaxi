import React from 'react';
import MiniHero from '../components/MiniHero';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="Cookie Policy" />
      <div className="container mx-auto px-4 py-12 max-w-4xl font-montserrat text-gray-800">
        <p className="mb-6 italic">
          This Cookie Policy was last updated on 4. 10. 2024 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">1. Introduction</h2>
          <p>
            Our website, https://autocentrummaxi.cz (hereinafter: „the website“) uses cookies and other related technologies (for convenience all technologies are referred to as „cookies“). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">2. What are cookies?</h2>
          <p>
            A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">3. What are scripts?</h2>
          <p>
            A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">4. What is a web beacon?</h2>
          <p>
            A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">5. Cookies</h2>
          
          <h3 className="text-xl font-bold font-jost mb-2">5.1 Technical or functional cookies</h3>
          <p className="mb-4">
            Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.
          </p>

          <h3 className="text-xl font-bold font-jost mb-2">5.2 Marketing/Tracking cookies</h3>
          <p className="mb-4">
            Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.
          </p>

          <h3 className="text-xl font-bold font-jost mb-2">5.3 Social media</h3>
          <p>
            On our website, we have included content from Instagram to promote web pages (e.g. “like”, “pin”) or share (e.g. “tweet”) on social networks like Instagram. This content is embedded with code derived from Instagram and places cookies. This content might store and process certain information for personalized advertising.
          </p>
          <p className="mt-2">
            Please read the privacy statement of these social networks (which can change regularly) to read what they do with your (personal) data which they process using these cookies. The data that is retrieved is anonymized as much as possible. Instagram is located in the United States.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">6. Placed cookies</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Google Analytics</h4>
              <p>Purpose pending investigation</p>
              <p className="text-sm text-gray-600">Consent to service google-analytics</p>
            </div>
            <div>
              <h4 className="font-bold">WordPress</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-600">Consent to service wordpress</p>
            </div>
            <div>
              <h4 className="font-bold">iThemes Security</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-600">Consent to service ithemes-security</p>
            </div>
            <div>
              <h4 className="font-bold">Google Maps</h4>
              <p>Purpose pending investigation</p>
              <p className="text-sm text-gray-600">Consent to service google-maps</p>
            </div>
            <div>
              <h4 className="font-bold">Miscellaneous</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-600">Consent to service miscellaneous</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">7. Consent</h2>
          <p>
            When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on „Save preferences“, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.
          </p>
          <h3 className="text-xl font-bold font-jost mt-4 mb-2">7.1 Manage your consent settings</h3>
          <ul className="list-disc ml-6">
            <li>Functional: Always active</li>
            <li>Marketing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">8. Enabling/disabling and deleting cookies</h2>
          <p>
            You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.
          </p>
          <p className="mt-2">
            Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">9. Your rights with respect to personal data</h2>
          <p className="mb-2">You have the following rights with respect to your personal data:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
            <li>Right of access: You have the right to access your personal data that is known to us.</li>
            <li>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
            <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
            <li>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
            <li>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-jost mb-4">10. Contact details</h2>
          <p className="mb-2">For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold">Lukáš Neuwirth</p>
            <p>Ibsenova 1167/31 Ostrava 702 00</p>
            <p>Czech Republic</p>
            <p>Website: <a href="https://autocentrummaxi.cz" className="text-blue-600 hover:underline">https://autocentrummaxi.cz</a></p>
            <p>Email: <a href="mailto:autocentrummaxi@seznam.cz" className="text-blue-600 hover:underline">autocentrummaxi@seznam.cz</a></p>
            <p>Phone number: +420702198267</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            This Cookie Policy was synchronized with cookiedatabase.org on 10. 11. 2024.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;