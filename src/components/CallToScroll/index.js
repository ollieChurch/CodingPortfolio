import DownArrow from '../../assets/images/svg/DownArrow'
import './callToScroll.css'

function CallToScroll({ children, flex='row', scrollUp=false, nextSection='portfolioSection'}) {
    const containerFlex = { flexDirection: flex }
    const textMargin = { marginBottom: flex === 'column' ? '-.5em' : 0}

    return (
        <a className='actionContainer' style={containerFlex} href={`#${nextSection}`}>
            {flex === 'row' && <DownArrow scrollUp={scrollUp}/>}
            <div className='callToScroll' style={textMargin}>
                {children}
            </div>
            <DownArrow scrollUp={scrollUp}/>
        </a>
    )
}

export default CallToScroll