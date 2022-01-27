import FeaturedCard from '../../../components/FeaturedCard'

function ArticlesFeatured() {
    return (
        <div className='articles-sideBar-panel articles-featured'>
            <h3 className='articles-homeTitle'>Featured Articles <i className="far fa-newspaper"></i></h3>
            <div className='articles-featuredContainer'>
                <FeaturedCard topic='codingjourney'/>
                <FeaturedCard topic='lovecssgrid'/>
            </div>
        </div>
    )
}

export default ArticlesFeatured