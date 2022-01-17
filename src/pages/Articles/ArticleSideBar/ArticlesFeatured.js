import LightPanel from '../../../components/LightPanel'
import FeaturedCard from '../../../components/FeaturedCard'

function ArticlesFeatured() {
    return (
        <div className='articles-sideBar-panel articles-featured'>
            <h3 className='articles-homeTitle'>Featured Articles <i className="far fa-newspaper"></i></h3>
            <div className='articles-featuredContainer'>
                <LightPanel addedClasses='articles-featuredLightPanel'>
                    <FeaturedCard topic='codingjourney'/>
                </LightPanel>
                <LightPanel addedClasses='articles-featuredLightPanel'>
                    <FeaturedCard topic='lovecssgrid'/>
                </LightPanel>
            </div>
        </div>
    )
}

export default ArticlesFeatured