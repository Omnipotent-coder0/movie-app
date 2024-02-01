import React from 'react'
import logo from "../../images/netflix-logo.png"
import {Link, useNavigate } from 'react-router-dom'
import { TfiSearch } from "react-icons/tfi";

function Header() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/")
    }
  return (
    <nav className="header">
        <img className='logo' src={logo} alt="logo" onClick={handleClick}/>
        {/* <Link to = '#' >
        </Link> */}
        <div>
            <Link to="/tvshows" >TV Shows</Link>
            <Link to = '/movies' >Movies</Link>
            <Link to = '/recent' >Recently Added</Link>
            <Link to = '/mylist' >My List</Link>
        </div>
        <TfiSearch />
    </nav>
  )
}

export default Header