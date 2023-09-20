import React from 'react'
import './Contact.scss'
import Social from '../../Components/Social/Social'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Get in touch</h1>
        <span>Thank you for visiting my portfolio website! <br/> I'm always excited to connect with other creators, potential collaborators, or anyone interested in learning more about my work. Whether you have a project in mind, want to discuss a potential opportunity, or just want to say hello, please don't hesitate to reach out.</span>
        <div className="socials">
            <Social logo={github} title="Github" url="https://github.com/cecidlp" />
            <Social logo={linkedin} title="Linkedin" url="https://www.linkedin.com/in/ceciliadelaparra/" />
            <Social logo={whatsapp} title="Whatsapp" url="https://wa.me/34684176336"/>
            <Social logo={gmail} title="Gmail" url="mailto:delaparracecilia@gmail.com"/>
        </div>

        <footer>
            <span>
              Let's chat and explore how we can work together to bring your ideas to life!
            </span>
        </footer>
    </div>
  )
}

export default Contact