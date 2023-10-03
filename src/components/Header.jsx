import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <div>
      <div className='aa'>
        My App &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={props.xxx} >Log Out</button>
      </div>
    </div>
  )
}

export default Header
