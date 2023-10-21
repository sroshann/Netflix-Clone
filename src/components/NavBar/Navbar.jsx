import './Navbar.css'
import React from 'react'

function Navbar() {
    return (
        <div className='nav-bar'>

            <div className="left-section">

                <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
                <div className="left-lists">

                    <ul className='menu' >
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Recently Added</li>
                        <li>My List</li>
                    </ul>

                </div>

            </div>
            <div className="right-section">

                <div className="search">

                    <input type="text" placeholder='Search' />
                    <i class='bx bx-search'></i>

                </div>
                <div className="right-lists">

                    <ul className='menu' >

                        <li>KIDS</li>
                        <li>DVD</li>

                    </ul>

                </div>
                <i id='notification' class='bx bxs-bell'></i>
                <img className='netflix-avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />


            </div>

        </div>
    )
}

export default Navbar