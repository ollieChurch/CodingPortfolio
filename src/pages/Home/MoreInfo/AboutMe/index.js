import profileImg from '../../../../assets/images/jpg/profileImg.jpg'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div>
                <h3 className='moreInfo-title'>
                    About Me <i className="far fa-grin-alt"></i>
                </h3>
                
                <p className='aboutMe-text dropFont'>
                    A joy of puzzles, a generous creative drive, & a large splash of logical reasoning. My (sometimes mad) multi-faceted work life has required a high level of organisation and the ability to compartmentalise workloads while allowing relevant skills and contacts to overlap. As a self-taught frontend developer I enjoy creating interactive content with intuitive UI and using creative problem solving to fulfil a brief.
                </p>
            </div>
            <img src={profileImg} alt='Ollie Church' className='aboutMe-img'/>
        </div>
    )
}

export default AboutMe