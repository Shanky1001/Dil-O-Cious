
import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import '../Components/Components Styles/Nav.css'

const NavBar = () => {

    const dark = () => {
        document.querySelector("#themeSwitcher").classList.toggle('fa-sun');
        document.querySelector("#body").classList.toggle("darkTheme");
    }

    return (
        <div id="navContainer">
            <header className="header">
                <div className="logo">
                    <Link to="/"><img src={'https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/ms.settings/5256837ccc4abf1d39000001/webp/589eeda381c872391b08f498-480x480.png'} alt="logo" /> </Link>
                </div>
                <nav className="navbar">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/menu"><h1>Menu</h1></Link>
                    <span onClick={dark} ><i class="fa-solid fa-moon" id='themeSwitcher'></i></span>
                    <Link to="/cart"><h1 className="fas fa-shopping-cart cart-btn" > <span></span></h1></Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar