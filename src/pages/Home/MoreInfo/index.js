import GreetingRoute from '../../../assets/images/svg/GreetingRoute'
import CallToScroll from '../../../components/CallToScroll'
import LightPanel from '../../../components/LightPanel'
import AboutMe from './AboutMe'
import './moreInfo.css'
import FeaturedArticles from './FeaturedArticles'

function MoreInfo() {
    return (
        <section className='moreInfo-container' id='moreInfoSection'>
            <GreetingRoute />
            <div className='content moreInfo-content'>
                <div className='moreInfo-grid'>
                    <LightPanel>
                        <AboutMe />
                    </LightPanel>

                    <LightPanel>
                        <FeaturedArticles />
                    </LightPanel>
                </div>

                <CallToScroll direction='row' nextSection='contactSection'> 
                    <p>Get In Touch</p>
                </CallToScroll>
            </div>
        </section>
    )
}

export default MoreInfo