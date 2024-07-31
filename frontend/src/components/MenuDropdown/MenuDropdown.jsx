import React from 'react'
import './MenuDropdown.css'
import AnimationWrapper from "../AnimationWrapper";
import { Link } from 'react-router-dom'

const MenuDropdown = () => {
  return (
    <AnimationWrapper className='menu-dd' transition={{duration: 0.2}}>
        <div className='menu-drop-down'>
            <div className="menu-drop-down-btn">
                <Link to='/'>Home</Link>
                <Link to='/'>Products</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/'>Search</Link>
                <Link to='/'>Contact us</Link>
                <Link to='/'>About us</Link>
            </div>
        </div>  
    </AnimationWrapper>
   
  )
}

export default MenuDropdown
