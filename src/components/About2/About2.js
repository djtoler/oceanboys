import React, { useContext } from 'react';
import oboyz from "../../assets/svg/testimonials/oboyz.png"
import './About2.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData2 } from '../../data/aboutData'



function About2() {
    const image = 'https://imgur.com/a/36VGbWs'
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="about-body2">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData2.title}</h2>
                    <div className="about-img">
                </div>
                    <p style={{color:theme.tertiary80}}>
                        {aboutData2.description1}
                        <br/><br/>
                        {aboutData2.description2}</p>
                </div>
            </div>
        </div>

    )
}

export default About2