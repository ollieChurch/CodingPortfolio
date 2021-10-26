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
            introText: 'Intro Text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.'
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