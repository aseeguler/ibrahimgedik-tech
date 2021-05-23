import React from 'react'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import Projects from '../data/projects'


function ProjectCard() {
    return (
        <>
        {Projects.map((project) => (
            <div className="project-card" key={project.id}>
            <div className="project-card-container">
              <div className="project-card-link">
                <a href="" className="github-link">
                <AiOutlineLink color="#fff" size={30} />
                </a>
              <a href="" className="demo-link">
                <AiFillGithub color="#fff" size={30} />
                </a>
              </div>
                <h4 className="project-card-title">{project.name}</h4>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} style={{background:`${tag.bgColor}`, color:`${tag.color}`}} className="badge">{tag.name}</span>
                    ))}
                </div>
            </div>
        </div>
        ))}
        </>
    )
}

export default ProjectCard
