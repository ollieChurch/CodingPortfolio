import Nav from '../../../components/Nav'
import './articlesHeader.css'

function ArticlesHeader() {
    return (
        <header className='header-articles'>
            <div className='header-content'>
                <a className='header-title' href='/articles'>
                    <h1>Ollie</h1>
                    <p>Frontend Developer</p>
                </a>
                <Nav addHome />
            </div>
        </header>
    )
}

export default ArticlesHeader