import React, { useEffect, useState } from 'react'
import './Category.css'
import YouTube, { YouTubePlayer } from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Carousel from 'react-elastic-carousel'

import axios from 'axios'
import SingleRow from './SingleRow'

const Category = (props) => {

  const [img, setImg] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  const link = props.data;
  const title = props.title;

  const fetch2 = async () => {
    const result = await axios.get(link);
    setImg(result.data.results)
  }

  useEffect(() => {
    fetch2();
  }, [props.data]);


  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl();
    } else {

      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error);
        })

    }
  }

  // const slider_div = document.querySelector('.row_container');

  // const leftBtn = () => {
  //   slider_div.scrollLeft = slider_div.scrollLeft - 300;
  // }

  // const rightBtn = () => {
  //   const width = slider_div.clientWidth;
  //   slider_div.scrollLeft = slider_div.scrollLeft + 300;
  // }


  return (

    <>

      {/* <button className="btn2 left" onClick={leftBtn} >
            <p> &lt; </p>
          </button>

          <button className="btn2 right" onClick={rightBtn} >
            <p> &gt; </p>
          </button> */}

      <section className='category container'>

        <h2> {title} </h2>

        <div className="row_container">

          {/* <div className="row"> */}
          {
            // < itemsToShow={4}>
            img.map((img) => {
              // const poster_path = img.poster_path;
              // const poster_img_link = `https://image.tmdb.org/t/p/original/${poster_path}`;
              return (
                <SingleRow img={img} handleClick={handleClick} />
                // <h1>hekllkoi</h1>
                // <div className='poster_div' onClick={() => { handleClick(img) }} key={img.id} >
                //   <img className='poster' src={poster_img_link} key={img.id} />
                // </div>
              )
            })
          }
          {/* </div> */}
        </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </section>
    </>
  )
}

export default Category