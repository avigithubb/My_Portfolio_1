import React, { useEffect } from "react";
import myPic from "../assets/images/my-pic.jpg";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import ContactMe from "./Contact_me";
import Certification from "./Certifications";
import Home from "./Home";

function Header(props){

    const navigate = useNavigate();

    if (props.id == "/"){
        useEffect(() => {
            navigate("/");
        }, [])
        
    }
    else if(props.id == "/skills"){
        console.log("I am here");
        useEffect(() => {
            navigate("/skills");
        }, [])
        
    }
    else if(props.id == "/projects"){
        useEffect(() => {
            navigate("/projects");
        }, [])
        
    }
    else if(props.id == "/education"){
        useEffect(() => {
            navigate("/education");
        }, [])
        
    }
    else if(props.id == "/contact"){
        useEffect(() => {
            navigate("/contact");
        }, [])
        
    }
    else if(props.id == "/certifications"){
        useEffect(() => {
            navigate("/certifications");
        }, [])
        
    }

    return (

        <>
            {/* <Home /> */}
                
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/education" element={<Education />}></Route>
                <Route path="/contact" element={<ContactMe />}></Route>
                <Route path="/certifications" element={<Certification />}></Route>
            </Routes>
        </>
   
    )
    
}

export default Header;