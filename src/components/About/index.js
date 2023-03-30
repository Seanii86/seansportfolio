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
                <p>Although I am quiet by nature, I love meeting new people and working on teams to solve complex
                    problems or algorithms. I am very interested in business app modeling and development. This was my primary
                    focus during my education. I would love the opportunity to demonstrate my skills.
                </p>
                <p>I am quite confident in my ability to problem solve, I am able to invest all my time to work on perpetual projects.
                </p>
                <p>
                    In my spare time I enjoy cooking, car modification, and obsessing in tech.
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