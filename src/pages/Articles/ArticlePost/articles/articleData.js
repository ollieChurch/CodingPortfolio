import HelloWorld from './HelloWorld'
import CodingJourney from './CodingJourney'

const articleData = {
    codingjourney:
        {
            component: <CodingJourney />,
            src: 'codingjourney',
            title: 'My Coding Journey',
            img: 'https://source.unsplash.com/IUY_3DvM__w/1920x1153',
            imgAlt: 'a road extends through the hills',
            introText: `The comedian Eddie Izzard has a stand up routine where she describes two states of being; techno-fear and techno-joy. I have unbounded techno-joy, matching Eddie's sentiment; "I must know how this works, I have used machines before!". As it turns out, this techno tenacity and willingness to jump in without yet fully knowing what it is I am doing has been a huge asset in my coding journey. Though I hasten to add that I have never hit a computer with a hammer... yet.`
        },
    helloworld:
        {
            component: <HelloWorld />,
            src: 'helloworld',
            title: 'A Template Article',
            img: 'https://picsum.photos/200/300',
            imgAlt: '',
            introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.'
        }
}

export default articleData