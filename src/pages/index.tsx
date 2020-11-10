import React, { ReactElement } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout/Default'

const Page = (): ReactElement => {
  return (
    <Layout>
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
              <Link href="/example/i18n-hook"><a className="nav-link">i18n hook</a></Link>
              <Link href="/example/image-optimize"><a className="nav-link">image optimization</a></Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page