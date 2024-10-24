import React, { useContext, useState } from 'react'
import { UserContext } from '../../App';
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import refer from '../../assets/refer-arrow.svg'
import adduser from '../../assets/add-user.png'
import carts from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'
import search from '../../assets/searchs.png'
import menuicon from '../../assets/list.png'
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import { useCart } from '../../context/CartContext';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const { cart } = useCart(); 
    const [userNavPanel, setuserNavPanel] = useState(false);
    const { userAuth, userAuth:{ access_token,profile_img } } = useContext(UserContext)

    const handleUserNavPanel = () => {
        setuserNavPanel(currentVal => !currentVal)
    }

    const handleNavBlur = () => {
        setTimeout(()=>{
            setuserNavPanel(false)
        },200)
    }

  return (
    <div className='Navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="" />
        </div>
        <div className="navbar-left">
            <ul>
                <li><Link to="/" onClick={()=>setMenu('home')} id='home' className={menu === 'home'?'active':""}>Home</Link></li>
                <li><Link to={'/product'} onClick={()=>setMenu('products')} className={menu==='products'?'active':""}>Products</Link></li>
                <li><Link to={'/aboutus'} onClick={()=>setMenu('aboutus')} className={menu==='aboutus'?'active':""}>About us</Link></li>
                <li><Link to={'/contactus'} onClick={()=>setMenu('contactus')} className={menu==='contactus'?'active':""}>Contact us</Link></li>
            </ul>
        </div>
        {access_token ?<div className="navbar-right">
            <Link to="/cart" className='cart-nav-btn button'>
                <img className='bt' width="15" src={carts} alt="" />
            </Link>
            <Link to="/search" className='cart-nav-btn button '>
                <img className='bt' width="15" src={search} alt="" />
            </Link>
            
            <Link to="/profile">
                <img width="48" src={profile_img} alt="profile" style={{backgroundColor:"white", borderRadius:"50px"}}/>
            </Link>  
            <div className="menu-drop" onClick={handleUserNavPanel} onBlur={handleNavBlur}>
                <img src={menuicon} alt="" style={{height:"32px",alignItems:"center"}} className='menu'/>
                {
                    userNavPanel ? <MenuDropdown/> :''
                }
            </div>   
        </div>
        :
        <div className="navbar-right">
            <Link to="/signin">
                <button className="signin button">
                    <img width="15" src={refer} alt="" />
                    <p>Sign in</p>
                </button>
            </Link>
            
            <Link to="/signup">
                <button className="signup button">
                    <img width="15" src={adduser} alt="" />
                    <p>Sign up</p>
                </button>
            </Link>     
        </div>
        }
        
    </div>
  )
}

export default Navbar;
