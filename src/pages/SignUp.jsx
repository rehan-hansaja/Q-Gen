import React from 'react'
import { useState} from "react"
import './styles/SignUp.css'


export default function SignUp() {
    
    const [action,setAction] = useState('Sign Up');
  return (

    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <input type='text' placeholder='Username'/>
            </div>
            <div className='input' >
                <input type='tel' placeholder='Mobile Number'/>
            </div>
            <div className='input' >
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        <div className='remember-password'>
            <input type="checkbox"/> Remember Password
        </div>
        <div className='submit' onClick={()=> {setAction('Sign Up')}}>Sign Up</div>
    </div>
  )
}
