import React from 'react'
import { Link } from 'react-router-dom'

import '../css/navBar.css'

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>
                <Link to='/'>
                    หรรษา
                </Link>
            </div>
            <div className='navbar__item'>
                <Link to='/contact'>
                    contact
                </Link>
            </div>
            <div className='navbar__item'>
                <Link to='/community'>
                    community
                </Link>
            </div>
        </header>
    )
}

export default NavBar