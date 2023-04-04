import React from "react";
import "./quiz.css"

export default function Quiz(props) {
    let arr = []
    for (let i = 0 ; i < 50 ; i++){
        let r = Math.floor(Math.random() * 4)
        if( arr.indexOf(r) === -1){
            arr.push(r)
        }
    } 
    
    let example = [props.correct_answer,props.incorrect_answers[0],props.incorrect_answers[1],props.incorrect_answers[2]]
    
    
    
    
    return (
        <span>
        <h2 className="quiz--question">{props.question}</h2>
            <div className="answers">
                <span className="answer">{example[arr[0]]}</span>
                <span className="answer">{example[arr[1]]}</span>
                <span className="answer">{example[arr[2]]}</span>
                <span className="answer">{example[arr[3]]}</span>
            </div>
        <hr />

        </span>
    )
}


// <ul className="answers">
//             <li className="asnwer">Adios</li>
//             <li className="asnwer">Konnichiwa</li>
//             <li className="asnwer">Bye</li>
//             <li className="asnwer">XaiChian</li>
//         </ul>