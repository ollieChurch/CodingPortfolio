import { useParams } from 'react-router-dom'
import articleData from './articles/articleData'
import './articlePost.css'
import useResetScroll from '../../../hooks/useResetScroll'

function ArticlePost() {
    let { topicId } = useParams()
    const { component } = articleData.[topicId]

    useResetScroll()
    
    return (
        <div>
            {component}
        </div>
    )
}

export default ArticlePost