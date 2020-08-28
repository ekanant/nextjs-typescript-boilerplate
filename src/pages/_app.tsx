import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)