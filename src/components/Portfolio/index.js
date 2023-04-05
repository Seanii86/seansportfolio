import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import VideoModal from './videoModal';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase'
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {


    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const navigate = useNavigate()


    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        getPortfolio()
    }, [])


    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const handleInfoClick = (project) => {
        setModalContent({
          content: project.video, // Or any other field you want to display as content
          video: project.video,
        });
        setShowModal(true);
      };

    const closeModal = () => {
        setShowModal(false);
    }

    const renderProjects = (Projects) => {
            return (
                <>
                    <div className='images-container'>
                        {
                            Projects.map((p, idx) => {
                                return (
                                    <div className='image' key={idx}>
                                        <img src={p.image}
                                            alt='project'
                                            className='project-image'
                                        />
                                        <div className='content'>
                                            <p className='title'>{p.name}</p>
                                            <h4 className='description'>{p.description}</h4>
                                            <button
                                                className='btn'
                                                onClick={() => window.open(p.repo)}>
                                                Repo
                                            </button>
                                            <button className='btn' onClick={() => handleInfoClick(p)}>Video Demo</button>
                                            {p.demo ?
                                                <button
                                                    className='demo-btn'
                                                    onClick={() => window.open(p.demo)}>
                                                    Live Demo
                                                </button>
                                                : null}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            );
        }


        return (
            <>
                <div className='container portfolio-page'>
                    <h1 className='page-title'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'My Projects'.split("")}
                            idx={15}

                        />
                        <FontAwesomeIcon icon={faPlus} color='#4d4d4e' className='plus-btn' onClick={() => navigate("/dashboard")} />
                    </h1>
                    <div>{renderProjects(portfolio)}</div>
                    {showModal && <VideoModal content={modalContent.content} video={modalContent.video} closeModal={closeModal} />}
                </div>
                <Loader type='line-scale-pulse-out' />
            </>
        );
    }
    export default Portfolio;
