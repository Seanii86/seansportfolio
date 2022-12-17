import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {

    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    <div className='stars'></div>
                    <div className='stars2'></div>
                    <div className='stars3'></div>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
            <div className='footer'>
                <a target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Seanii86/seansportfolio'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </div>
        </div>
    )
}
export default Layout;