import {useState, useEffect} from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import './tempLanding.css'

import GreetingRoute from '../../assets/images/svg/GreetingRoute'
import SelfieDoodle from '../../assets/images/svg/SelfieDoodle'
import Contact from '../Home/Contact'

function TempLanding() {
    const [useGreetingRoute, setUseGreetingRoute] = useState(true)
    const {windowSize} = useWindowSize()

    useEffect(() => {
        windowSize.width >= 600 ? setUseGreetingRoute(true) : setUseGreetingRoute(false)
    }, [windowSize])

    return (
        <main>
            <div className="content greeting-content">
                {useGreetingRoute && <GreetingRoute />}
                <SelfieDoodle />
                <div className="greeting-textContainer">
                    <h1 className="greeting-title">
                        Hi I'm <span className="highlight-pink">Ollie</span>
                    </h1>
                    <p className="greeting-description">Software Developer</p>
                    <div className="greeting-skills">
                        <img
                            width="128"
                            alt="Csharp Logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                        />
                        <i className="fab fa-react"></i>
                        <i className="fab fa-vuejs"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-html5"></i>
                    </div>
                    <p className="greeting-para dropFont">
                        Thanks for stopping by, this site is currently being
                        updated as I have taken on a new role with{' '}
                        <a href="https://www.salaryfinance.com/uk">
                            Salary Finance
                        </a>
                        . In the meantime, you can contact me below or take a
                        look at my{' '}
                        <a href="https://www.linkedin.com/in/olliechurch/">
                            LinkedIn
                        </a>{' '}
                        and <a href="https://github.com/ollieChurch">GitHub</a>.
                    </p>
                </div>
            </div>

            <Contact />
        </main>
    )
}

export default TempLanding
