import ArticleCard from "../ArticleCard";
import ArticleSideBar from "../ArticleSideBar";

function ArticlesHome() {
    return (
        <div className='articles-home'>
            <div className='articles-recent'>
                <ArticleCard topic='codingjourney'/>
                <ArticleCard />  
            </div>

            <ArticleSideBar />
        </div>
    )
}

export default ArticlesHome