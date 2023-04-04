import React from 'react'
import {nanoid} from "nanoid"
import ToDoFile from "./ToDoFile"

export default function App() {
    const [lists,setLists] = React.useState(JSON.parse(localStorage.getItem("Task")) || [])
    
    const [formValue,setFormValue] = React.useState('')

    function formData(event) {
         setFormValue(event.target.value)
    }
    
    function addedTask(event){
        event.preventDefault()
        const task = {
            id : nanoid(),
            text : formValue ,
        }
        setLists(prevList =>[...prevList,task])
        // event.target.value = ""
        
    }
    
    React.useEffect(function() {
        localStorage.setItem("Task",JSON.stringify(lists))
    } , [lists])
    
    function deleteTask(id){
        event.preventDefault()
        setLists(prevList => prevList.filter(list => list.id != id))
    }
    
    const listsElement = lists.map(list => 
                        <ToDoFile 
                         something={list.text} 
                         key = {list.id}
                         deleteTask = {() => deleteTask(list.id)}
                        />)
    
    return (
        <main className ="main--element">
         <h1 className ="list--header">To Do List</h1>
            <form>
            <label className ="form--label" htmlFor ="input" >Input Your Tasks</label>
                <br/>
                <span className ="wrapper">
                <input 
                    className = "input--field"
                    type="text"
                    name="input"
                    // value = {event.target.value}
                    placeholder ="What do you need to do ...?"
                    onChange = {formData}
                    />
                <button className="input--btn" onClick ={addedTask}>Submit</button>                
                </span>
                
                {listsElement}
            </form>
         </main>
    )   
}
//     const [lists,setLists] = React.useState([])
    
//     function newTask(event) {
//         event.preventDefault()
//         const newItem = {
//             id : nanoid(),
//             body : event.target.value
//         }
//         setLists(prevLists => prevLists.push(newItem))
//         console.log(lists)
//     }
//     const listElements = lists.map(list => <ToDoFile TheTask = {list}/>)
    
    
//     return (
//         <main className ="main--element">
//         <h1 className ="list--header">To Do List</h1>
//         <Form newTask={newTask} formValue = {} />
//         {listElements}    
//         </main>
//     )
// }