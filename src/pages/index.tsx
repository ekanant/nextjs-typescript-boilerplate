import React, { ReactElement } from 'react'
import Link from 'next/link'

const Page = (): ReactElement => {
  return (
    <>
      <div className="background bg-dark"></div>
      <div className="container mt-5">
        <div className="row bg-white rounded">
          <div className="col-12 text-center mt-3">
            <h1>Next.js typescript boilerplate</h1>
          </div>
          <div className="col-12 mt-3 text-center">
            <h4>Hello this is next.js + typescript example</h4>
          </div>
          <div className="col-12 mt-3 mb-4 text-center">
            <nav className="nav flex-column">
              <Link href="/example/i18n-hook">i18n hook</Link>
            </nav>
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