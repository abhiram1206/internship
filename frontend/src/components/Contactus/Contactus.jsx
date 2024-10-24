import React from 'react'
import CustomerCare from '../CustomerCare/CustomerCare'
import arrow from '../../assets/arrow (1).png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Contactus = () => {
  return (
    <div style={{padding:"3vw"}}>
        <Link to={'/'}><img src={arrow} alt="" className='back'/></Link>
        <CustomerCare heading={"Contact US"}/>
    </div>
  )
}

export default Contactus
