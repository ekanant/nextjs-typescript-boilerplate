import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import "bootstrap/dist/css/bootstrap.min.css"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)