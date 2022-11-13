import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { faBars, faClock, faClose, faEnvelope, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)


    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='sean' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' to='/' >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} activeclassname='active' className='about-link' to='/about' >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} activeclassname='active' className='contact-link' to='/contact' >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} activeclassname='active' className='portfolio-link' to='/portfolio' >
                <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} activeclassname='active' className='timeline-link' to='/timeline' >
                <FontAwesomeIcon icon={faClock} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose} 
            color='#4d4d4e'
            size='3x'
            className='close-nav'
            />
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/seansainz/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://gitlab.com/Seanii86'>
                    <FontAwesomeIcon icon={faGitlab} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://www.instagram.com/seeanii/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size='3x'
            className='nav-icon' />
    </div>
    )
}
export default Sidebar;