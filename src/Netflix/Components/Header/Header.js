import React, { useState, useEffect } from 'react'
import banner from './Banner.jpg'
import './Header.css'
import axios from 'axios'

const Header = (props) => {

  const [popular, setPopular] = useState([]);
  const [no, setNo] = useState();

  const link = props.data;

  const fetch2 = async () => {
    const result = await axios.get(link);
    // console.log(result.data.results);
    setPopular(result.data.results[
      Math.floor(Math.random() * result.data.results.length )
    ]);
    console.log(popular)
  }

  useEffect(() => {
    fetch2();
  }, [props.data]);


  // const backdrop_path = popular[0].backdrop_path;
  // const poster_img_link =  `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <header className='header' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${popular.backdrop_path}')` }} >
      <div className="container banner_details">
        <h1> {popular.title} </h1>
        <div className="buttons">
          <button className="btn play">Play</button>
          <button className="btn lsit">MyList</button>
        </div>
        <p>
          {popular.overview}
        </p>
      </div>

      <div className="header_fade"></div>
    </header>
  )
}

export default Header