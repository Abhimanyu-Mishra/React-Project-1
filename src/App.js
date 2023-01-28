import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Utility/Header'
import Home from './Componant/Home'
import Bollywood from './Componant/Bollywood'
import Fitness from './Componant/Fitness'
import Food from './Componant/Food'
import Money from './Componant/Money'
import News from './Componant/News'


const App = () => {

  return (
    <div>
      <div>
      <Header/>
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/bolly' element={<Bollywood/>}/>
      <Route path='/fit' element={<Fitness/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/money' element={<Money/>}/>
      <Route path='/news' element={<News/>}/>
      </Routes>
      
    </div>
  )
}

export default App








