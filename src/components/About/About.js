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
                        {aboutData.description2}
                        <br/><br/>
                        {aboutData.description3}
                        <br/><br/>
                        {aboutData.description4}
                        <br/><br/>
                        {aboutData.description5}
                        <br/><br/>
                        {aboutData.description6}
                        <br/><br/>
                        {aboutData.description7}
                        <br/><br/>
                        {aboutData.description8}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About
