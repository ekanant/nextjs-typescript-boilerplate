import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  myText: string,
  t: (arg0: string) => React.ReactNode
}

interface i18nMessages {
  [key: string]: {
    [key: string]: string,
  },
}

const useTranslation = () => {
  const {locale = ''} = useRouter()
  const messages: i18nMessages = {
    'en-th': {
      'hello': "Hello"
    },
    'th-th': {
      'hello': "สวัสดี"
    }
  };
  const t = (key: string) => {
    return messages[locale] && messages[locale][key] || t;
  }
  return [t]
}

const Page = (prop: Props): ReactElement => {
  const [t] = useTranslation()
  return (
    <>
      <div className="background bg-dark"></div>
      <div className="container mt-5">
        <div className="bg-white rounded">
          <div className="row pt-3 mb-3">
            <div className="col-12 text-center">
              <h1>Next.js i18n simple hook</h1>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              Hello this is typescript
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              Hello this is plain text
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              This text is from static props =&gt; {prop.myText}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              This text is from i18n with namespace =&gt; {t('hello')}
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-12">
              {t('change_language')} 
              <Link href={{ pathname: '/simple/i18n-hook', query: {} }} locale="th-th">
                <a>TH</a>
              </Link> | 
              <Link href={{ pathname: '/simple/i18n-hook', query: {} }} locale="en-th">
                <a>EN</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
      `}</style>
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