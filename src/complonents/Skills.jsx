import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkillElement from "./SkillElement";
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Skills(){
    const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState(false);

    function handleClick(event){
        setIsActive(!isActive);
        setMode(!mode);

        if (mode == true){
            document.querySelector(".mainDiv").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            
        }else{
            document.querySelector(".mainDiv").style.background = "#3C3D37";

        }
    };

    var myDiv = {
        background: "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)",
        fontFamily: '"Montserrat", sans-serif',
        fontOpticalSizing: "auto",
        height: "100%",
        width: "100vw",
        marginTop: "-20px"
    };

    return (
        <div className="mainDiv" style={myDiv}>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <button onClick={() => { navigateTo(-1)}} className="go_home"><HomeIcon /></button>
            <div className="my-skills" style={{display: "flex", justifyContent: "space-evenly", height: "80vh"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 id="my-skill-text" style={{textAlign: "center", fontSize: "150px", color: "white"}}>My Skills</h1>
                </div>
                <div className="skill-card-parent" style={{display: "flex", alignItems: "center", overflow: "auto", marginTop: "200px"}}>
                    <div className="skill-card" style={{width: "30vw", display: "flex", flexDirection: "column", overflow: "auto", padding: "10px"}}>
                        <div className="skill-element" style={{marginTop: "500px"}}>
                            <p>HTML<br />85%</p><div className="progress-bar" ><div style={{backgroundColor: "gray", height: "100%", width: "85%"}}></div></div>
                        </div>
                        <SkillElement tag="CSS" fill="85%" />
                        <SkillElement tag="JavaScript" fill="75%" />
                        <SkillElement tag="React" fill="70%" />
                        <SkillElement tag="Express" fill="70%" />
                        <SkillElement tag="PostgreSQL" fill="75%" />
                        <SkillElement tag="Python" fill="85%" />
                        <SkillElement tag="Flask" fill="70%" />
                        <SkillElement tag="Pandas" fill="60%" />
                        <SkillElement tag="Numpy" fill="40%" />
                        <SkillElement tag="Git & Github" fill="50%" />
                        <SkillElement tag="Rest API" fill="75%" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;