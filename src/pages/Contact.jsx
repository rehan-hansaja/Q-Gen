import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import './styles/Contact.css'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hkiv0k8', 'template_aaambcp', e.target, 'mXIOSOPiMZu1Wi8YO')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    const handleClick =() => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return(
        
        <div>
        
        <div className='form1'>
        <form  onSubmit={sendEmail}>
            <h1>Contact <span>the Team</span></h1>
            <input type="text" name="Name" id="" placeholder='Enter Name' required />
            <input type="email" name="email" id="" placeholder='Enter Email' required />
            <input type="phone" name="phone" id="" placeholder='+94' required />
            <textarea name="message" id="" cols="30" rows="4" placeholder='Enter Message' required></textarea>
            <button className='but' onClick={handleClick} type="submit">Send</button>

        </form></div>
        
        <div className='card-container1'>
            <div className='image-container'>
                {/* <img src="rehan.jpg" alt="" /> */}
                <p className='p2'>&nbsp;Rehan Hansaja</p>
                <FaFacebookSquare className="icons fb"/>
                <FaLinkedin className="icons link"/>
                <FaInstagram className="icons ig"/>
              
            </div>
            <div>
            
            
            </div>
            
            </div>
            <div className='card-container1'>
            <div className='image-container'>
                {/* <img src="aslam.jpg" alt=""  /> */}
                <p className='p2'>&nbsp;&nbsp;&nbsp;Aathif Aslam</p>
                <FaFacebookSquare className="icons fb"/>
                <FaLinkedin className="icons link"/>     
                <FaInstagram className="icons ig"/>
            </div>
            
          
            </div>
            <div className='card-container2'>
            <div className='image-container'>
                {/* <img src="dileesha.jpg" alt=""  /> */}
                <p className='p2'>Dileesha Gamage</p>
                <FaFacebookSquare className="icons fb"/>
                <FaLinkedin className="icons link"/>
                <FaInstagram className="icons ig"/>
            </div>
            </div>

            <div className='card-container2'>
            <div className='image-container'>
                {/* <img src="sasindu.jpg" alt=""  /> */}
                <p className='p1'>Sasindu Wickramasinghe</p>
                <FaFacebookSquare className="icons fb"/>
                <FaLinkedin className="icons link"/>
                <FaInstagram className="icons ig"/>
            </div>
            </div>
        
        
        
        </div>
         
        
    )
}

export default Contact