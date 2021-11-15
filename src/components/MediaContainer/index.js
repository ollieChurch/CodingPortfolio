import './mediaContainer.css'

function MediaContainer({children, addedClasses}) {
    return (
        <div className={`mediaContainer ${addedClasses}`}>
            {children}
        </div>
    )
}

export default MediaContainer