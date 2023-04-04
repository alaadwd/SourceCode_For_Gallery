import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import data from "./data.js"

export default function App() {
    const dataMapped = data.map(item => {
        return (
            <Card 
            item = {item}
            />
        )
    })
    return (
        <div>
        <Navbar />
        <section>
        {dataMapped}
        </section>

        </div>
    )
}

//    <div className = "card">
//             <img className = "card--img" src ="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-3408353.jpg&fm=jpg"/>
//             <div className="stacker">
//             <span className ="img--container">
//               <span className ="card--header"> 
//               <i className='card--fa fas fa-map-marker-alt'></i>
//               <h3>JAPAN</h3>
//               <a href ="#"> View Google Maps</a>
//                 </span>
//               </span>
//               <h1 className ="card--header">Mount Fuji</h1>
//               <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
//               <p className="card--para">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
//               </div>
//         </div>