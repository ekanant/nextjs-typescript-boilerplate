import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from '../i18n'

interface Props {
  myText: string,
  t: (arg0: string) => React.ReactNode
}

const Page = function (prop: Props): ReactElement {
  const [t, i18n] = useTranslation('content')
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      Hello this is typescript<br />
      {prop.myText}<br />
      hello &gt; {t('hello')}<br/>
      {t('change_language')} <Link href={{ pathname: '/', query: {} }}><a onClick={(e) => { e.preventDefault(); changeLanguage('th-th'); }}>TH</a></Link> | <Link href={{ pathname: '/en-th', query: {} }}><a onClick={(e) => { e.preventDefault(); changeLanguage('en-th'); }}>EN</a></Link><br />

    </>
  )
}

export default Page

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      myText: 'This is my text'
    }
  }
}