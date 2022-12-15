import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './skillsCloud'
import FileSaver from 'file-saver';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split("")



  const downloadResume = () => {
    FileSaver.saveAs(
    process.env.REACT_APP_CLIENT_URL + "/assets/resume.pdf",
    "SEANSAINZ-12-15-22.pdf");
    console.log("DOWNLOADING:::", process.env.REACT_APP_CLIENT_URL + "/assets/resume.pdf")
  }

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 4050);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            Being a student of software engineering, currently in a modern, immersive 19-week program has supplied me
            with only the latest frameworks and tech stack to have the greatest potential when finding a career.
            My current tech stack includes very high level profiency in: <br /> <br /> <span>Python</span>, <span>JavaScript</span>, <span>SQL Queries</span>, <span>HTML</span>, & <span>SCSS or SASS</span>.
            With countless hours of experience with frameworks such as <span>Django</span>, <span>FastAPI</span>, and <span>React</span>. I'm trained in environments
            such as <span>NodeJS</span>, <span>NextJs</span>, <span>SwaggerUI</span>, and <span>RESTful API Architecture</span>. <br /> Practicing Domain Driven Design with microservices.
          </p>

          <div className='resume-btn'>
            <button onClick={downloadResume}>My resume</button>
          </div>

        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Skills