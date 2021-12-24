import { useParams } from 'react-router-dom'
import articleData from './articleData'
import useResetScroll from '../../../hooks/useResetScroll'

function ArticlePost() {
    let { topicId } = useParams()
    const { component } = articleData.[topicId]
    useResetScroll()
    return ( <> {component} </> )
}

export default ArticlePost