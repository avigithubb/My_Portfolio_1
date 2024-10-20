import React, { useState, useEffect } from "react";
import myPic from "../assets/images/my-pic.jpg";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ContactMe(){
    const navigateMe = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState(false);

    function handleClick(event){
        setIsActive(!isActive);
        setMode(!mode);

        if (mode == true){
            document.querySelector(".mDiv").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            document.querySelector(".getInTouch").style.color = "black";
            
            
        }else{
            document.querySelector(".mDiv").style.background = "#3C3D37";
            document.querySelector(".getInTouch").style.color = "white";
    
        }
    };

    var myDiv = {
        background: "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)",
        fontFamily: '"Montserrat", sans-serif',
        fontOpticalSizing: "auto",
        height: "100vh",
        width: "100vw",
        marginTop: "-20px"
    }

    var pTag = {
        fontSize: "xx-large"
    };

    var noStyle ={
        listStyle: "none"
    };

    var liP = {
        fontSize: "large"
    };

    return (
        <div className="mDiv" style={myDiv}>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <button className="go_home" onClick={() => { navigateMe(-1)}}><HomeIcon /></button>
            <section id="contact-card">
                <div className="contactss" style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="getInTouch" style={{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "50px"}}>
                        <h2>Get In Touch</h2>
                        <p style={pTag}>Aspire To Inspire</p>
                        <p style={pTag}>If you love coding as much as I do.</p>
                        <p style={pTag}>Feel free to contact me.</p>
                    </div>
                    <div className="my-contact-card">
                        <div className="contact-inner">
                        </div>
                        <div className="contact-img-container">
                            <img src={myPic} alt="profile-pic" className="contact-pic" />
                        </div>
                        
                        <li style={noStyle}><p style={liP}><i className="fa-solid fa-location-dot"></i> MP, INDIA</p></li>
                        <li style={noStyle}><p style={liP}><i className="fa-solid fa-phone"></i> +91 9770702945</p></li>
                        <li style={noStyle}><p style={liP}><i className="fa-solid fa-paper-plane"></i> avishek.npt@gmail.com</p></li>
                        
                        <a href="https://x.com/avi_npt007" className="brand-link" target="_blank" rel="noopener noreferrer"><XIcon /></a>
                        <a href="www.linkedin.com/in/abhishek-napit-b6288926b" className="brand-link" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href="https://github.com/avigithubb" className="brand-link" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default ContactMe;