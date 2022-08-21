import React from 'react'
import Feature from './Feature Section/Feature'
import Feature2 from './Feature Section/Feature2'
import Feature3 from './Feature Section/Feature3'
import Questions from './Feature Section/Questions/Questions'
import Footer from './Footer/Footer'
import './Home.css'
import HomeHeader from './HomeHeader'

const Home = () => {
  return (
    <>
    <HomeHeader />
    <Feature />
    <Feature2 />
    <Feature3 />
    <Questions />
    <Footer />
    </>
  )
}

export default Home