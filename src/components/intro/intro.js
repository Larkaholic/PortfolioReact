import React from "react";
import './intro.css';
import bg from '../../assets/nobg-copy.png'
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Orillos</span><br></br>Future Full-Stack</span>
                <p className="introPara">I am a web designer aspiring to be a full-stack developer</p>
                <Link><button className="btn"> Contact Me </button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    );
}

export default Intro;