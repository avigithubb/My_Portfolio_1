import React, { useState, useEffect } from "react";
import myPic from "../assets/images/my-pic.jpg";
import Card from "./Cards.jsx";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Home(){

    const [opacit, setOpacity] = useState(1);
    const [isActive, setIsActive] = useState(true);
    const [mode, setMode] = useState(true);

    function handleClick(event){
        setIsActive(!isActive);
        setMode(!mode);

        if (mode == true){
            console.log(document.getElementById("home"));
            document.getElementById("home").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            // document.getElementById("card-inner").style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            var myCard = document.querySelectorAll(".card-inner");
            myCard.forEach(card => {
                card.style.background = "linear-gradient(90deg, #FFCBCB 10%, #B9F3FC 90%)";
            })
            
            
        }else{
            console.log(document.getElementById("home"));
            document.getElementById("home").style.background = "#3C3D37";
            // document.getElementById("card-inner").style.backgroundColor = "black";
            var myCard = document.querySelectorAll(".card-inner");
            myCard.forEach(card => {
                card.style.background = "black";
            })
        }
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setOpacity(0);
          } else {
            setOpacity(1);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
      <>
            <button className={ isActive ? "light-mode" : "dark-mode"} onClick={handleClick}>{mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <section id="home">
                <div className="back-img">
                    <div className="my-img">
                        <img src={myPic} alt="my-pic" className="display-img" />
                    </div>
                </div>
                <div className="content"  style={{opacity: `${opacit}`}}>
                    <h1 className="myIntro"><span className="intro">Hi, I am <span style={{color : "#77E4C8"}}>Abhishek</span></span><br />Web Developer | Content Writer | Graphic Designer</h1>
                    <p className="bio">A versatile professional with expertise in <span style={{color : "#77E4C8"}}>Python</span> full-stack development, <span style={{color : "#77E4C8"}}>MERN</span> stack, and <span style={{color : "#77E4C8"}}>graphic design</span>. Proficient in content writing and known for exceptional multitasking skills, I bring a creative and technical approach to building high-quality web applications and designs.</p>
                    <a href="images/Abhishek Napit.docx" download><button className="download-btn"><em>🔻 Download CV</em></button></a>
                    <p className="scroll-down">Scroll Down 👇</p>
                </div>
            </section>
            <section id="cards">
                <Card title="My Skills" link="/skills" />
                <Card title="My Projects" link="/projects" />
                <Card title="My Education" link="/education" />
                <Card title="My Certifications" link="/certifications" />
                <Card title="Contact Me" link="/contact" />
            </section>
       </>
    )
}

export default Home;