import LightPanel from '../../../components/LightPanel'
import './articleSideBar.css'
import FeaturedCard from '../../../components/FeaturedCard'

function ArticleSideBar() {
    return (
        <aside>
            <LightPanel addedClasses='articles-sideBar'>
                <h3 className='featuredArticles-head'>Featured Articles <i className="far fa-newspaper"></i></h3>
                <FeaturedCard topic='codingjourney'/>
                <FeaturedCard topic='lovecssgrid'/>
            </LightPanel>
        </aside>
    )
}

export default ArticleSideBar