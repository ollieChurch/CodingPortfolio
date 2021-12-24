import BannerImg from "../BannerImg"
import articleData from "../../pages/Articles/ArticlePost/articleData"
import './articleContainer.css'

function ArticleContainer({article, children}) {
    const {title, date, img, imgAlt, introText} = articleData.[article]

    return (
        <div className='article-content'>
            <BannerImg src={img} alt={imgAlt} position='center' />
            <div className='article-content-textContainer'>
                <h2 className='article-title'>{title}</h2>
                <p className='article-date'>{date}</p>
                <p>{introText}</p>
                {children}
            </div>
            <BannerImg src={img} alt={imgAlt} position='bottom' />
        </div>
    )
}

export default ArticleContainer