import React from "react"

export default function Card(props) {
    return (
        <div className = "card">
            <img className = "card--img" src ={props.item.imageUrl}/>
            <div className="stacker">
            <span className ="img--container">
              <span className ="card--header"> 
              <i className='card--fa fas fa-map-marker-alt'></i>
              <h3>{props.item.location}</h3>
              <a href ="#"> View Google Maps</a>
                </span>
              </span>
              <h1 className ="card--header">{props.item.title}</h1>
              <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
              <p className="card--para">{props.item.description}</p>
              </div>
        </div>
    )
}