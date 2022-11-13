import { ReactComponent as SchoolIcon } from '../../assets/svg/school.svg';
import timelineElements from '../../data/timeline.json';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Timeline = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const renderTimeline = (elements) => {
        let schoolIconStyles = {background:'#ffd700'}
        return (
            <div className='timeline-container'>
                <VerticalTimeline>
                    {elements.map((e, idx) => {
                        let isSchoolIcon = e.icon === "school";
                        let showBtn = e.btnText !== undefined && e.btnText !== null && e.btnText !== '';

                        return (
                            <VerticalTimelineElement
                            key={idx}
                            date={e.date}
                            dateClassName='date'
                            iconStyle={isSchoolIcon ? schoolIconStyles: null}
                            icon={<SchoolIcon />}>
                                <h3 className='vertical-timeline-element-title'>{e.title}</h3>
                                <h5 className='vertical-timeline-element-subtitle'>{e.location}</h5>
                                <p id='description'>{e.description}</p>
                                {showBtn && (<a className={`button ${isSchoolIcon ? "schoolButton" : null}`} href='/'>{e.btnText}</a>)}
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        )
    }

    return (
        <>
        <div className='container timeline-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'Timeline'.split("")}
                    idx={15}
                />
            </h1>
            <div>{renderTimeline(timelineElements.elements)}</div>
        </div>
        <Loader type='line-scale-pulse-out' />
        </>
    );
}
export default Timeline;