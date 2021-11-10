import {useState, useEffect} from 'react'
import './moreInfo.css'

import useWindowSize from '../../../hooks/useWindowSize'

import GreetingRoute from '../../../assets/images/svg/GreetingRoute'
import CallToScroll from '../../../components/CallToScroll'
import LightPanel from '../../../components/LightPanel'
import AboutMe from './AboutMe'
import FeaturedArticles from './FeaturedArticles'

function MoreInfo() {
    const [useGreetingRoute, setUseGreetingRoute] = useState(true)
    const {windowSize} = useWindowSize()

    useEffect(() => {
        windowSize.width >= 600 ? setUseGreetingRoute(true) : setUseGreetingRoute(false)
    }, [windowSize])

    return (
        <section className='moreInfo-container' id='moreInfoSection'>
            {useGreetingRoute && <GreetingRoute />}
            <div className='content moreInfo-content'>
                <div className='moreInfo-grid'>
                    <LightPanel>
                        <AboutMe />
                    </LightPanel>

                    <LightPanel>
                        <FeaturedArticles />
                    </LightPanel>
                </div>

                
            </div>
            <CallToScroll direction='row' nextSection='contactSection'> 
                <p>Get In Touch</p>
            </CallToScroll>
        </section>
    )
}

export default MoreInfo