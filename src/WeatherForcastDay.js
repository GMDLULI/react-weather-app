import React from "react";

export default function WeatherForecastDay(props){

    function maxTemp(){
        let min = Math.round(props.forcast.temperature.minimum)
        return min
    }

    function minTemp() {
        let max = Math.round(props.forcast.temperature.maximum)
        return max
    }

    function day() {
        let date = new Date (props.forcast.time * 1000)
        let day = date.getDay()
        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day]
    }
    return (
        <div>
            <div className="WeatherForecast-Day">{day()}</div>
                <div ><img className="WeatherForcsat-Icon" src={props.forcast.condition.icon_url} alt={props.forcast.condition.description}/></div>
                <div className="WeatherForcast-temp">
                    <span className="maximum-temp">{maxTemp()}°</span>
                    <span className="minimum-temp">{minTemp()}°</span>
                    </div>
        </div>
    )
}