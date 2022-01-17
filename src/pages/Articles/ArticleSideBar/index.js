import LightPanel from '../../../components/LightPanel'
import './articleSideBar.css'
import FeaturedCard from '../../../components/FeaturedCard'

function ArticleSideBar() {
    return (
        <aside className='articles-sideBar'>
            <LightPanel addedClasses='articles-sideBar-panel sideBar-featured'>
                <h3 className='articles-sideBar-head'>Featured Articles <i className="far fa-newspaper"></i></h3>
                <FeaturedCard topic='codingjourney'/>
                <FeaturedCard topic='lovecssgrid'/>
            </LightPanel>
            <LightPanel addedClasses='articles-sideBar-panel'>
                <h3 className='articles-sideBar-head'>Article Tags <i class="fas fa-tags"></i></h3>
                <div className='articles-tagsContainer'>
                    <button>tag1</button>
                    <button>tag2</button>
                    <button>tag3</button>
                    <button>tag4</button>
                </div>
            </LightPanel>
        </aside>
    )
}

export default ArticleSideBar