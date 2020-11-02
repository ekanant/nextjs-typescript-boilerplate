import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp