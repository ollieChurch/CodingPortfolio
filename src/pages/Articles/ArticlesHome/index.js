import ArticleCard from "../ArticleCard";
import ArticleSideBar from "../ArticleSideBar";
import articleData from "../ArticlePost/articleData";

function ArticlesHome() {
    const articlesArr = [...Object.values(articleData)]

    return (
        <div className='articles-home'>
            <div className='articles-recent'>
                {articlesArr.reverse().map((article, index) => {
                    return ( <ArticleCard topic={article.src} key={`article${index}`} /> )
                })}
            </div>

            <ArticleSideBar />
        </div>
    )
}

export default ArticlesHome