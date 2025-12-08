import React,{useState} from "react";
import './ProgressHeader.css';

const ProgressHeader = (props) => {
    const taskCount = props.cards.length; 
    const completedTask = props.cards.filter(card => card.status === "completed").length;
    
    const progress = (completedTask / taskCount) * 100;

    return (
        <div className="progress-header">
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${progress}%`}}></div>
            </div>
            <div className="progress-info">
                <span>Всего задач: {taskCount}</span>
                <span>Выполнено: {completedTask}</span>
                <span>Прогресс: {Math.round(progress)}%</span>
            </div>
        </div>
        
    )
}

export default ProgressHeader; 