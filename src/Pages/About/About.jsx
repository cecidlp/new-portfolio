import React from 'react'
import './About.scss'
import InfoCard from '../../Components/InfoCard/InfoCard'

const About = () => {
  return (
    <div className='about'>
      <div className="name">
        <div>
          <h1 className='txt'>
            AB <br /> OU
          </h1>
        </div>
        <h1 className="txt lg">T</h1>
        <div className="me">ME</div>
      </div>
      <div className="info">
        <InfoCard title="Education" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis cum vel, expedita ipsum perspiciatis voluptatem repellat ullam quod sint corrupti recusandae id aperiam. Possimus non earum odio voluptatibus recusandae?" />
        <InfoCard title="About me" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis cum vel, expedita ipsum perspiciatis voluptatem repellat ullam quod sint corrupti recusandae id aperiam. Possimus non earum odio voluptatibus recusandae?" />
        <InfoCard title="Skills" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis cum vel, expedita ipsum perspiciatis voluptatem repellat ullam quod sint corrupti recusandae id aperiam. Possimus non earum odio voluptatibus recusandae?" />
      </div>
    </div>
  )
}

export default About