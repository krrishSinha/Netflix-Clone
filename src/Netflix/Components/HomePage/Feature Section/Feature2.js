import React from 'react'
import './Feature2.css'

const Feature2 = () => {
  return (
    <section className='feature feature2'>
            <div className='feature_info'>
                <div className="image">
                    <div className='img_div'>
                        <img className='feature2_img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

                        <div className='stranger_div'>
                            <div>
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            </div>
                            <div>
                                <h2>Stranger Things</h2>
                                <p className='download' >Downloading...</p>
                            </div>
                            <div>
                                <p> &gt; </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="info">
                    <h1> Download your shows to watch offline.  </h1>
                    <h2>Save your favourites easily and always have something to watch. </h2>
                </div>

            </div>
        </section>
  )
}

export default Feature2