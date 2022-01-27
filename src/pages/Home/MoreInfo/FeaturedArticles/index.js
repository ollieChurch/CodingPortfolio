import FeaturedCard from '../../../../components/FeaturedCard'
import './featuredArticles.css'

function FeaturedArticles({contentHeight}) {
    return (
        <div className='moreInfo-featuredArticles'>
            <h3 className='moreInfo-title'>
                Featured Articles <i className="far fa-newspaper"></i>
            </h3>  
            <div className='moreInfo-cardContainer'>
                <FeaturedCard topic='codingjourney' contentHeight={contentHeight} />
                <FeaturedCard topic='lovecssgrid' contentHeight={contentHeight} />
            </div>
        </div>
    )
}

export default FeaturedArticles