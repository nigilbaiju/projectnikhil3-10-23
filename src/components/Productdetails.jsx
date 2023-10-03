import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
  const param =useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>{param.productId}</p>
    </div>
  )
}

export default Productdetails
