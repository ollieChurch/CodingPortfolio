import UnboxingDoodle from '../../../../assets/images/svg/UnboxingDoodle'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <h3 className='moreInfo-title'>
                About Me <i className="far fa-grin-alt"></i>
            </h3>
            
            <p className='aboutMe-text dropFont'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nulla fringilla, ullamcorper urna dignissim, auctor risus. Maecenas ac ante est. In molestie sagittis justo venenatis faucibus. Vestibulum tempor nibh neque, non pharetra nisl sollicitudin eu. Vestibulum vitae turpis ac ligula sagittis lacinia. In efficitur dolor a nunc luctus, nec molestie sem porttitor. Sed et massa rutrum, pretium magna eu, rutrum ante. Nam finibus mauris non suscipit porttitor. Integer elit eros, bibendum ac risus vel, luctus semper lorem. Duis sagittis fermentum ex, id elementum nisl semper in. Vestibulum finibus fringilla neque, sed ornare quam efficitur et. Nunc ut viverra nulla. Nulla id libero eget mi pulvinar lobortis.
            </p>
            <UnboxingDoodle />
        </div>
    )
}

export default AboutMe