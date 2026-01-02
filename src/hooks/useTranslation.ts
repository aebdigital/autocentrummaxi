import { translations, type Lang, type TranslationKey } from '../translation/translations'

// For autocentrummaxi.cz, the default language is Czech
const DEFAULT_LANG: Lang = 'cs'

export function createTranslator(lang: Lang = DEFAULT_LANG) {
  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] || translations[key]?.['sk'] || key
  }

  const tCategory = (categoryName: string): string => {
    const key = `cat_${categoryName}` as TranslationKey
    return translations[key]?.[lang] || translations[key]?.['sk'] || categoryName
  }

  const tEquipment = (optionName: string): string => {
    const key = `eq_${optionName}` as TranslationKey
    return translations[key]?.[lang] || translations[key]?.['sk'] || optionName
  }

  return { t, tCategory, tEquipment, lang }
}

// Hook for React components - uses Czech by default
export function useTranslation(lang: Lang = DEFAULT_LANG) {
  return createTranslator(lang)
}
