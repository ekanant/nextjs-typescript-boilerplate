import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Link from '@/components/Link'
import { useTranslation } from '@/i18n'

interface Props {
  myText: string,
  t: (arg0: string) => React.ReactNode
}

const Page = (prop: Props): ReactElement => {
  const [t] = useTranslation('content')
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
                TH
              </Link> | 
              <Link href={{ pathname: '/en-th/simple/i18n-hook', query: {} }} locale="en-th">
                EN
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