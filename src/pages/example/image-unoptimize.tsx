import Layout from "@/components/Layout/Default"
import React, { ReactElement } from "react"
import Image from 'next/image'


const Page = (): ReactElement => {
    const images = [
        {id: 1,url: "/images/ghibli/studio-ghibli-video-backdrops-1.jpg", alt:"ghibl 1", width: 750, height: 422},
        {id: 2,url: "/images/ghibli/studio-ghibli-video-backdrops-2.jpg", alt:"ghibl 2", width: 750, height: 423},
        {id: 3,url: "/images/ghibli/studio-ghibli-video-backdrops-3.jpg", alt:"ghibl 3", width: 750, height: 422},
        {id: 4,url: "/images/ghibli/studio-ghibli-video-backdrops-4.jpg", alt:"ghibl 4", width: 750, height: 423},
        {id: 5,url: "/images/ghibli/studio-ghibli-video-backdrops-5.jpg", alt:"ghibl 5", width: 750, height: 422},
        {id: 6,url: "/images/ghibli/studio-ghibli-video-backdrops-6.jpg", alt:"ghibl 6", width: 750, height: 422},
        {id: 7,url: "/images/ghibli/studio-ghibli-video-backdrops-7.jpg", alt:"ghibl 7", width: 750, height: 422},
        {id: 8,url: "/images/ghibli/studio-ghibli-video-backdrops-8.jpg", alt:"ghibl 8", width: 750, height: 422},
        {id: 9,url: "/images/ghibli/studio-ghibli-video-backdrops-9.jpg", alt:"ghibl 9", width: 750, height: 1333},
        {id: 10,url: "/images/ghibli/studio-ghibli-video-backdrops-10.jpg", alt:"ghibl 10", width: 750, height: 423},
        {id: 11,url: "/images/ghibli/studio-ghibli-video-backdrops-11.jpg", alt:"ghibl 11", width: 750, height: 425},
        {id: 12,url: "/images/ghibli/studio-ghibli-video-backdrops-12.jpg", alt:"ghibl 12", width: 750, height: 422},
    ]
    return (
        <Layout>
            <div className="container mt-5">
                <div className="bg-white rounded">
                    <div className="row pt-3">
                        <div className="col-12 text-center">
                            <h1>Next.js i18n image optimization</h1>
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        {images.map(({ id, alt, height, url, width}) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4" key={id}>
                                    <Image src={url} alt={alt} width={width} height={height} unoptimized={true} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Page