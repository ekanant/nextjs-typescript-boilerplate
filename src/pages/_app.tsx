import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { appWithTranslation } from '../i18n'
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(MyApp)