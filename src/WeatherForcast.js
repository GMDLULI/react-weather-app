import React,  {useState} from "react";
import "./WeatherForcast.css"
import axios from "axios"

export default function WeatherForcast(props){
    function handleforcast(response){
        console.log(response.data)
    }
   
    // let lat = props.data.coordinates.longitude
    // let lon = props.data.coordinates.latitude
    let apikey="68ed940b3b921df8ccf6e6331of75tba"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apikey}`
    axios.get(apiUrl).then(handleforcast)

    return (
        <div className="WeatherForcast">
            <div className="WeatherForcast-Day">Thu</div>
            <div ><img className="WeatherForcsat-Icon" src={props.data.icon_url} alt={props.data.icon}/></div>
            <div className="WeatherForcast-temp">
                <span className="maximum-temp">19°</span>
                <span className="minimum-temp">10°</span>
            </div>
        </div>
    )
}