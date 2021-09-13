import { useState } from 'react'
import './contactForm.css'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)
    }

    return (
        <form className='contactForm'>
                <label>
                    Your Name:
                    <input 
                        type='text' 
                        id='contactForm-name' 
                        className='contactForm-input' 
                        value={name} 
                        onChange={ (e) => setName(e.target.value) }
                    />
                </label>

                <label>
                    Your Email:
                    <input 
                        type='email' 
                        id='contactForm-email' 
                        className='contactForm-input' 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </label>
            
                <label className='contactForm-msgContainer'>
                    Your Message:
                    <textarea 
                        id='contactForm-msg' 
                        className='contactForm-input' 
                        value={message} 
                        onChange={ (e) => setMessage(e.target.value) }
                    />
                </label>

            <button 
                type='submit' 
                className='contactForm-btn'
                onClick={handleSubmit}
            >
                Send
            </button>
        </form>
    )
}

export default ContactForm