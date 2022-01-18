import catGameGIF from '../../../../assets/gifs/catGame.gif'
import arduinoImg from '../../../../assets/images/jpg/articlePosts/arduino.jpg'
import disappearingDiamondImg from '../../../../assets/images/jpg/articlePosts/disappearingDiamond.jpg'
import MediaContainer from '../../../../components/MediaContainer'

function CodingJourney() {
    return (
        <>   
            <MediaContainer addedClasses='float-media-right'>
                <iframe className='article-vid' src="https://www.youtube-nocookie.com/embed/TKQzqwn-jIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='article-mediaCaption'>Eddie Izzard performing her sketch on technology (includes strong language)</p>
            </MediaContainer>

            <p>Primary School offers up two relatively vague memories. The first is a one time class using a robotic turtle which could have it's journey determined by pressing buttons on it's back before pressing "GO". The second is sitting through breaks and lunches on the only PC in the school using flow diagrams to programme a cartoon smart home and/or a set of traffic lights.  With hindsight I can easily see that these activities were designed to teach the fundamentals of coding, though at the time this went over all the students' (and probably teachers') heads. All I knew was that it was fun!</p>

            <p>Skip forward to the noughties. I am now in high school, we have two full rooms of computers (!), and everyone has mySpace. My first interaction with actual code was copying and pasting unintelligble volumes of HTML code into my profile to customise my page. How else would anyone understand me?!</p>

            <p>In 2018 I actually met someone with the superpower to code (in multiple languages) and, after answering a large number of my curiosities about how it all worked, Tom suggested he actually teach me something. So on a dark December night we met at his for "Code Club" (consisting at that point of 3 of us). This was my first look at Gamemaker Studio and slowly, with heavy guidance, I put together a game where a cartoon cat face dodged giant mice. You of course had 9 lives, and each time you made it across the screen the mice got faster. Adding a couple of different collectable powerups was the cherry on the cake.</p>

            <MediaContainer addedClasses='float-media-left'>
                <img 
                    src={catGameGIF} 
                    alt="a cartoon cat head moves across the screen avoiding giant mice and picking up power ups" 
                    className='article-img'
                />
                <p className='article-mediaCaption'>"Cat Game" made on Gamemaker Studio. An undisputed masterpiece.</p>
            </MediaContainer>

            <p>With my <em>masterpiece</em> complete I knew one thing... I was hooked. Coding was more fun, engaging and fulfilling than I had ever imagined. It brought both my creative side and my desire for logic and structure together in a skill which ultimately allowed for the creation of anything you could imagine, provided you could problem solve a logical way to achieve it. I won't lie, at this point "Code Club" became more about playing Overcooked 2 until 4am than about learning to code, but Tom continued to answer my questions when I needed it.</p>

            <p>I continued to play with Gamemaker and, with some guidance, moved into my next area of code; Arduino. This was tricky, gone was the nice auto-complete prompts and, on top of learning new words and structures, I also had to learn how things should be wired together. With the basics of code in my back pocket, and my technojoy firmly shouting in the back of my head, Google became my best friend and suddenly I was creating fun little systems that made lights blink and buzzers sound with different button and sensor interactions. I put these skills to real-world use in the design and build of an electronic puzzle for an escape room.</p> 

            <MediaContainer addedClasses='float-media-right'>
                <img 
                    src={arduinoImg}
                    alt='electronics hooked up to an arduino comuter board' 
                    className='article-img'
                />
                <p className='article-mediaCaption'>Dials, buttons, switches and an electronic lock, all controlled by an ESP32 board.</p>
            </MediaContainer>

            <p>While Arduino coding was fun, it didnt quite scratch the same itch. With Arduino I was limited because of equipment and space. It was then I heard about Scrimba, a new online platform for learning frontend development and so shifted my attention from the physical to the digital once again, starting with Kevin Powell's 'HTML and CSS crash course'.</p>

            <p>With one course down I can't help but click on another, and then another, and... well you get the idea. Flexbox, Grid, animations, ES6, and then the big one; React. All of this was available for free on Scrimba's platform and it allowed me to start playing, building my own little experimental projects, for no other reason than fun. I was back in the realms of "anything is possible". Pick something that would be cool, google approaches for the tricky bits, make it work.</p>

            <p>In the lockdown of 2020, I was placed on Furlough. With a lot of time on my hands, and knowing I would have gone mad without something to do I put a large amount of time into completing tutorials and mini projects. One day, after me and my partner played a particuarly terrible online puzzle game, I thought "I could do that!". With my partner's help to design the puzzles, I started on the largest of my coding projects I had ever attempted. With some very basic React under my belt I set about making the online portal. A few months later and we had The Disappearing Diamond; a 1930s private investigator puzzle game which utilised print-at-home and on-screen elements. It was a little hit and, with a bit of tweaking, we got it sold through an escape rooms.</p>
            
            <MediaContainer addedClasses='float-media-left'>
                <img 
                    src={disappearingDiamondImg}
                    alt='an advertising banner for Maxwell Mysteries: The Disappearing Diamond' 
                    className='article-img'
                />
                <p className='article-mediaCaption'>Advertising banner for Maxwell Mysteries: The Disappearing Diamond</p>
            </MediaContainer>

            <p>With this success, my confidence in my ability to learn and actually implement code grew. Despite some Twitter user making it onto my newsfeed to claim that <em>26 years old</em> was very late to be learning to code, my 28 year old creaky bones signed up to Scrimba's paid content and instantly enrolled on the Frontend Developer Career Course. During this course I learnt a huge amount and kept building bigger and better projects alongside, using the lesson content as inspiration, and supplementing any gaps in my knowledge with a googling spree. The second Maxwell Mysteries puzzle game, The Kidnapped Professor, is just about ready for release as I write this and the step up in my abilities, from the code to the UI/UX design, is huge.</p>

            <p>Completing the Frontend Developer Career Course is exciting, I am ready for the next step in my coding journey, there's so much more out there that still needs creating. And I am sure it will start with me saying "Wouldn't it be cool if...".</p>
        </>
    )
}

export default CodingJourney