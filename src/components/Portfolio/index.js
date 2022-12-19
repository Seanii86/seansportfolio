import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import projectsData from '../../data/projects.json'


const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
        return () => clearTimeout(timer);
    }, []);


    const renderProjects = (Projects) => {
        return (
            <div className='images-container'>
                {
                    Projects.map((p, idx) => {
                        return (
                            <div className='image' key={idx}>
                                {p.thumbnail ?
                                    <img src={p.thumbnail}
                                        alt='project'
                                        className='project-image' />
                                    :
                                    <img src='/projects/default/django.png'
                                    alt='project'
                                    className='project-image' />
                                }
                                <div className='content'>
                                    <p className='title'>{p.title}</p>
                                    <h4 className='description'>{p.description}</h4>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(p.url)}>
                                        GitLab
                                    </button>
                                    <button
                                    className='btn'>
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
                <div>{renderProjects(projectsData.Projects)}</div>
            </div>
            <Loader type='line-scale-pulse-out' />
        </>
    );
}
export default Portfolio;
