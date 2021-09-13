import './indicators.css'

function Indicators({quantity, currentItem}) {
    const indicatorsArr = []

    for (let i=0; i < quantity; i++) {
        const isFilled = i === currentItem ? 'currentIndicator' : ''
        indicatorsArr.push(
            <div key={i} className={`singleIndicator ${isFilled}`}></div>
        )
    }

    return (
        <div className='portfolio-controls portfolio-controls-indicator'>
            {indicatorsArr}
        </div>
    )
}

export default Indicators