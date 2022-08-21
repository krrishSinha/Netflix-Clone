import React from 'react'
import Header from './Header/Header'
import Category from './Category/Category';
import data from '../Fetchdata/Data';

const Netflix = () => {
  return (
    <>
     <Header data={data.trending} />
          <Category title="Netflix Originals" data={data.netflix_originals} />
          <Category title="Trending" data={data.trending} />
          <Category title="Popular Shows" data={data.popular_tv_shows} />
          <Category title="Action Movies" data={data.action_movies} />
          <Category title="Science Fiction" data={data.science_fiction} />
          <Category title="Family Movies" data={data.family} />
          <Category title="Crime Movies" data={data.crime_movies} />
          <Category title="Comedy Movies" data={data.comedy_movies} />
    </>
  )
}

export default Netflix