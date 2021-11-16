import './tasterText.css'

function TasterText({text}) {
    return (
        <div className='tasterText-container'>
            <div className='tasterText-body'>
                {text.map((para, index) => {
                    return (
                        <div key={index}>
                            <p className='tasterText-para dropFont'>{para}</p>
                            {index !== (text.length + 1) && <br />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TasterText