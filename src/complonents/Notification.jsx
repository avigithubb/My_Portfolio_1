import React from "react";

function Notification(props){
    return (
        <>
        <a className="each-noti" href={props.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between",margin: "auto"}}>
            <div className="notification" >
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">{props.title}</div>
                <div className="notibody">{props.description}</div>
            </div>
        </a>
        </>
    )
}

export default Notification;