import profileImg from '../../../../assets/images/jpg/profileImg.jpg'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div>
                <h3 className='moreInfo-title'>
                    About Me <i className="far fa-grin-alt"></i>
                </h3>
                
                <div className='aboutMe-text dropFont'>
                    <p>Self taught frontend developer who started coding as a hobby around 2 years ago. Used my furlough time of 2020/21 to develop my abilities in HTML, CSS, Javascript and React to an employment level and am now looking to make the move from my operations manager position to an entry level front end web development role.</p>
                    
                    <p>Over the last 18 months one major achievement in my web development experience is the creation of two play-at-home puzzle games in the Maxwell Mysteries series. These were built using React and are being sold via a large escape room company in Surrey. You can see more about this in my portfolio projects above.</p>
                    
                    <p>With a joy of puzzles and a background in the creative arts I especially enjoy creating interactive content with intuitive UI and using creative problem solving to tackle new challenges from a brief.</p>
                </div>
            </div>
            <img src={profileImg} alt='Ollie Church' className='aboutMe-img'/>
        </div>
    )
}

export default AboutMe