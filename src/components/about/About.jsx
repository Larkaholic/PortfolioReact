import React from 'react';
import './about.css';
import UIDesign from '../../assets/ux-design.png';
import WebDesign from '../../assets/coding.png';
import AppDesign from '../../assets/app-development.png';

const About = () => {
    return (
        <section id="about" className="abouts">
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">
                I am a student web developer with a focus on full-stack development. 
                I specialize in Quality Assurance (QA) and coding for capstone projects, 
                ensuring high-quality deliverables for my colleagues.
            </span>
            <div className="skillsContainer">
                <div className="aboutBars">
                    <div className="aboutBar">
                        <img src={WebDesign} alt="Web Design" className="aboutBarImg" />
                        <div className="aboutBarText">
                            <h2>Project Leadership</h2>
                            <p>Lead programmer and project leader for capstone projects</p>
                        </div>
                    </div>
                    <div className="aboutBar">
                        <img src={UIDesign} alt="UI Design" className="aboutBarImg" />
                        <div className="aboutBarText">
                            <h2>Full Stack Development</h2>
                            <p>Design and develop complete web applications</p>
                        </div>
                    </div>
                    <div className="aboutBar">
                        <img src={AppDesign} alt="App Design" className="aboutBarImg" />
                        <div className="aboutBarText">
                            <h2>Collaborative Work</h2>
                            <p>Multiple successful collaborative projects with colleagues</p>
                        </div>
                    </div>
                </div>
                <div className="coreSkillsSection">
                    <span className="skillsTitle">Core Skills</span>
                    <div className="coreSkills">
                        <div className="skillCard">
                            <h2>Frontend</h2>
                            <ul>
                                <li>HTML</li>
                                <li>React</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Tailwind CSS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="skillCard">
                            <h2>Backend</h2>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>MySQL</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="skillCard">
                            <h2>Tools</h2>
                            <ul>
                                <li>GitHub</li>
                                <li>Figma</li>
                                <li>XAMPP</li>
                                <li>Canva</li>
                                <li>GIT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
