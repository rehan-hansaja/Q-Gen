import React from 'react'
import {Link,useMatch,useResolvedPath} from "react-router-dom";
import './Navbar.css'
import {FaReact} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='nav'>
    <Link to ='/' className='site-title'><FaReact className='icons react'/>&nbsp;&nbsp;Q-Gen</Link>
    <ul class='list'>
      
        <CustomLink to='/' className='home'>Home</CustomLink>
        <CustomLink to='/Study' className='home'>MCQ</CustomLink>
        <CustomLink to='/Contact ' className='home'>Contact Us</CustomLink>
         <CustomLink to='/Pricing' className='home'>Subscriptions</CustomLink>
         
    </ul>

    </nav>
  )
}

function CustomLink ({to,children,...props}){
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({path:resolvePath.pathname,end : true})
  return(
    <li className={isActive ? 'active':''}>
      <Link to= {to}{...props}>
        {children}
      </Link>
    </li>
  )

}