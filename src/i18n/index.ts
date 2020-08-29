import NextI18Next from "next-i18next";
import nextConfig from 'next/config'
const {publicRuntimeConfig} = nextConfig()
const basePath = publicRuntimeConfig.basePath
const localePath =  typeof window === "undefined" ? "public/static/locales" : `${basePath}/static/locales`;

const nextI18Next = new NextI18Next({
    fallbackLng: 'th-th',
    localeSubpaths: publicRuntimeConfig.localeSubpaths,
    defaultLanguage: 'th-th',
    otherLanguages: ['en-th'],
    lowerCaseLng: true,
    localePath,
    serverLanguageDetection: false,
})

export const changeLanguage = (locale: string): void => {
    nextI18Next.i18n.changeLanguage(locale);
};
  
export const getCurrentLanguage = ():string => {
    return nextI18Next.i18n.language
}
export const Link = nextI18Next.Link
export const appWithTranslation = nextI18Next.appWithTranslation
export const withTranslation = nextI18Next.withTranslation
export const useTranslation = nextI18Next.useTranslation
export default nextI18Next