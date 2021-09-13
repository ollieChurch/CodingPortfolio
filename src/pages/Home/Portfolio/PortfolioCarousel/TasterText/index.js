import './tasterText.css'

function TasterText({text, name}) {
    return (
        <div className='tasterText-container'>
            <h2>{name}</h2><br />
            {text.map((para, index) => {
                return (
                    <div key={index}>
                        <p className='tasterText-para dropFont'>{para}</p>
                        {index !== (text.length + 1) && <br />}
                    </div>
                )
            })}
        </div>
    )
}

export default TasterText