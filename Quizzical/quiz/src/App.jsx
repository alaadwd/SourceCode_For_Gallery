import React from "react";
import Quiz from "./component/quiz"
import {nanoid} from "nanoid"

export default function App(){
    const [startQuiz,setStartQuiz] = React.useState(true)
    const [data,setData] = React.useState([])


    React.useEffect( () => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then (data => setData(data.results))
    },[])
    
    /*  Part On
        1- Fix The Floating Button :3
        2- Fetch The OTDB API
        3- Map over the fetched JSON
        4- Pass the JSON properties as props
        5- Get nanoid()

    */

    function start() {
        setStartQuiz(prevStart =>!prevStart)
    }
    
   const dataElement = data.map( dataSingular => {
        return <Quiz
                question = {dataSingular.question}
                correct_answer = {dataSingular.correct_answer}
                incorrect_answers = {dataSingular.incorrect_answers}
                id = {nanoid()}
               />
    })

    return (
        <main className="main">{ startQuiz ?
            <section className="start">
                <div className="start--interface">
                    <h2 className="header--intro">Quizzical</h2>
                    <h5 className="header--description">Sharpen Your Brain!</h5>
                    <button onClick = {start} className="start--quiz">Start quiz</button>
                </div>
                
            </section> :
            <div className="wrapper"> 
            {dataElement}
            
            <button className="submit--answer">Check Answers</button>
            
            </div>
            }
        </main>
    )
}