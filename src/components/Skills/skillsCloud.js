import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Java',
    'React',
    'mongoDB',
    'PostgreSQL',
    'FastAPI',
    'Express',
    'NodeJS',
    'Redux',
    'HTML5',
    'CSS3',
    'JavaScript',
    'FireBase',
    'MySQl',
    'Python',
    'Django',
    'Git'
  ]
  const options = {
    radius: 450,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 90,
    keep: false
  }
  // eslint-disable-next-line
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })


  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud