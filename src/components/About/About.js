import React, { useContext } from 'react';
import oboyz from "../../assets/svg/testimonials/obupdate.png"
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {
    const image = 'https://imgur.com/a/36VGbWs'
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>

            <div className="ocbpic">
                <img className="headerpic" src={oboyz} alt="Image" 
                height="500"
                />
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>
                        {aboutData.description1}
                        <br/><br/>
                        {aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <iframe width="400" height="315" 
                        src="https://www.youtube.com/embed/PwzTtvc-yvg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>

    )
}

export default About
