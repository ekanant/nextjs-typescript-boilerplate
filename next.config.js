const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const basePath = ''

module.exports = withBundleAnalyzer({
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
})
