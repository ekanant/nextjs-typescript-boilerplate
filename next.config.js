
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const basePath = ''
const nextJsConfig = {
  reactStrictMode: true,
  basePath,
  i18n: {
    locales: ['en-th', 'th-th'],
    defaultLocale: 'th-th',
  }
}

module.exports = withBundleAnalyzer(
  withPreact(nextJsConfig)
)