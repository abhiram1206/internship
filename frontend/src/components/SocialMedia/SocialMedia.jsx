import React from 'react'
import './SocialMedia.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import pintrest from '../../assets/social.png'
import made from '../../assets/made.png'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='sm-container'>
        <div className="sm-content">
            <div className="sm-logo">
                <img width={100} src={logo} alt="" />
                <img width={100} src={made} alt="" />
            </div>
            <p>Our company is a comprehensive enterprise that integrates the research and development, production, sales, and service of PVC-U profiles in China. We offer a wide range of products including uPVC profiles, uPVC aluminum profiles, uPVC windows, uPVC doors, uPVC sliding windows, uPVC casement windows, uPVC swing doors, and more.</p>
            <div className="sm-icons">
                <Link><img src={facebook} alt="" /></Link>
                <Link><img src={insta} alt="" /></Link>
                <Link><img src={pintrest} alt="" /></Link>
                <Link><img src={twitter} alt="" /></Link>
            </div>
        </div>
        <div className="sm-links">
            <h2>Company</h2>
            <div className="linkss">
                <a href={'/'}>Home</a>
                <a href={'/product'}>Products</a>
                <a href={'/search'}>Search</a>
                <a href={'/aboutus'}>About us</a>
                <a href={'/contactus'}>Contact us</a>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia
