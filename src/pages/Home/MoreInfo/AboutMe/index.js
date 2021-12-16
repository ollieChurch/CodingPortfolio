import UnboxingDoodle from '../../../../assets/images/svg/UnboxingDoodle'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <h3 className='moreInfo-title'>
                About Me <i className="far fa-grin-alt"></i>
            </h3>
            
            <p className='aboutMe-text dropFont'>
                A joy of puzzles, a generous creative drive, & a large splash of logical reasoning. My (sometimes mad) multi-faceted work life has required a high level of organisation and the ability to compartmentalise workloads while allowing relevant skills and contacts to overlap. As a self-taught frontend developer I am looking forward to bringing the left and right sides of my brain together as I focus in on an exciting career.
            </p>
            <UnboxingDoodle />
        </div>
    )
}

export default AboutMe