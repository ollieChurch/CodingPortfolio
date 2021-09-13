import { Link } from 'react-router-dom'
import './nav.css'

function Nav({addHome=false}) {
    return(
        <nav>
            <Link to={addHome ? '/' : '/articles'} className='nav-link'>{addHome ? 'Home' : 'Articles'}</Link>
            <Link to='/' className='nav-link'>CV</Link>
            <Link to='/' className='nav-link'>Git Hub</Link>
            <Link to='/' className='nav-link'>LinkedIn</Link>
            <a href='/#contactSection' className='nav-link'>Contact</a>
        </nav>
    )
}

export default Nav