import React,{useContext} from 'react'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import {Context} from 'config/Context'
import moment from 'moment'


function ProjectCard() {  
  const {data} = useContext(Context);
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
}
  return (
        <>
        {data.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="project-card-container">
              <div className="project-card-link">
                <a href={project.Github} className="github-link" aria-label="Project Demo Link" target="_blank">
                <AiOutlineLink color="#fff" size={30} />
                </a>
              <a href={project.Demo} className="demo-link" aria-label="Project Github Link" target="_blank">
                <AiFillGithub color="#fff" size={30} />
                </a>
              </div>
                <h4 className="project-card-title">{project.Name}</h4>
                <p className="project-card-description">{project.Description}</p>
                <div className="project-card-date">
                  {convertRelativeTime(project.Created)}
                </div>
            </div>
        </div>
        ))}
        </>
    )
}


export default ProjectCard
