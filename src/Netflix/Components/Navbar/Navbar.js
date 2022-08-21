import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './logo.png'
import user from './user.png'

const Navbar = () => {

  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 50 ){
        setShow(true);
      }
      else{
        setShow(false)
      }
    })
  }, [window.scrollY])

  return (
    <nav className={ show ? "nav_dark" : '' }  >
        <div className="container navbar">
            <img className='logo' src={logo} alt="logo" />
            <img className='user' src={user} alt="" />
        </div>
    </nav>
  )
}

export default Navbar