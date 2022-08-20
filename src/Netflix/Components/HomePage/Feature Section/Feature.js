import React from 'react'
import './Feature.css'

const Feature = () => {
    return (
        <section className='feature'>
            <div className='feature_info'>
                <div className="info">
                    <h1> Enjoy on your TV.  </h1>
                    <h2> Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </h2>
                </div>

                <div className="image">
                    <div className='img_div'>
                        <img className='feature_img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />

                        <div className='video_div'>
                            <video className='feature_video' autoPlay loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature