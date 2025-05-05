import React from 'react';
import './projects.css';
import artisthub from '../../assets/artisthub.png';
import cit18 from '../../assets/cit18.jpg';
import spa from '../../assets/spa.png';
import github from '../../assets/github.svg';

const Projects = () => {
    const projects = [
        {
            title: "Artist Hub",
            description: "Webpage for artists and artisans",
            github: "https://larkaholic.github.io/ArtistHub-BaguioCity/",
            tech: ["HTML", "Tailwind", "Firebase"],
            image: artisthub
        },
        {
            title: "Movie Vault",
            description: "Blogging site for movies",
            github: "https://github.com/Larkaholic/CIT18FinalProject",
            tech: ["PHP", "Laravel", "MySQL"],
            image: cit18
        },
        {
            title: "UC Insight Full Therapy",
            description: "Booking system using PHP and MySQL",
            github: "https://github.com/Larkaholic/portfolioCIT18",
            tech: ["React", "Firebase", "Tailwind"],
            image: spa
        },
        {
            title: "Github",
            description: "Github Profile",
            github: "https://github.com/Larkaholic",
            tech: ["HTML", "CSS", "JavaScript"],
            image: github
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
                                src={project.image}
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
