import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react'
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    const nameArray = "ean".split("")
    const jobArray = "Software Engineer".split("")

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 4050);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>
                <h2>Full stack developer / Software Engineering student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>\
        <Loader type='line-scale-pulse-out' />
        </>
    )
}

export default Home;