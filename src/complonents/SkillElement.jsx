import React from "react";

function SkillElement(props) {
    return (
        <div className="skill-element">
            <p>{props.tag}<br />{props.fill}</p><div className="progress-bar" ><div style={{backgroundColor: "gray", height: "100%", width: props.fill}}></div></div>
        </div>
    )
}

export default SkillElement;