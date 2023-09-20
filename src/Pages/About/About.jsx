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
        <InfoCard title="Education" details="I hold a photography degree, but a few years ago, I made a career shift to frontend development. Since then, I've been on a journey of continuous learning and skill-building. I received a scholarship to study frontend development at Ironhack, where I developed my web development skills. Currently, I'm pursuing a programming scholarship at 42 Barcelona, known for its innovative peer-to-peer teaching method. Additionally, I've been taking one-on-one classes with a private tutor since January, further enhancing my frontend development skills." />
        <InfoCard title="About me" details={<>
          I'm originally from Buenos Aires, Argentina, but I've been living in Barcelona since 2016. My journey has been quite the rollercoaster ride, filled with twists and turns. Here, in my new life in Barcelona, I started off as an English teacher, then, I took on the role of an academic coordinator, where I learned the art of juggling schedules and keeping things running smoothly. But, you know what? I got a bit tired of the classroom routine and found my heart in web development and UX design. I've blended my love for aesthetics, inspired by my photography background, with the logic of coding. It's a bit like art and tech had a baby.
        </>}
        />
        <InfoCard title="Skills" details={<>I specialize in Frontend Development, with experience in HTML, CSS, React, and JavaScript. In UX/UI Design, I prioritize aesthetics and user experience, combining my photography background with design principles for great interfaces, using Figma or Adobe XD. Additionally, I'm skilled in Version Control with Git and some C language knowledge which I'm currently learning in my programming course at 42 Barcelona. <br />
        If you ask me about my soft skills, I'm dedicated to continous learning and strong communication, cultivated through teaching that help me convey ideas effectively and collaborate with diverse teams. I'm also known for my baking skills and being a reliable source of great memes and whatsapp stickers</>
        }
        />
      </div>
    </div>
  )
}

export default About