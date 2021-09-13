import './lightPanel.css'

function LightPanel({children, addedClasses=''}) {
    return (
        <div className={`lightPanel ${addedClasses}`}>
            {children}
        </div>
    )
}

export default LightPanel