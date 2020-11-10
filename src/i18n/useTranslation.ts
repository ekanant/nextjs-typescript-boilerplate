import { useRouter } from "next/router";

interface TranslationQuery {
    [name: string]: string | number
}

interface Translate {
    (
        i18nKey: string,
        query?: TranslationQuery,
        options?: { returnObjects?: boolean }
    ): string
}

interface I18n {
    t: Translate
    lang: string
}

interface I18nDictionary {
    [key: string]: string
}

const useTranslation = (messages: Record<string, I18nDictionary>) : I18n => {
    const { locale = '' } = useRouter()
    const t : Translate = (key: string) : string => {
        return messages[locale] && messages[locale][key] || key;
    }
    return {t, lang: locale}
}

export default useTranslation