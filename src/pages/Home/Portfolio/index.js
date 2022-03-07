// import { useEffect, useState } from 'react'
// import useWindowSize from '../../../hooks/useWindowSize'
import './portfolio.css'

import CallToScroll from '../../../components/CallToScroll'
// import PortfolioCarousel from './PortfolioCarousel'
import PortfolioCards from './PortfolioCards'

function Portfolio() {
    // const [useCarousel, setUseCarousel] = useState(false)
    // const { windowSize } = useWindowSize()

    // useEffect(() => {
    //     windowSize.width >= 1130 ? setUseCarousel(true) : setUseCarousel(false)
    // }, [windowSize])
    
    return(
        <section className='portfolio-container section-dark' id='portfolioSection'>
            <div className='content portfolio-content'>
                {/* {useCarousel ? <PortfolioCarousel /> : <PortfolioCards />} */}
                <PortfolioCards />
            </div>
            <CallToScroll nextSection='moreInfoSection'>
                <p>Find Out About <span className='highlight-pink'>Me</span></p>
            </CallToScroll>
        </section>
    )
}

export default Portfolio