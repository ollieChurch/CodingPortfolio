import CallToScroll from '../../../components/CallToScroll'
import LightPanel from '../../../components/LightPanel'
import './contact.css'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <section className='contact-container section-dark' id='contactSection'>
            <div className='content contact-content'>
                <LightPanel>
                    <div className='contactText-container'>
                        <h2 className='contactText-title'>
                            Reach Out And Say <span className='highlight-pink'>Hello</span>
                        </h2>
                        <p className='contactText-tagline dropFont'>
                            I am currently open to new opportunities and projects and would love to hear from you.
                        </p>

                        <div className='contactLinks-container'>
                            <button className='contactLink'>
                                <i className="far fa-id-badge"></i>
                                <p>CV</p>
                            </button>
                            <button className='contactLink'>
                                <i className="fab fa-linkedin"></i>
                                <p>LinkedIn</p>
                            </button>
                            <button className='contactLink contactLink-last'>
                                <i className="fab fa-github"></i>
                                <p>GitHub</p>
                            </button>
                        </div>
                        
                        <CallToScroll scrollUp nextSection='greetingSection'>
                            <p>Back To The <span className='highlight-pink'>Top</span></p>
                        </CallToScroll>
                    </div>

                    <div className='contactForm-container'>
                        <ContactForm />
                    </div>
                </LightPanel>                
            </div>

            <footer className='footer-contact'>
                <p>Made by Ollie. Fuelled by tea.</p>
                <p>Copyright 2021</p>
            </footer>
        </section>
    )
}

export default Contact