import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title, image, description, category,price,subCategory}) => {
  return (
    <Link to={`/products/${id}`} className='bg-white text-black p-4 rounded'>
        
        
        <img src={image} alt="Not Found" />
        <p>{description}</p>
        <p><b>Title:- </b>{title}</p>
        <p> <b> category :-</b> {category}</p>
        <p> <b> subCategory :-</b> {subCategory}</p>
        <p><b> price :-</b> {price}</p>

        
        
    </Link>
  )
}

export default Card


