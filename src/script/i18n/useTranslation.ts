interface TranslationQuery {
    [name: string]: string | number
}

interface Translate {
    (
        i18nKey: string,
        query?: TranslationQuery,
        options?: { returnObjects?: boolean, locale: string }
    ): string
}

interface I18n {
    t: Translate
}

interface I18nDictionary {
    [key: string]: string
}

interface I18nConfig {
    defaultLocale?: string
    locales?: string[]
    loadLocaleFrom?: (
        language: string,
        namespace: string
    ) => Promise<I18nDictionary>
    loader?: boolean
    logBuild?: boolean
    interpolation?: {
        prefix: string
        suffix: string
    }
}

function interpolation({
    text,
    query,
    config,
}: {
    text?: string
    query?: TranslationQuery | null
    config: I18nConfig
}): string {
    if (!text || !query) return text || ''

    const escapeRegex = (str: string) =>
        str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    const {
        interpolation: { prefix, suffix } = { prefix: '{{', suffix: '}}' },
    } = config

    return Object.keys(query).reduce((all, varKey) => {
        const regex = new RegExp(
            `${escapeRegex(prefix)}\\s*${varKey}\\s*${escapeRegex(suffix)}`,
            'gm'
        )
        all = all.replace(regex, `${query[varKey]}`)
        return all
    }, text)
}

const useTranslation = (messages: Record<string, I18nDictionary>, defaultLocale: string): I18n => {
    const t: Translate = (key, query, options) => {
        const locale = options?.locale || ""
        const text = (messages[locale] && messages[locale][key]) || (messages[defaultLocale] && messages[defaultLocale][key]) || key;
        return interpolation({ text, query, config: {} })
    }
    return { t }
}

export default useTranslation