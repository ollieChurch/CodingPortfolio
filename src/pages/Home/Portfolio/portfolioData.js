import maxwellMysteries1 from '../../../assets/images/jpg/maxwellMysteries1.jpg'
import maxwellMysteries2 from '../../../assets/images/jpg/maxwellMysteries2.jpg'
import maxwellMysteries3 from '../../../assets/images/jpg/maxwellMysteries3.jpg'

import actor1 from '../../../assets/images/jpg/actorPortfolio1.jpg'
import actor2 from '../../../assets/images/jpg/actorPortfolio2.jpg'
import actor3 from '../../../assets/images/jpg/actorPortfolio3.jpg'

import radio1 from '../../../assets/images/jpg/gamePrototype1.jpg'
import radio2 from '../../../assets/images/jpg/gamePrototype2.jpg'
import radio3 from '../../../assets/images/jpg/gamePrototype3.jpg'

const placeholder1 = 'https://picsum.photos/200/300'
const placeholder2 = 'https://picsum.photos/400/200'
const placeholder3 = 'https://picsum.photos/500/500'

const portfolioData = [
    {
        name: 'Maxwell Mysteries',
        text: [
            "Maxwell Mysteires is a series of play-at-home puzzle games which utilise both printed and on-screen elements to provide 2+ hours of themed puzzling content, centred around the story of a 1930s private investigator. In each game the story unfolds over 5 levels and player progress is saved to the database at the end of each level.",

            "Each game was bootstrapped using Create React App with custom CSS. It also uses React specific packages such as React Router and react-use-audio-player, which I chose for my previous experience with howler.js"
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
            site: 'https://mysteries-demo.co.uk/', 
            code: 'https://github.com/ollieChurch/MaxwellMysteriesDemo'
        }
    },
    {
        name: "Actor's Portfolio",
        text: [
            "Isobelle Pippin is an actor who wanted a portfolio site to share with casting director's. After sitting down to discuss what needed to be included in the site I created this static HTML site with several pages. The site incorporates Netlify CMS and Identity to give Isobelle an admin login for editing the content on the site.",

            'This site was built from scratch using HTML, CSS and Javascript.'
        ],
        images: [
            {
                src: actor1,
                alt: 'a screenshot of the landing screen. A headshot of Isobelle with links to contact her'
            },
            {
                src: actor2,
                alt: 'a screenshot of the contact page. A contact form and links to other methods of contact, including her agent details'
            },
            {
                src: actor3,
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
                text: 'CMS',
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
            code: 'https://github.com/ollieChurch/ActingPortfolioIP'
        }
    },
    {
        name: "Game System Prototypes",
        text: [
            "As part of my role at Paradox Parlours, I am involved in the design & build of new games, including the creation of web based prototypes to a given brief.",

            'The prototype linked here is a host operated game system which controls the game audio, time remaining and clues for a live escape game. The team must remix a song before the radio station reaches number 1 in the charts so the audio is not only for atmosphere but a crucial part of the game, providing context and the time remaining. The host also needed to be able to send clues to the team as needed.',

            "This was built using Javascript, HTML and CSS. It uses howler.js for handling audio and utilises the Broadcast Channel API for communication between two browser windows."
        ],
        images: [
            {
                src: radio1,
                alt: 'screenshot of the admin screen showing the playlist of audio tracks, custom clue input and time remaining.'
            },
            {
                src: radio2,
                alt: 'screenshot of the player screen showing time remaining and button to request clue. Includes background image of a sound mixer.'
            },
            {
                src: radio3,
                alt: 'screenshot of the player screen showing time remaining and new clue received from host.'
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
                text: 'howler.js',
                symbol: 'fas fa-volume-up'
            },
            {
                text: 'Prototype',
                symbol: 'fas fa-cogs'
            },
            {
                text: 'Broadcast API',
                symbol: 'fas fa-envelope'
            }
        ],
        links: {
            site: 'https://escaperadio.netlify.app/',
            code: 'https://github.com/ollieChurch' // UPDATE LINK
        }
    },
    {
        name: "This Portfolio",
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
                text: 'React',
                symbol: 'fab fa-react'
            },
            {
                text: 'CSS',
                symbol: 'fab fa-css3-alt'
            },
            {
                text: 'Responsive',
                symbol: 'fas fa-mobile-alt'
            },
        ],
        links: {
            site: '/#portfolioSection',
            code: 'https://github.com/ollieChurch' // UPDATE LINK
        }
    },
]

export default portfolioData