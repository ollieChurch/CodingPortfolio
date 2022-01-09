import { useEffect, useState } from 'react'
import './contact.css'
import cv from '../../../assets/files/ollieChurchCV.pdf'

import useWindowSize from '../../../hooks/useWindowSize'

import CallToScroll from '../../../components/CallToScroll'
import LightPanel from '../../../components/LightPanel'
import ContactForm from './ContactForm'
import ContactSuccess from './ContactSuccess'

function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [useCallToScroll, setUseCallToScroll] = useState(true)
    const { windowSize } = useWindowSize()
    const linksArr = [
        {
            text: 'CV',
            logo: 'far fa-id-badge',
            open: cv 
        },
        {
            text: 'LinkedIn',
            logo: 'fab fa-linkedin',
            open: 'https://www.linkedin.com/in/ollieChurch/'
        },
        {
            text: 'GitHub',
            logo: 'fab fa-github',
            open: 'https://www.github.com/ollieChurch' 
        },
    ]

    useEffect(() => {
        windowSize.width >= 1000 ? setUseCallToScroll(true) : setUseCallToScroll(false)
    }, [windowSize])
    
    return (
        <section className='contact-container section-dark' id='contactSection'>
            <div className='content contact-content'>
                <LightPanel addedClasses='contact-content-lightPanel'>
                    <div className='contactText-container'>
                        <h2 className='contactText-title'>
                            Reach Out And Say <span className='highlight-pink'>Hello</span>
                        </h2>
                        <p className='contactText-tagline dropFont'>
                            I am currently open to new opportunities and projects and would love to hear from you.
                        </p>

                        <div className='contactLinks-container'>
                            {linksArr.map((link, index) => {
                                return (
                                    <button 
                                        className='contactLink transparentButton'
                                        key={index}
                                        onClick={() => window.open(link.open)}
                                    >
                                        <i className={link.logo}></i>
                                        <p>{link.text}</p>
                                    </button>
                                )
                            })}
                        </div>
                        
                        {useCallToScroll &&
                            <CallToScroll scrollUp nextSection='greetingSection'>
                                <p>Back To <span className='highlight-pink'>Top</span></p>
                            </CallToScroll>
                        }
                    </div>

                    <div className='contactForm-container'>
                        {formSubmitted ? <ContactSuccess /> : <ContactForm setFormSubmitted={setFormSubmitted} />}
                    </div>
                </LightPanel>                
            </div>

            <footer className='footer-contact'>
                <p>Made by Ollie. Fuelled by tea.</p>
                <p>Copyright {new Date().getFullYear()}</p>
            </footer>
        </section>
    )
}

export default Contact