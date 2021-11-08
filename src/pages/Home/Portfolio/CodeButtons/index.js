import './codeButtons.css'

function CodeButtons({links}) {
    return(
        <div className='codeButtons-container'>
            <button className='portfolio-btn' onClick={() => {
                window.open(links.site)
            }}>
                Visit Live Site <i className="far fa-arrow-alt-circle-right"></i>
            </button>
            <button className='portfolio-btn' onClick={() => {
                window.open(links.code)
            }}>
                See The Code <i className="fas fa-code"></i>
            </button>
        </div>
    )
}

export default CodeButtons