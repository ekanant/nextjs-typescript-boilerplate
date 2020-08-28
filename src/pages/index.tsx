import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

interface Props {
  myText: string,
  t: (arg0: string) => React.ReactNode
}

const Page = (prop: Props): ReactElement => {
  return (
    <>
      <div className="background bg-dark"></div>
      <div className="container mt-5">
        <div className="bg-white rounded">
          <div className="row pt-3 mb-3">
            <div className="col-12 text-center">
              <h1>Next.js typescript boilerplate</h1>
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

export const getStaticProps : GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60
  }
}

export default Page