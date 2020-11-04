import { useRouter } from "next/router";

interface TranslationQuery {
    [name: string]: string | number
}

interface Translate {
    (
        i18nKey: string,
        query?: TranslationQuery,
        options?: { returnObjects?: boolean }
    ): unknown
}

interface I18n {
    t: Translate
    lang: string
}

interface I18nDictionary {
    [key: string]: unknown
}

const useTranslation = (messages: Record<string, I18nDictionary>) : I18n => {
    const { locale = '' } = useRouter()
    const t : Translate = (key: string) => {
        return messages[locale] && messages[locale][key] || t;
    }
    return {t, lang: locale}
}

export default useTranslation