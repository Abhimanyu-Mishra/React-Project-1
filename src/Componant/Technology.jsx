import React from 'react'
import { useContext } from 'react'
import { store } from './Details'
import Reusable from '../Utility/Reusable'
const Technology = () => {
  const [data]=useContext(store)
  console.log(data);
  return (
    <div>
    <div >
    <h1>Technology</h1>
    <div className='line'></div>
    <div className='parent'>
    <div className='div1'>

  {
    data.filter((i)=>{return(i.category==='Technology')}).map((n)=>(
      
        <Reusable
        key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title.slice(0,15)}
                description={n.description.slice(0, 60)}
                author={n.author}
        
        />
        
      
    ))
  }
 
    </div>  
   
    <div className='div2'>
    <h1>Top Post</h1>
    <div className='line'></div>
    {
      data.filter((i)=>{return(i.category==='Technology')}).map((n)=>(
        
          <Reusable
          key={n.id}
                  articleid={n.id}
                  imgUrl={n.img}
                  title={n.title.slice(0,15)}
                  description={n.description.slice(0, 15)}
                  author={n.author}
          
          />
          
        
      ))
    }
    <div className='adver'> </div>
    </div>

    </div>
 </div>


    </div>
  )
}

export default Technology
