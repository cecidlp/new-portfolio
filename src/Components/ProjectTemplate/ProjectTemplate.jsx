import React from 'react'
import './ProjectTemplate.scss'
import Tag from '../../Components/Tag/Tag'

const ProjectTemplate = ({ projectName, projectDesc, tags, img, projectUrl }) => {
    return (
        <div className="project">
            <div className="project-details">
                <h2 className="project-name">{projectName}</h2>
                <span className="project-desc">{projectDesc}</span>
                <div className="tags">
                    <h2 className="tech-stack">Technologies used:</h2>
                    <div className="tags-wrapper">
                        {tags.map((tag, index) => {
                            return (
                                <Tag key={projectName + index} title={tag} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <a href={projectUrl} target="_blank">
            <div className="project-image">
                <img src={img} alt="" />
            </div>
            </a>
        </div>
    )
}

export default ProjectTemplate