import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='logo' src={assets.logo_bottom} alt="" />
                <p>Fabrico is your cozy little corner for all things fashion! From trendy tops to dreamy dresses, we bring handpicked styles that feel as good as they look. Whether you're dressing up or keeping it casual, Fabrico helps you look your best, effortlessly. ✨👗💫</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Closet</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 97433 67345</li>
                    <li>enquiry.fabrico.in</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © Fabrico. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
