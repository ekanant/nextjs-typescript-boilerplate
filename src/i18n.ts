import NextI18Next from "next-i18next";
const localePath =  typeof window === "undefined" ? "public/static/locales" : "static/locales";
export const nextI18Next = new NextI18Next({
    fallbackLng: 'th-th',
    localeSubpaths: {
        'en-th': 'en-th',
    },
    defaultLanguage: 'th-th',
    otherLanguages: ['en-th'],
    lowerCaseLng: true,
    localePath,
    serverLanguageDetection: false,
})