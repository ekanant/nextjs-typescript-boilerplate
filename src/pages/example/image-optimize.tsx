import Layout from "@/components/Layout/Default"
import React, { ReactElement } from "react"

const Page = (): ReactElement => {
    return (
        <>
            <Layout>
            <div className="container mt-5">
                <div className="bg-white rounded">
                    <div className="row pt-3 mb-3">
                        <div className="col-12 text-center">
                            Hello world
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default Page