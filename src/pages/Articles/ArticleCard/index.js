import { Link, useRouteMatch } from 'react-router-dom'
import LightPanel from '../../../components/LightPanel'
import './articleCard.css'

import articleData from '../ArticlePost/articleData'

function ArticleCard( {topic='helloworld'} ) {
    let { url } = useRouteMatch()
    const { src, title, date, img, imgAlt, introText } = articleData.[topic]

    return (
        <Link to={`${url}/${src}`} className='removeLinkStyling'>
            <LightPanel addedClasses='articles-articleCard'>
                <img className='articleCard-img' src={img} alt={imgAlt} />
                <div>
                    <h2 className='article-title'>{title}</h2>
                    <p className='articleCard-date'>{date}</p>
                </div>
                <div className='articleCard-textContainer'>
                    <p className='articleCard-text dropFont'>{introText}</p>
                </div>
                <Link to={`${url}/${src}`}>Read More</Link>
            </LightPanel>
        </Link>
    )
}

export default ArticleCard