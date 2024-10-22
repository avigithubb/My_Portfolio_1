import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import python from "../assets/images/python.jpg";
import webdev from "../assets/images/Full_Stack.jpg";
import Card from "./CertificationCard";
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Certification(){

    const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState(false);

    function handleClick(event){
        setIsActive(!isActive);
        setMode(!mode);

        if (mode == true){
            document.querySelector(".myBody").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            
        }else{
            document.querySelector(".myBody").style.background = "#3C3D37";
            
        }
    };

    // var myBody = document.getElementsByTagName("body");

    var myBody = {
        background: "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)",
        fontFamily: "'Montserrat', sans-serif",
        fontOpticalSizing: "auto",
        height: "100%",
        width: "100vw",
        marginTop: "-67px"
    };
    return (
        <div className="myBody" style={myBody}>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <h1 id="certification-text" style={{textAlign: "center", fontSize: "100px", color: "white"}}>My Certifications</h1>
            <button onClick={() => { navigateTo(-1) }} className="go_home" style={{position: "absolute", right: "100px", left: "100px"}}><HomeIcon /></button>

            <div className="certi-cards" style={{width: "80vw", margin: "auto", marginTop: "200px", padding: "20px", display: "flex"}}>
                <Card img={python} description="100 Days of Code: The Complete Python Pro Bootcamp, By Dr. Angela Yu." link="https://www.udemy.com/certificate/UC-83245d13-3b85-4b00-9b89-13192629fdf2/" />
                <Card img={webdev} description="The Complete 2024 Web Development Bootcamp, By Dr. Angela Yu." link="https://www.udemy.com/certificate/UC-a2d9f622-1fac-4b84-80a3-86475203ae7f/" />
            </div>

        </div>
    )
}

export default Certification;