import { useParams } from 'react-router-dom'

function ArticlePost() {
    let { topicId } = useParams()
    console.log(topicId)

    return (
        <h2>This is article {topicId}</h2>
    )
}

export default ArticlePost