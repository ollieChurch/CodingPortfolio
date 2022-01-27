import { Link } from 'react-router-dom'
import './featuredCard.css'

import articleData from '../../pages/Articles/ArticlePost/articleData'
import LightPanel from '../LightPanel'

function FeaturedCard( {topic='helloworld', contentHeight=416} ) {
    const {src, title, img, imgAlt, introText} = articleData[topic]
    const heightCalc = (contentHeight * 0.5) - 14

    return (
            <Link to={`/articles/${src}`} className='removeLinkStyling' style={{maxHeight: `${heightCalc}px`}}>
                <LightPanel addedClasses='articles-featuredCard'>
                    <img className='featuredCard-img' src={img} alt={imgAlt} />
                    <h4 className='featuredCard-title'>{title}</h4>
                    <div className='featuredCard-textContainer'>
                        <p className='featuredCard-text dropFont'>{introText}</p>
                    </div>
                    <p className='featuredCard-link'>Read More</p>
                </LightPanel>
            </Link>
    )
}

export default FeaturedCard