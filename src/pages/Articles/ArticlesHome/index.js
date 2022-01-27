import { useState } from 'react'
import ArticleCard from "../ArticleCard";
import articleData from "../ArticlePost/articleData";
import ArticlesFeatured from "./ArticlesFeatured";
import ArticlesTags from "./ArticlesTags";

function ArticlesHome() {
    const [articlesArr] = useState([...Object.values(articleData).reverse()])
    const [filterTag, setFilterTag] = useState(null)

    return (
        <div className='articles-home'>
            <ArticlesFeatured />
            <ArticlesTags setFilterTag={setFilterTag} articlesArr={articlesArr}/>

            <div className='articles-all'>
                <div className='articles-allHeader'>
                    <h3 className='articles-homeTitle'>All Articles <i className="far fa-folder-open"></i></h3>
                    {filterTag && <button className='articles-clearFilterBtn' onClick={() => setFilterTag(null)}>clear filter</button>}
                </div>
                
                <div className='articles-allContainer'>
                    {articlesArr.map((article, index) => {
                        return (article.tags.includes(filterTag) || !filterTag) ? 
                            <ArticleCard topic={article.src} key={`article${index}`} /> : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticlesHome