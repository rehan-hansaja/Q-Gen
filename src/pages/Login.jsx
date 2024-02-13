import React from 'react'
import { useState} from "react"
import './styles/Login.css'


export default function Login() {
    
    const [action,setAction] = useState('Login');
  return (

    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        
        <div className='inputs'>
            <div className='input'>
                <input type='text' placeholder='Username' />
            </div>
            <div className='input' >
                <input type='password' placeholder='Password'/>
            </div>
        </div>

        {/* <div className='remember-password'>
            <input type="checkbox"/> Remember Password
        </div> */}
        <div className='forgot-password'>Forgot Password? <span>Click Here</span></div>
        <div className='submit' onClick={()=> {setAction('Login')}}>Login</div>
    </div>
  )
}
