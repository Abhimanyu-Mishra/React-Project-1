import React from 'react'

const Reusable = () => {
  return (
    <div >
      <img src='{props.img}' alt=''/>
      <h1>{props.head}</h1>
      <p>{props.para}</p>
    </div>
  )
}

export default Reusable
