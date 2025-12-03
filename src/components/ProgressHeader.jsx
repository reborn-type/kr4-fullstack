import React,{useState} from "react";
import './ProgressHeader.css';

const ProgressHeader = (props) => {
    const taskCount = props.cards.length; 
    const completedTask = props.cards.filter(card => card.status === "completed").length;


    return (
        <div className="progress-header">
            <div className="progress-fill" style={{width: `${(completedTask/taskCount)*100}%`}}></div>
        </div>
    )
}

export default ProgressHeader; 