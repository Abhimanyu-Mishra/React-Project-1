import React from 'react'
import { useContext } from 'react'
import { store } from './Details'
import './Home.css'
const Home = () => {
 const [data] = useContext(store);
 console.log(data)
  return (
    <div>
     <div className='maindiv'>
      <div ><img className='sub1' src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/technology-trend-freepik-1647963838.jpg'  alt='hbf'/></div>
      <div className='sub2'>
       <div className='mini1'><img src='https://w0.peakpx.com/wallpaper/519/85/HD-wallpaper-lonely-island-ocean-nature-island-waves-trees-clouds-art-work-thumbnail.jpg' /></div>
       <div className='mini2'><img src='https://w0.peakpx.com/wallpaper/740/686/HD-wallpaper-nature-3d-water-digital-beautiful-thumbnail.jpg'/></div>
      </div>
     </div>
    </div>
  )
}

export default Home
