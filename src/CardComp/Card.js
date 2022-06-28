import React from 'react'
import './Card.css'

function Card({title,price,Category,image}) {
  return (
    <div className="container">
            <h4>{title}</h4>
            <img src={image} alt="" height="250px" width="200px" align="center"></img>
            
            <p style={{padding:"0"}}>Price: {price}$</p>
          
    </div>
  )
}

export default Card