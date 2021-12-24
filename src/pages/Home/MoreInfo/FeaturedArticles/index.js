import FeaturedCard from '../../../../components/FeaturedCard'
import './featuredArticles.css'

function FeaturedArticles() {
    return (
        <div className='moreInfo-featuredArticles'>
            <h3 className='moreInfo-title'>
                Featured Articles <i className="far fa-newspaper"></i>
                <div className='moreInfo-cardContainer'>
                    <FeaturedCard topic='codingjourney' />
                    <FeaturedCard topic='lovecssgrid'/>
                </div>
            </h3>
        </div>
    )
}

export default FeaturedArticles