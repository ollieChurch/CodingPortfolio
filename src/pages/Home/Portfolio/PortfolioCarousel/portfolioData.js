import maxwellMysteries1 from '../../../../assets/images/jpg/maxwellMysteries1.jpg'
import maxwellMysteries2 from '../../../../assets/images/jpg/maxwellMysteries2.jpg'
import maxwellMysteries3 from '../../../../assets/images/jpg/maxwellMysteries3.jpg'

const placeholder1 = 'https://picsum.photos/200/300'
const placeholder2 = 'https://picsum.photos/400/200'
const placeholder3 = 'https://picsum.photos/500/500'

const portfolioData = [
    {
        name: 'Maxwell Mysteries',
        text: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis nibh vitae lectus dignissim eleifend eu at libero. Etiam pretium sit amet nisi id ultricies. Sed posuere nec lorem vitae eleifend. Proin non dui at dolor placerat pharetra. Cras felis libero, commodo id massa congue, tincidunt consequat risus. Morbi et ligula suscipit, mattis quam eget, aliquam sapien. Ut rutrum et neque in sagittis. In hac habitasse platea dictumst. Aenean dapibus felis ac dui pulvinar rhoncus. Ut ullamcorper lorem vel convallis aliquam.',

            'Phasellus gravida mollis ex vitae tincidunt. Ut non est sit amet erat auctor euismod a eu nisl. Duis interdum porttitor imperdiet. Nullam vel porttitor dui. Etiam lorem nisl, tempus quis pellentesque accumsan, mattis ut arcu. Fusce in fringilla metus. Aenean vestibulum malesuada cursus.'
        ],
        images: [
            {
                src: maxwellMysteries1,
                alt: 'a screenshot of user interface for The Four Jokers chapter in Maxwell Mysteries - The Kidnapped Professor'
            },
            {
                src: maxwellMysteries2,
                alt: 'a screenshot of the map screen in Maxwell Mysteries - The Kidnapped Professor'
            },
            {
                src: maxwellMysteries3,
                alt: 'a screenshot of a puzzle requiring typing on a typewriter for Maxwell Mysteries - The Kidnapped Professor'
            }
        ],
        tags: [
            {
                text: 'React',
                symbol: 'fab fa-react'
            },
            {
                text: 'CSS',
                symbol: 'fab fa-css3-alt'
            },
            {
                text: 'API Calls',
                symbol: 'fas fa-exchange-alt'
            },
            {
                text: 'Collaboration',
                symbol: 'fas fa-users'
            },
            {
                text: 'Finished Product',
                symbol: 'fas fa-check-square'
            }
        ],
        links: {
            site: 'https://diamond.paradoxparlours.com',
            code: 'https://github.com/Squeak-Paradox'
        }
    },
    {
        name: "Actor's Portfolio",
        text: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis nibh vitae lectus dignissim eleifend eu at libero. Etiam pretium sit amet nisi id ultricies. Sed posuere nec lorem vitae eleifend. Proin non dui at dolor placerat pharetra. Cras felis libero, commodo id massa congue, tincidunt consequat risus. Morbi et ligula suscipit, mattis quam eget, aliquam sapien. Ut rutrum et neque in sagittis. In hac habitasse platea dictumst. Aenean dapibus felis ac dui pulvinar rhoncus. Ut ullamcorper lorem vel convallis aliquam.',

            'Phasellus gravida mollis ex vitae tincidunt. Ut non est sit amet erat auctor euismod a eu nisl. Duis interdum porttitor imperdiet. Nullam vel porttitor dui. Etiam lorem nisl, tempus quis pellentesque accumsan, mattis ut arcu. Fusce in fringilla metus. Aenean vestibulum malesuada cursus.'
        ],
        images: [
            {
                src: placeholder1,
                alt: ''
            },
            {
                src: placeholder2,
                alt: ''
            },
            {
                src: placeholder3,
                alt: ''
            }
        ],
        tags: [
            {
                text: 'HTML',
                symbol: 'fab fa-html5'
            },
            {
                text: 'CSS',
                symbol: 'fab fa-css3-alt'
            },
            {
                text: 'Javascript',
                symbol: 'fab fa-js-square'
            },
            {
                text: 'Content Management',
                symbol: 'fas fa-edit'
            },
            {
                text: 'Mobile First',
                symbol: 'fas fa-mobile-alt'
            },
            {
                text: 'Finished Product',
                symbol: 'fas fa-check-square'
            }
        ],
        links: {
            site: 'https://isobellepippin.netlify.app',
            code: 'https://github.com/Squeak-Paradox'
        }
    }
]

export default portfolioData