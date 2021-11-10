import { useEffect, useState } from 'react'
import './greeting.css'

import useWindowSize from '../../../hooks/useWindowSize'

import SelfieDoodle from "../../../assets/images/svg/SelfieDoodle"
import GreetingRoute from '../../../assets/images/svg/GreetingRoute'
import CallToScroll from '../../../components/CallToScroll'
import Nav from '../../../components/Nav'

function Greeting() {
    const [useGreetingRoute, setUseGreetingRoute] = useState(true)
    const {windowSize} = useWindowSize()

    useEffect(() => {
        windowSize.width >= 600 ? setUseGreetingRoute(true) : setUseGreetingRoute(false)
    }, [windowSize])

    return (
        <section className='greeting-container' id='greetingSection'>
            {useGreetingRoute && <GreetingRoute />}
            <Nav />
            <div className='content greeting-content'>
                <SelfieDoodle />
                <div className='greeting-textContainer'>
                    <h1 className='greeting-title'>
                        Hi I'm <span className='highlight-pink'>Ollie</span>
                    </h1>
                    <p className='greeting-description'>Frontend Developer</p>
                    <div className='greeting-skills'>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-html5"></i>
                    </div>
                </div>
            </div>
            <CallToScroll flex='column' nextSection='portfolioSection'>
                <p>See Some Of My Work</p>
            </CallToScroll>
        </section>
    )
}

export default Greeting