import React from 'react'
import './App.css'
// import Category from './Netflix/Components/Category/Category'
// import Header from './Netflix/Components/Header/Header'
import Navbar from './Netflix/Components/Navbar/Navbar'
// import data from './Netflix/Fetchdata/Data';
// import { Scrollbar } from 'react-scrollbars-custom';
import { Routes, Route } from 'react-router-dom';
import Netflix from './Netflix/Components/Netflix'
import Home from './Netflix/Components/HomePage/Home'
// import Cart from './Cart/Cart'
// import Users from './Users/Users'
// import News from './TechNews/News'
// import ToDo from './ToDo/ToDo'
// import Whether from './Whether/Whether'
// import UseReducer from './UseReducer/UseReducer'
// import Restaurant from './Restaurant/Restaurant'

function App() {
  return (

    <div className='body'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Netflix />} />
      </Routes>
    </div>
  )
}

export default App