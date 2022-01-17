import ArticleCard from "../ArticleCard";
import articleData from "../ArticlePost/articleData";
import ArticlesFeatured from "../ArticleSideBar/ArticlesFeatured";
import ArticlesTags from "../ArticleSideBar/ArticlesTags";

function ArticlesHome() {
    const articlesArr = [...Object.values(articleData)]

    return (
        <div className='articles-home'>
            <ArticlesFeatured />
            <ArticlesTags />

            <div className='articles-recent'>
                <h3 className='articles-homeTitle'>Recent Articles <i className="far fa-folder-open"></i></h3>
                <div className='articles-recentContainer'>
                    {articlesArr.reverse().map((article, index) => {
                        return ( <ArticleCard topic={article.src} key={`article${index}`} /> )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticlesHome