import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGitlab, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-area'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'About me'.split("")}
                        idx={15}
                    />
                </h1>
                <p>I'm a very autonomous developer, passionate for working in teams,
                    and looking for a role as a front-end/back-end developer at an established
                    tech or startup company that uses the latest technologies to tackle
                    diverse projects.
                </p>
                <p>I am quite confident of my ability to problem solve, investing all the time
                    I have to work on perpetual projects one step at a time.
                </p>
                <p> To describe myself, I am quiet by nature and find myself escaping time
                    when I need to solve complex problems or algorithms. However I love meeting new people
                    to discover their interests' other than my own of cooking, car modification, and being obsessed
                    with tech. 👨‍💻
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faFileCode} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5EDEF4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitlab} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale-pulse-out' />
        </>
    )
}

export default About;