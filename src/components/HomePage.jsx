import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to="/product/1">Product 1</Link>
      <br/>
      <Link to="/product/2">Product 2</Link>
      <br/>
      <Link to="/product/3">Product 3</Link>
      <br/>
    </div>
  )
}

export default HomePage
