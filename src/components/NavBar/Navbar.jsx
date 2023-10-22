import './Navbar.css'
import React, { useState, useEffect } from 'react'

function Navbar() {

    const [small, changeSmall] = useState(false)
    const [responsiveNav, visibleresponsiveNav] = useState(false)

    useEffect(() => {

        winidowWidth()
        window.addEventListener('resize', winidowWidth)

        return () => {

            window.removeEventListener('resize', winidowWidth);

        }

    }, [])

    const winidowWidth = () => {

        const width = window.innerWidth
        console.log(width);
        if (width <= 767) changeSmall(true)
        else changeSmall(false)

    }

    return (
        <div className='nav-bar'>

            <div className="left-section">

                <img onClick={(e) => {

                    if (responsiveNav) visibleresponsiveNav(false, changeSmall(true))
                    else if (e.target.className === 'netflix-N-logo') visibleresponsiveNav(true, changeSmall(false))

                }} className={(small || responsiveNav) ? 'netflix-N-logo' : 'netflix-logo'} src={(small || responsiveNav) ? "https://upload.wikimedia.org/wikipedia/commons/3/35/Nficon2016.png?" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"} alt="logo" />
                {!small && <div className={responsiveNav ? 'responsive-left-lists' : 'left-lists'} >

                    <ul className={responsiveNav ? 'responsive-left-menu' : 'menu'} >
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Recently Added</li>
                        <li>My List</li>
                    </ul>

                </div>}

            </div>
            <div className="right-section">

                <div className={(small || responsiveNav) ? 'responsive-search' : 'search'}>

                    <input type="text" placeholder='Search' />
                    <i class='bx bx-search'></i>

                </div>
                {!small && <div className={responsiveNav ? 'responsive-right-lists' : 'right-lists'}>

                    <ul className={responsiveNav ? 'responsive-right-menu' : 'menu'} >

                        <li>KIDS</li>
                        <li>DVD</li>

                    </ul>

                </div>}
                <i id='notification' class='bx bxs-bell'></i>
                <img className='netflix-avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />

            </div>

            <div className={responsiveNav ? "responsive-menu" : 'not-responsive-menu'}>



            </div>

        </div>
    )
}

export default Navbar