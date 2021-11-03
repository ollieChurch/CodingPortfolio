import { useState } from 'react'
import './contactForm.css'

function ContactForm({setFormSubmitted}) {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        message: ''
    }) 

    function handleChange(e) {
        const {name, value} = e.target
        console.log(e.target.name)
        setFormInput(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit(event) {
        event.preventDefault()
        const {name, email, message} = formInput
        if (name && email && message) {
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({'form-name': 'contact', ...formInput})
            })
                .then(() => {
                    console.log('Form successfully submitted')
                    setFormSubmitted(true)
                })
                .catch((error) => alert(error))
        }
    }

    return (
        <form 
            className='contactForm contact-formContainer'
            onSubmit={handleSubmit}
        >
            <input hidden type="hidden" name="form-name" value="contact" />
            <div hidden aria-hidden="true">
                <label>
                    Don’t fill this out if you're human: 
                    <input name="honey" />
                </label>
            </div>

            <label>
                Your Name:
                <input 
                    type='text' 
                    id='contactForm-name' 
                    name='name'
                    className='contactForm-input' 
                    value={formInput.name} 
                    onChange={ e => handleChange(e) }
                />
            </label>

            <label>
                Your Email:
                <input 
                    type='email' 
                    id='contactForm-email' 
                    name='email'
                    className='contactForm-input' 
                    value={formInput.email} 
                    onChange={ e => handleChange(e) }
                />
            </label>
        
            <label className='contactForm-msgContainer'>
                Your Message:
                <textarea 
                    id='contactForm-msg' 
                    name='message'
                    className='contactForm-input' 
                    value={formInput.message} 
                    onChange={ e => handleChange(e) }
                />
            </label>

            <button 
                type='submit' 
                className='contactForm-btn'
            >
                Send
            </button>
        </form>
    )
}

export default ContactForm