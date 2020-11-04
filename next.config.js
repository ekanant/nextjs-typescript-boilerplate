
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const basePath = ''
const nextJsConfig = {
  basePath,
  i18n: {
    locales: ['en-th', 'th-th'],
    defaultLocale: 'th-th',
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withBundleAnalyzer(
  withPreact(nextJsConfig)
)