import React, {useState} from "react";
import "./Weather.css";
import axios from "axios"
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast"

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false})
    const[city, setCity] = useState(props.defaultCity)

    function handleResponse(response){
        //console.log(response.data)
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
        <div className="weather border shadow p-3 mb-5 bg-white rounded">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city .." className="form-control" onChange={handleCityChange}/></div>
                   <div className="col-3 "> <input type="submit" value="search" className="btn btn-primary button "/></div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForcast data={weatherData}/>
        </div>
    );} else{
        search();
        return "loading...";
    }
}