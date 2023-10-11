import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="weather border rounded">
            <form>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city .." className="form-control"/></div>
                   <div className="col-3"> <input type="submit" value="search" className="btn btn-primary"/></div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt=""/>
                    <span>6°C|°F</span> 
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percepitation: 12%</li>
                        <li>Humidity: 10%</li>
                        <li>wind: 13km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )}
