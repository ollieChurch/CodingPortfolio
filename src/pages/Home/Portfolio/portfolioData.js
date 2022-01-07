import maxwellMysteries1 from '../../../assets/images/jpg/maxwellMysteries1.jpg'
import maxwellMysteries2 from '../../../assets/images/jpg/maxwellMysteries2.jpg'
import maxwellMysteries3 from '../../../assets/images/jpg/maxwellMysteries3.jpg'

import actor1 from '../../../assets/images/jpg/actorPortfolio1.jpg'
import actor2 from '../../../assets/images/jpg/actorPortfolio2.jpg'
import actor3 from '../../../assets/images/jpg/actorPortfolio3.jpg'

import radio1 from '../../../assets/images/jpg/gamePrototype1.jpg'
import radio2 from '../../../assets/images/jpg/gamePrototype2.jpg'
import radio3 from '../../../assets/images/jpg/gamePrototype3.jpg'

import codePortfolio1 from '../../../assets/images/jpg/codePortfolio1.jpg'
import codePortfolio2 from '../../../assets/images/jpg/codePortfolio2.jpg'
import codePortfolio3 from '../../../assets/images/jpg/codePortfolio3.jpg'

import metricClock1 from '../../../assets/images/jpg/metricClock1.jpg'
import metricClock2 from '../../../assets/images/jpg/metricClock2.jpg'
import metricClock3 from '../../../assets/images/jpg/metricClock3.jpg'

// const placeholder1 = 'https://picsum.photos/200/300'
// const placeholder2 = 'https://picsum.photos/400/200'
// const placeholder3 = 'https://picsum.photos/500/500'

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
                text: 'React Router',
                symbol: 'fas fa-route'
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
            site: 'https://isobellepippin.co.uk',
            code: 'https://github.com/ollieChurch/ActingPortfolioIP'
        }
    },
    {
        name: "Game System Prototypes",
        text: [
            "As part of my role at Paradox Parlours, I am involved in the design & build of new games, including the creation of web based prototypes to a given brief.",

            'The prototype linked here is a host operated game system which controls the game audio, time remaining and clues for a live escape game. The team must remix a song before the radio station reaches number 1 in the charts so the audio is not only for atmosphere but a crucial part of the game, providing context and the time remaining. The host also needed to be able to send clues to the team as needed.',

            "This was built using Javascript, HTML and CSS. It uses howler.js for handling audio and utilises the Broadcast Channel API for communication between two browser windows. Note that the Broadcast Channel API is not compatible with Safari."
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
            code: 'https://github.com/ollieChurch/escapeRadio'
        }
    },
    {
        name: "This Portfolio",
        text: [
            'A portfolio site to show off my favourite projects and aid with my frontend devlopment job search.',
            
            'I bootstrapped this site using Create React App, with custom CSS, and incorporated React Router for page routing. The contact form uses Netlify Forms to screen out spam and notify me of new submissions.'
        ],
        images: [
            {
                src: codePortfolio1,
                alt: 'portfolio carousel showing Maxwell Mysteries'
            },
            {
                src: codePortfolio2,
                alt: 'greeting screen. Text reads: Ollie Church, frontend developer'
            },
            {
                src: codePortfolio3,
                alt: 'about me, featured articles and the top of the contact form'
            }
        ],
        tags: [
            {
                text: 'React',
                symbol: 'fab fa-react'
            },
            {
                text: 'React Router',
                symbol: 'fas fa-route'
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
            code: 'https://github.com/ollieChurch/CodingPortfolio'
        }
    },
    {
        name: "Metric Clock",
        text: [
            'A whimsical and simple site to convert time into a metric measurement. One of my older projects, this was created as fun for a friend. It features both a live read out of the time and a conversion tool.',
            
            'The site was created from scratch using HTML, custom CSS and JQuery.'
        ],
        images: [
            {
                src: metricClock1,
                alt: 'Live read out of time into metric.'
            },
            {
                src: metricClock2,
                alt: 'Conversion of custom input SI time into metric.'
            },
            {
                src: metricClock3,
                alt: 'Conversion of custom input metric into SI time.'
            }
        ],
        tags: [
            {
                text: 'jQuery',
                symbol: 'fas fa-laptop-code'
            },
            {
                text: 'CSS',
                symbol: 'fab fa-css3-alt'
            },
            {
                text: 'Responsive',
                symbol: 'fas fa-mobile-alt'
            },
            {
                text: 'HTML',
                symbol: 'fab fa-html5'
            }

        ],
        links: {
            site: 'https://metricclock.netlify.app',
            code: 'https://github.com/ollieChurch/MetricClock'
        }
    },
]

export default portfolioData