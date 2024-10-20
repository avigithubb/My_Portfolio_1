import React from "react";

function Card(props){
    return (
        <div className="certification-card" style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", width: "300px", height: "500px", backgroundColor: "white", padding: "10px", textAlign: "center", margin: "auto"}}>
            <div className="certification-img" style={{borderRadius: "20px"}}>
                <img src={props.img} alt="certi-img" style={{width: "100%", height: "100%"}} />
            </div>
            <div className="about-this">
                <p>{ props.description }</p>
            </div>
            <a href={props.link} style={{width: "100%"}} target="_blank" rel="noopener noreferrer"><button className="view" style={{width: "100px", height: "50px", backgroundColor: "#FFCBCB", color: "black", border: "none", margin: "auto"}}>View</button></a>

        </div>
    )
}

export default Card;