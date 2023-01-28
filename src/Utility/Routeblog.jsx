import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Componant/Home'
import Movies from '../Componant/Movies'
import Fitness from '../Componant/Fitness'
import Food from '../Componant/Food'
import Money from '../Componant/Money'
import News from '../Componant/News'


const Routeblog = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/fit' element={<Fitness/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/money' element={<Money/>}/>
    <Route path='/news' element={<News/>}/>
    </Routes>
    </div>
  )
}

export default Routeblog
