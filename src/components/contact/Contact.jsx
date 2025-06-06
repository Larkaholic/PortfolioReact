import React from 'react';
import './contact.css';
import { FaGithub, FaEnvelope, FaFileDownload, FaGlobe } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contactTitle">Contact Me</h2>
            <div className="contactContent">
                <div className="contactLinks">
                    <a href="mailto:orillos.lark@gmail.com" className="contactLink">
                        <FaEnvelope className="contactIcon" />
                        <span>orillos.lark@gmail.com</span>
                    </a>
                    <a href="https://github.com/Larkaholic" target="_blank" rel="noopener noreferrer" className="contactLink">
                        <FaGithub className="contactIcon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://larkaholic.github.io/ArtistHub-BaguioCity/" target="_blank" rel="noopener noreferrer" className="contactLink">
                        <FaGlobe className="contactIcon" />
                        <span>ArtistHub</span>
                    </a>
                </div>
                <a href="/path-to-your-cv.pdf" download className="cvButton">
                    <FaFileDownload className="cvIcon" />
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default Contact;
