import React from 'react'
import "./Footer.css"
import linkdin from "../Images/Linkdin.png"; 
import youtub from "../Images/youtub.png"; 
import facebook from "../Images/facebok.png"; 
import twitter from "../Images/twitter.png"; 

const Footer = () => {
  return (
    <div className='Footer_container'>

        <div className='footer-box1'>
           <p>Copyright © 2020 techstalwarts.com. All Rights Reserved.</p>
        </div>

        <div className='footer-box2'>
            <div className='social-media-img' > <img src={facebook} alt='' /> </div>
            <div className='social-media-img' > <img src={youtub} alt='' /></div>
            <div className='social-media-img' > <img src={linkdin} alt='' /></div>
            <div className='social-media-img' > <img src={twitter} alt='' /></div>
        </div>

    </div>
  )
}

export default Footer
