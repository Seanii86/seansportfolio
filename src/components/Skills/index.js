import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './skillsCloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split("")

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
          As a graduate of a cutting-edge software engineering bootcamp, 
          I have honed my skills in a wide array of programming languages, 
          frameworks, and technologies to maximize my potential in securing a fulfilling career. 
          My proficiency spans across <span>Python</span>,
          <span>TypeScript</span>,<span>JavaScript</span>,
          <span>SQL Queries</span>,<span>HTML</span>,
          <span>SCSS</span>,<span>SASS</span>,
          and <span>Tailwind CSS</span>,
          enabling me to tackle diverse projects with ease.
          </p>
          <p>
          In addition to my adeptness in multiple languages, 
          I have dedicated countless hours to mastering frameworks such as <span>Django</span>, <span>FastAPI</span>, <span>React</span>, and <span>Three.js</span>. 
          Furthermore, my experience with ORM, 
          particularly <span>Prisma</span>, has strengthened my understanding of database management.
          </p>
          <p>
          I excel in various environments, including <span>NodeJS</span>, <span>NextJs</span>, <span>SwaggerUI</span>, and <span>RESTful API Architecture</span>, 
          and am well-versed in implementing Domain Driven Design within microservices architecture. 
          This comprehensive skill set not only allows me to adapt to a multitude of projects but also 
          ensures the delivery of high-quality results that meet and exceed expectations.
          </p>
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