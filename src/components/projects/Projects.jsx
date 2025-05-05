import React from 'react';
import './projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            github: "https://github.com/yourusername/project1",
            tech: ["React", "Node.js", "MongoDB"],
            image: "project1.jpg" // Add your image path here
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            github: "https://github.com/yourusername/project2",
            tech: ["PHP", "Laravel", "MySQL"],
            image: "project2.jpg"
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            github: "https://github.com/yourusername/project3",
            tech: ["React", "Firebase", "Tailwind"],
            image: "project3.jpg"
        },
        {
            title: "Project 4",
            description: "Description of project 4",
            github: "https://github.com/yourusername/project4",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "project4.jpg"
        }
    ];

    return (
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <a href={project.github} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="projectCard" 
                       key={index}>
                        <div className="projectImageContainer">
                            <img 
                                src={require(`../../assets/projects/${project.image}`)} 
                                alt={project.title} 
                                className="projectImage"
                            />
                        </div>
                        <div className="projectInfo">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="techStack">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="techItem">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
