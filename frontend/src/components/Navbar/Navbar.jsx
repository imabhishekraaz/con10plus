import { Menu } from 'lucide-react'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='header'>
                <div className="three-line">
                    <Menu
                        className='three-btn'
                        size={20} />
                </div>
                <div className="logo">
                    <p>con10plus</p>
                </div>
                <div className="login-btn">
                    <button>LOG IN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
