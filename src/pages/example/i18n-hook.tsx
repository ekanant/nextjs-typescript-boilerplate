import Layout from '@/components/Layout/Default'
import useTranslation from '@/script/i18n/useTranslation'
import { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  locale: string,
  myText: string,
}

const Page = ({ locale, myText }: Props): ReactElement => {
  const { t } = useTranslation({
    "en-th": {
      "hello": "Hello",
      "change_language": "Change language",
    },
    "th-th": {
      "hello": "สวัสดี",
      "change_language": "เปลียนภาษา",
    }
  }, locale)
  const renderList = []
  for (let i = 0; i < 10; i++) {
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
              This text is from static props =&gt; {myText}
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

export function getStaticProps(context: { locale: string }): GetStaticPropsResult<Props> {
  return {
    props: {
      locale: context.locale || "",
      myText: 'This is my text'
    }
  }
}