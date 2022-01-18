import MediaContainer from "../../../../components/MediaContainer";
import newsImg from '../../../../assets/images/jpg/articlePosts/kpNewsPromo.jpg'

function KidnappedProfessorLaunch() {
    return (
        <>
            <MediaContainer addedClasses='float-media-right'>
                <img 
                    src={newsImg} 
                    alt='a newspaper from the 1930s has the headline "Professor Foxworth Kidnapped, Research Missing"'
                    className='article-img'
                />
                <p className="article-mediaCaption">Promotional image for Maxwell Mysteries: The Kidnapped Professor</p>
            </MediaContainer>

            <p>The first game in the series was The Disappearing Diamond. Released at the height of lockdown, it was incredibly well received by players and was given 5 stars by escape game experts Review The Room when they played. As well as their enthusiasm for the puzzles they also noted <em>"the game utilises a slick online portal to enter the details of suspects, provide extra puzzles, a bit of fun interaction, and also to push the narrative forward with audio recordings and additional evidence."</em>. You can read their <a href='https://www.reviewtheroom.co.uk/paradox-parlours-maxwell-mysteries-the-disappearing-diamond-play-at-home/' target='_blank' rel='noreferrer'>full review for The Disappearing Diamond</a> on their site.</p>

            <p>This very positive reaction to The Disappearing Diamond was almost surprising. Not only had I never created anything like this before, it was also my first attempt at a large scale site written in React. That came with some very steep learning curves.</p>

            <p>Encouraged by the success of the first game, and with a third lockdown pushing me into furlough again, I used the feedback and lessons to start work on The Kidnapped Professor. The UI/UX had a complete overhaul and I worked closely with Isobelle Ford who provided the game with some excellent hand crafted artwork. With the greater experience and comfort with React under my belt, the codebase came together far quicker and easier, not only making the basic game flow smoother but also opened up more options for interactive content.</p>

            <p>I am delighted my the initial response to The Kidnapped Professor. It has built on the success of The Disappearing Diamond, again receiving 5 stars from the folk over at Review The Room. Their conclusion was: <em>"We really enjoyed the first Maxwell Mysteries game, but we enjoyed this one even more. The puzzles clicked with us, the printing and cutting wasn’t a chore, and the story and general quality of the game made it an instant ‘must play’ for us."</em>. You can read <a href='https://www.reviewtheroom.co.uk/paradox-parlours-maxwell-mysteries-the-kidnapped-professor-play-at-home/' target='_blank' rel='noreferrer'>the full review</a> on their site.</p>

            <p>If you fancy yourself as detective you can purchase both Maxwell Mysteries games from <a href='https://paradoxparlours.com/escape-rooms/online' target='_blank' rel='noreferrer'>Paradox Parlours Escape Rooms</a>. You can also try out a short demo level at <a href='https://mysteries-demo.co.uk' target='_blank' rel='noreferrer'>mysteries-demo.co.uk</a></p>
        </>
    )
}

export default KidnappedProfessorLaunch