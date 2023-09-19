import React, { useState } from 'react'
import './Projects.scss'
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate'
import troot from '../../assets/troot.jpg'
import project2 from '../../assets/project2.jpg'
import todo from '../../assets/todo.jpg'

const Projects = () => {
    const tags = [
        ["React", "CSS", "Tailwind"],
        ["HTML", "CSS"],
        ["Vanilla JS", "CSS", "HTML"]
    ];
    return (
        <div className='project-wrapper'>
            <div></div>
            <ProjectTemplate projectName="Troot" 
            projectDesc="One page website for a translation agency using React and Tailwind"
            tags={tags[0]}
            img={troot}
            projectUrl="https://troot-react.netlify.app/"
            />
            <ProjectTemplate projectName="Circle" 
            projectDesc="Simple HTML and CSS website"
            tags={tags[1]}
            img={project2}
            projectUrl="https://cecidlp.github.io/midterm-project-ironhack/"
            />
            <ProjectTemplate projectName="To do web" 
            projectDesc="To do website created with Vanilla JS"
            tags={tags[2]}
            img={todo}
            projectUrl="https://cecidlp.github.io/todo-app/"
            />
            <div></div>
        </div>
    )
}

export default Projects