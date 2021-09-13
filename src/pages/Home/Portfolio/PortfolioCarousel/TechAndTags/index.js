import './techAndTags.css'

function TechAndTags({tags}) {
    return (
        <ul className='techAndTags-container'>
            {tags.map((tag, index) => {
                return <li key={index}><i className={tag.symbol}></i> {tag.text}</li>
            })}
        </ul>
    )
}

export default TechAndTags