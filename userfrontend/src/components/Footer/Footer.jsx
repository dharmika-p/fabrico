import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

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
                <li><Link to="/">Home</Link></li>
                <li><a href="#explore-styles">Closet</a></li> 
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get in touch</h2>
                <ul>
                   <li><a href="tel:+919743367345">+91 97433 67345</a></li>
                   <li><a href="mailto:enquiry.fabrico.in">enquiry.fabrico.in</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © Fabrico. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
