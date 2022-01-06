import { Link } from 'react-router-dom'
import './nav.css'
import cv from '../../assets/files/cv.pdf'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect, useState } from 'react'

function Nav({addHome=false}) {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [menuOpen, setmenuOpen] = useState(false)
    const {windowSize} = useWindowSize()

    useEffect(() => {
        windowSize.width >= 725 ? setMobileMenu(false) : setMobileMenu(true)
    }, [windowSize])

    function toggleMenu() {
        setmenuOpen(prevState => !prevState)
    }

    return(
        <nav
            className={mobileMenu ? 'nav-mobile' : 'visibleNav'}
            style={{
                transform: `translateX(${mobileMenu ? menuOpen ? '0' : '100%' : '0'})`
            }}
        >
            {mobileMenu && 
                <button className='nav-mobileIcon' onClick={() => toggleMenu()}>
                    <i className="fas fa-bars" ></i>
                </button>
            }
            <Link to={addHome ? '/' : '/articles'} className='nav-link'>
                {addHome ? 'Home' : 'Articles'}
            </Link>
            <a href={cv} target='_blank' rel="noreferrer" className='nav-link'>CV</a>
            <a
                href='https://github.com/ollieChurch'
                target='_blank'
                rel="noreferrer" 
                className='nav-link'
            >
                Git Hub
            </a>
            <a
                href='https://www.linkedin.com/in/ollieChurch/'
                target='_blank'
                rel="noreferrer" 
                className='nav-link'
            >
                LinkedIn
            </a>
            <a href='/#contactSection' className='nav-link' onClick={toggleMenu}>Contact</a>
        </nav>
    )
}

export default Nav