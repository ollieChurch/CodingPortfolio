import './portfolio.css'
import CallToScroll from '../../../components/CallToScroll'
import PortfolioCarousel from './PortfolioCarousel'

function Portfolio() {
    return(
        <section className='portfolio-container section-dark' id='portfolioSection'>
            <div className='content portfolio-content'>
                <PortfolioCarousel />
                
                <CallToScroll nextSection='moreInfoSection'>
                    <p>Find Out About <span className='highlight-pink'>Me</span></p>
                </CallToScroll>
            </div>
        </section>
    )
}

export default Portfolio