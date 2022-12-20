import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import ProjectDetails from './Detailed'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase'


const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [selectedProject, setSelectedProject] = useState(null)
    const [portfolio, setPortfolio] = useState([])

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
                                            className='project-image' />
                                    <div className='content'>
                                        <p className='title'>{p.name}</p>
                                        <h4 className='description'>{p.description}</h4>
                                        <button
                                            className='btn'
                                            onClick={() => window.open(p.repo)}>
                                            GitLab
                                        </button>
                                        <button
                                            className='btn'
                                            onClick={() => setSelectedProject(p.idx)}>
                                            Info
                                        </button>
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
                <div>
                    {selectedProject >= 1
                        ?
                        <iframe className='details-modal' title='detailedview' url='/projects/default/django.png'>
                            <ProjectDetails projectsData={portfolio} projectId={selectedProject} />
                        </iframe>
                        :
                        null
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
                        strArray={'Portfolio'.split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProjects(portfolio)}</div>
            </div>
            <Loader type='line-scale-pulse-out' />
        </>
    );
}
export default Portfolio;
