import LightPanel from '../../../components/LightPanel'
import './articleSideBar.css'
import FeaturedCard from '../../../components/FeaturedCard'

function ArticleSideBar() {
    return (
        <aside>
            <LightPanel addedClasses='articles-sideBar'>
                <h3 className='featuredArticles-head'>Featured Articles</h3>
                <FeaturedCard />
                <FeaturedCard />
            </LightPanel>
        </aside>
    )
}

export default ArticleSideBar