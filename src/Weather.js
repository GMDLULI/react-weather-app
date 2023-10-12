import React, {useState} from "react";
import "./Weather.css";
import axios from "axios"
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast"

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false})
    const[city, setCity] = useState(props.defaultCity)

    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            ready: true, 
            coordinates: response.data.coordinates,
            humidity:response.data.temperature.humidity,
            date: new Date (response.data.time * 1000),
            description:response.data.condition.description,
            wind:response.data.wind.speed,
            city:response.data.city,
            temperature:response.data.temperature.current,
            icon:response.data.icon,
            icon_url:response.data.condition.icon_url
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        search()
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function search() {
        const apikey="68ed940b3b921df8ccf6e6331of75tba"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }
    if (weatherData.ready){
    return (
        <div className="weather border rounded">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city .." className="form-control" onChange={handleCityChange}/></div>
                   <div className="col-3 "> <input type="submit" value="search" className="btn btn-primary p-2"/></div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForcast data={weatherData}/>
            {/* <h1>New York</h1>
            <ul className="description">
                <li>{weatherData.date.getDate()}</li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt=""/>
                    <span className="temparature">6</span><span className="units">°C|°F </span>
                </div>
                <div className="col-6">
                    <ul className="description">
                        <li>Percepitation: 12%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>wind: {Math.round(weatherData.wind)}km/h</li>
                    </ul>
                </div>
            </div> */}
        </div>
    );} else{
        search();
        return "loading...";
    }
}