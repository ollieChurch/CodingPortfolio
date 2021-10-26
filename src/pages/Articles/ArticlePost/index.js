import { useParams } from 'react-router-dom'
import articleData from './articles/articleData'
import './articlePost.css'

function ArticlePost() {
    let { topicId } = useParams()
    const { component } = articleData.[topicId]

    return (
        <div>
            {component}
        </div>
    )
}

export default ArticlePost