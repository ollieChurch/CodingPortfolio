import { useParams } from 'react-router-dom'
import articleData from './articleData'
import useResetScroll from '../../../hooks/useResetScroll'
import ArticleContainer from '../../../components/ArticleContainer'

function ArticlePost() {
    let { topicId } = useParams()
    const { component } = articleData[topicId]
    useResetScroll()
    return ( <ArticleContainer article={topicId}> {component} </ArticleContainer> )
}

export default ArticlePost