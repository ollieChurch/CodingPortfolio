import { Link, useRouteMatch } from 'react-router-dom'
import LightPanel from '../../../components/LightPanel'
import './articleCard.css'

import articleData from '../ArticlePost/articles/articleData'

function ArticleCard( {topic='helloworld'} ) {
    let { url } = useRouteMatch()
    const { src, title, img, imgAlt, introText } = articleData.[topic]

    return (
        <LightPanel addedClasses='articles-articleCard'>
            <img className='articleCard-img' src={img} alt={imgAlt} />
            <h2>{title}</h2>
            <div className='articleCard-textContainer'>
                <p className='articleCard-text dropFont'>{introText}</p>
            </div>
            <Link to={`${url}/${src}`}>Read More</Link>
        </LightPanel>
    )
}

export default ArticleCard