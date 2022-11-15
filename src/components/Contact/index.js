import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_nltni66',
                'template_v2zl8j1',
                refForm.current,
                'qyrqqAoOcgvAPho8t',
            )
            .then(
                () => {
                    alert('Message has been sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }


    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div className='container contact-page'>
            <div className='text-area'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={'Contact me'.split("")} 
                    idx={15} />
                </h1>
                <p className='p-style'>
                    I am interested in freelance opportunities - especially in creating
                    SPA websites for your needs. However, if you have any other questions or
                    requests, don't hesitate to fill out this simple form and I will get back to you
                    within 72 hours.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Your Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Your email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Sean Sainz,
                <br />
                United States,
                <br />
                San Diego, CA <br />
                Carlsbad 92008 <br />
                <span>jconnect7@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.1581, -117.3506]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[33.1581, -117.3506]}>
                        <Popup>Sean lives here, let me know if you want to get a coffee ☕ </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='line-scale-pulse-out' />
        </>
    )
}


export default Contact;