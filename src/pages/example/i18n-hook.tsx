import Layout from '@/components/Layout/Default'
import useTranslation from '@/script/i18n/useTranslation'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  myText: string,
  t: (arg0: string) => React.ReactNode
}

const Page = (prop: Props): ReactElement => {
  const {t} = useTranslation({
    "en-th": {
      "hello": "Hello",
      "change_language": "Change language",
    },
    "th-th": {
      "hello": "สวัสดี",
      "change_language": "เปลียนภาษา",
    }
  })
  const renderList = []
  for(let i = 0 ; i < 10 ; i++) {
    renderList.push(i);
  }
  return (
    <Layout>
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
          
          <div className="row pb-3">
            <div className="col-12">
              {t('change_language')}&nbsp;
              <Link href={{ pathname: '', query: {} }} locale="th-th">TH</Link> | 
              <Link href={{ pathname: '', query: {} }} locale="en-th">EN</Link>
            </div>
          </div>
          {
            renderList.map(i => {
              return (
                  <div key={i} className="row mb-3">
                    <div className="col-12">
                      This text is from i18n with namespace =&gt; {t('hello')}
                    </div>
                  </div>
              );
            })
            
          }
        </div>
      </div>
    </Layout>
    
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