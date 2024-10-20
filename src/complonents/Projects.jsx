import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Projects(){
    const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState(false);

    function handleClick(event){
        setIsActive(!isActive);
        setMode(!mode);

        if (mode == true){
            document.querySelector(".myDiv").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            document.querySelector(".myDiv").style.color = "black";
            
        }else{
            document.querySelector(".myDiv").style.background = "#3C3D37";
            document.querySelector(".myDiv").style.color = "white";
        
        }
    };

    var myDiv = {
        background: "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)",
        fontFamily: '"Montserrat", sans-serif',
        fontOpticalSizing: "auto",
        width: "100vw",
        marginTop: "-20px"
    };

    return (
        <div className="myDiv" style={myDiv}>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <button onClick={() => { navigateTo(-1)}} className="go_home"><HomeIcon /></button>
            <div className="project-interface" style={{display: "flex", justifyContent: "space-evenly",  height: "100vh", alignContent: "center", alignItems: "center"}}>
                <div className="portfolio-div" style={{width: "40vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 className="myPortfolio" style={{textAlign: "center", color: "white", fontSize: "100px"}}>MY PORTFOLIO</h1>
                    <p className="portfolio-text" style={{fontSize: "30px"}}>A Glimps of projects done by me. 👉</p>
                </div>
                <div id="projects">
                    <div className="my-projects" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "auto", overflow: "auto", width: "600px", height: "30rem" }}>
                        <Notification title="Book Says" description="A blog website" link="https://github.com/avigithubb/Book_says" />
                        <Notification title="Breakout Game" description="A replica of Breakout game." link="https://github.com/avigithubb/Breakout-Game" />
                        <Notification title="Coffee with Wifi" description="A full stack python flask website." link="https://github.com/avigithubb/Coffee_with_Wifi" />
                        <Notification title="Color Picker" description="An image Color Palette Generator." link="https://github.com/avigithubb/Color_Picker" />
                        <Notification title="PDF AudioBook" description="An AI feature to turn PDF data into Speech." link="https://github.com/avigithubb/PDF_AudioBook" />
                        <Notification title="Chrome Dino Automation" description="An Automated version of Chrome Dino Game." link="https://github.com/avigithubb/Chrome_Dino_Automation" />
                    </div>
                    <div>
                        <a href="https://github.com/avigithubb" target="_blank" rel="noopener noreferrer"><button className="project-btn">See More</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;