import FeaturedCard from '../../../../components/FeaturedCard'
import './featuredArticles.css'

function FeaturedArticles() {
    return (
        <div className='moreInfo-featuredArticles'>
            <h3 className='moreInfo-title'>
                Featured Articles <i className="far fa-newspaper"></i>
            </h3>    
            <div className='moreInfo-cardContainer'>
                <FeaturedCard topic='codingjourney' />
                <FeaturedCard topic='lovecssgrid'/>
            </div>
        </div>
    )
}

export default FeaturedArticles