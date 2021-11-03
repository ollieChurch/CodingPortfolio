import { Link } from 'react-router-dom'
import './nav.css'
import cv from '../../assets/files/cv.pdf'

function Nav({addHome=false}) {
    return(
        <nav>
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
            <a href='/#contactSection' className='nav-link'>Contact</a>
        </nav>
    )
}

export default Nav