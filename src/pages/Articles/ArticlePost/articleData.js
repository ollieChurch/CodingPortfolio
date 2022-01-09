import HelloWorld from './articles/HelloWorld'
import CodingJourney from './articles/CodingJourney'
import LoveCSSGrid from './articles/LoveCSSGrid'
import KidnappedProfessorLaunch from './articles/KidnappedProfessorLaunch'
import kpLaunchImg from '../../../assets/images/jpg/maxwellMysteries3.jpg'

const articleData = {
    helloworld:
        {
            component: <HelloWorld />,
            src: 'helloworld',
            title: 'A Template Article',
            date: 'November 2021',
            img: 'https://source.unsplash.com/random',
            imgAlt: '',
            introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.'
        },
    codingjourney:
        {
            component: <CodingJourney />,
            src: 'codingjourney',
            title: 'My Coding Journey',
            date: 'November 2021',
            img: 'https://source.unsplash.com/IUY_3DvM__w/1920x1153',
            imgAlt: 'a road extends through the hills',
            introText: `The comedian Eddie Izzard has a stand up routine where she describes two states of being; techno-fear and techno-joy. I have unbounded techno-joy, matching Eddie's sentiment; "I must know how this works, I have used machines before!". As it turns out, this techno tenacity and willingness to jump in without yet fully knowing what it is I am doing has been a huge asset in my coding journey. Though I hasten to add that I have never hit a computer with a hammer... yet.`
        },
    lovecssgrid:
        {
            component: <LoveCSSGrid />,
            src: 'lovecssgrid',
            title: 'Why I Love CSS Grid',
            date: 'December 2021',
            img: 'https://source.unsplash.com/-1_RZL8BGBM/1920x1153',
            imgAlt: "sticky notes arranged in a 3 x 3 grid. The bottom right note is being removed by someone's hand",
            introText: "I love CSS Grid! It is so often the perfect layout tool for the job, and the property I love most is 'grid-area'. Using this property means that the layout can be instantly understood in the code, responsive media queries require less overwriting, and changing the entire layout of your site becomes easy to implement in a matter of moments."
        },
    kidnappedprofessorlaunch:
        {
            component: <KidnappedProfessorLaunch />,
            src: 'kidnappedprofessorlaunch',
            title: "Launch of 'The Kidnapped Professor'",
            date: 'January 2022',
            img: kpLaunchImg,
            imgAlt: "Screenshot of The Kidnapped Professor puzzle game. A typewriter is being typed on by an unseen user.",
            introText: "In December 2021 I launched the second in my Maxwell Mysteries puzzle game series; The Kidnapped Professor. Maxwell Mysteries follows the cases of fictional 1930s private investigator Larry Maxwell. In Larry's latest case Professor Foxworth has been taken from his office in the heart of New York. Follow the clues, secure the research and find the professor before it is too late!"
        },
}

export default articleData