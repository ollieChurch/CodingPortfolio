import { Link } from 'react-router-dom'
import './featuredCard.css'

import articleData from '../../pages/Articles/ArticlePost/articles/articleData'

function FeaturedCard( {topic='helloworld'} ) {
    const {src, title, img, imgAlt, introText} = articleData.[topic]

    return (
        <Link to={`/articles/${src}`} className='articles-featuredCard removeLinkStyling'>
            <img className='featuredCard-img' src={img} alt={imgAlt} />
            <h4 className='featuredCard-title'>{title}</h4>
            <div className='featuredCard-textContainer'>
                <p className='featuredCard-text dropFont'>{introText}</p>
            </div>
            <p className='featuredCard-link'>Read More</p>
        </Link>
    )
}

export default FeaturedCard