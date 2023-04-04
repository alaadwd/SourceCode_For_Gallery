import React from "react"

export default function ToDoFile(props){
    return(
        <div className = "todo--wrapper">
            <ul>
                <li>{props.something}</li>
                <button className="trash--icon" onClick ={props.deleteTask}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </ul>
        </div>
    )
}