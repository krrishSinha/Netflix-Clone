import React from 'react'
import './HomeHeader.css'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <section className='home_header'>
      <div className='home_header_info'>

        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Click on Get Started to start your 30 days free trail</p>

        <div className="email_div">
          {/* <input type="email" placeholder='Email Address' /> */}

          <Link to="/home">
            <button className='btn'>Get Started &gt; </button>
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default HomeHeader