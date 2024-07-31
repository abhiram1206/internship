import React from 'react'
import './AboutUs.css'
import img from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow (1).png'

const AboutUs = () => {
  return (
    <div className='about-us'>
        <Link to={'/'}><img src={arrow} alt="" className='back'/></Link>
        <div className="top">
            <h1>About Us</h1>
        <div className="about">
            <img src={img} alt="" />
            <p>Utmost is dedicated to providing top-quality UPVC Window profiles that enhance the beauty, comfort, and efficiency of homes across India. With over 10 years of experience, we are known for our commitment to innovation, sustainability, and customer satisfaction. Our products are crafted using the latest technology and adhere to international quality standards, ensuring our customers receive nothing but the best.</p>
        </div>
        </div>
    </div>
  )
}

export default AboutUs
