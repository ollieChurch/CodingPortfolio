import ArticleCard from "../ArticleCard";
import ArticleSideBar from "../ArticleSideBar";

function ArticlesHome() {
    return (
        <>
            <div className='articles-recent'>
                <ArticleCard />
                <ArticleCard />  
            </div>

            <ArticleSideBar />
        </>
    )
}

export default ArticlesHome