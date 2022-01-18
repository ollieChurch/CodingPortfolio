import { useEffect, useState } from "react"

function ArticlesTags({setFilterTag, articlesArr}) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const uniqueTagsArr = []
        articlesArr.forEach(article => {
            article.tags.forEach(tag => {
                !uniqueTagsArr.includes(tag) && uniqueTagsArr.push(tag)
            })
        })
        setTags(uniqueTagsArr.sort())
    }, [articlesArr])

    return (
        <div className='articles-sideBar-panel articles-tags'>
            <h3 className='articles-homeTitle'>Article Tags <i className="fas fa-tags"></i></h3>
            <div className='articles-tagsContainer'>
                {tags.map((tag, index) => {
                    return (
                        <button 
                            key={`tagBtn${index}`}
                            className='articles-tagBtn' 
                            onClick={(e) => setFilterTag(e.target.innerText)}
                        >{tag}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default ArticlesTags