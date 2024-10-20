import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Card(props){
    const navigateTo = useNavigate();
    return (

        <>
            <div className="card">
                <div className="card-inner">
            
                    <h2 className="card-title">{props.title}</h2>
                    
                    <button title={props.title} className="card-btn" onClick={()=> { navigateTo(props.link)}}><OpenInNewIcon /></button>
                    
                </div>
            </div>
            

            {/* <Routes>
                <Route path="/skills" ></Route>
                <Route path="/projects" ></Route>
                <Route path="/education" ></Route>
                <Route path="/certifications" ></Route>
                <Route path="/contact" ></Route>
            </Routes> */}
        </>
        
    )
}

export default Card;