import React from 'react'
import './SocialMedia.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import pintrest from '../../assets/social.png'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='sm-container'>
        <div className="sm-content">
            <img width={100} src={logo} alt="" />
            <p>Our company is a comprehensive enterprise that integrates the research and development, production, sales, and service of PVC-U profiles in China. We offer a wide range of products including uPVC profiles, uPVC aluminum profiles, uPVC windows, uPVC doors, uPVC sliding windows, uPVC casement windows, uPVC swing doors, and more.</p>
            <div className="sm-icons">
                <Link><img width={40} src={facebook} alt="" /></Link>
                <Link><img width={40} src={insta} alt="" /></Link>
                <Link><img width={40} src={pintrest} alt="" /></Link>
                <Link><img width={40} src={twitter} alt="" /></Link>
            </div>
        </div>
        <div className="sm-links">
            <h2>Company</h2>
            <div className="linkss">
                <Link to={'/'}>Home</Link>
                <Link to={'/product'}>Products</Link>
                <Link to={'/search'}>Search</Link>
                <Link>About us</Link>
                <Link>Contact us</Link>
                <Link>F.A.Q's</Link>
                <Link>Privacy policy</Link>
                <Link>Terms and Conditions</Link>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia
