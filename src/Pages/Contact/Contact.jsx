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
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur adipisci eveniet, odit laboriosam ex repudiandae neque accusantium nesciunt, porro perspiciatis explicabo reiciendis quisquam provident voluptates vel quam voluptatibus! Corrupti.</span>
        <div className="socials">
            <Social logo={github} title="Github" url="https://github.com/cecidlp" />
            <Social logo={linkedin} title="Linkedin" url="https://www.linkedin.com/in/ceciliadelaparra/" />
            <Social logo={whatsapp} title="Whatsapp" url="https://wa.me/34684176336"/>
            <Social logo={gmail} title="Gmail" url="mailto:delaparracecilia@gmail.com"/>
        </div>

        <footer>
            <span>
                Thank you for visiting my website! <br /> <br /> Hope to hearing from you soon!
            </span>
        </footer>
    </div>
  )
}

export default Contact