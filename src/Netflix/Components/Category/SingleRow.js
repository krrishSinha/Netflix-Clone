import React from 'react'
// import './SingleRow.css'

const SingleRow = ({img, handleClick}) => {
    const poster_path = img.poster_path;
    const poster_img_link = `https://image.tmdb.org/t/p/original/${poster_path}`;

    return (
            <div className="row" key={img.id}>
                <div className='poster_div' onClick={() => { handleClick(img) }}  >
                    <img className='poster' src={poster_img_link} key={img.id} />
                </div>
            </div>
    )
}

export default SingleRow