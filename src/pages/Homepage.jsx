import React from 'react'
import {Link} from "react-router-dom";
import './styles/Homepage.css'

export default function Homepage() {
  return (
    <div>
        <img src="home2.png" alt=""  />      
      <ul>
        <Link to='/SignUp' className='button1'>SignUp</Link>
        <Link to='/Login' className='button2'>Login</Link>
    </ul>

    </div>
  )
}

