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
                    <p>Puzzle addict turned coding enthusiast. 4 years experience managing a small team with a focus on 5 star customer service for over 31000 happy players.</p>
                    
                    <p>There are 3 top tips for completing an escape room; search, speak, simple. It turns out that they apply to my work and coding too. Find the relevant tools and knowledge, communicate withthe team, look for the simplest solution.</p>
                    
                    <p>Having truly fallen in love with frontend development during the 2020/21 lockdowns, I am looking to make my career change and take the next step in an entry level role.</p>
                </div>
            </div>
            <img src={profileImg} alt='Ollie Church' className='aboutMe-img'/>
        </div>
    )
}

export default AboutMe