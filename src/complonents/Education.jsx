import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Education(){
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
        height: "100vh",
        width: "100vw",
        marginTop: "-67px"
    };



    return (
        <div className="mainDiv" style={myDiv}>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <h1 className="education-text" style={{textAlign: "center", fontSize: "100px", color: "white"}}>My Education</h1>
            <button onClick={() => { navigateTo(-1) }} className="go_home" style={{position: "absolute", right: "100px", left: "100px"}}><HomeIcon /></button>
            <section id="education">
                <div className="education-card">
                    <div className="education-card-inner">
                        
                        <h2>B.Sc.</h2>
                        <p>Govt. Model Science Autonomous College</p>
                        <h3>Main Subjects:</h3>
                        <p>Computer Applications</p>
                        <p>Mathematics</p>
                        <p>Geology</p>

                    </div> 
                </div>
                <div className="education-card">
                    <div className="education-card-inner">
                        
                        <h2>MCA</h2>
                        <p>Oriental Institute Of Science and Technology</p>
                        <h3>Subjects and Skills:</h3>
                        <p>Computer networks</p>
                        <p>Operating System</p>
                        <p>DBMS</p>
                        <p>JAVA</p>
                        <p>DSA</p>
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Education;