import React,  {useState, useEffect} from "react";
import "./WeatherForcast.css"
import axios from "axios"
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForcast] = useState(null)

    useEffect(() => {
        setLoaded(false);
    }, [props.data.city])
    function handleforcast(response) {
        setForcast(response.data.daily)
        setLoaded(true);
    }
  

    if (loaded){
        //console.log(forecast)
        return (
            <div className="WeatherForcast">
                <div className="row">
                    {forecast.map(function(dailForcast, index){
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForcastDay forcast={dailForcast}/>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                    {/* <div className="col">
                        <WeatherForcastDay forcast={forcast[0]}/>
                    </div>
                    <div className="col">
                        <WeatherForcastDay forcast={forcast[1]}/>
                    </div>
                    <div className="col">
                        <WeatherForcastDay forcast={forcast[2]}/>
                    </div>
                    <div className="col">
                        <WeatherForcastDay forcast={forcast[3]}/>
                    </div>
                    <div className="col">
                        <WeatherForcastDay forcast={forcast[4]}/>
                    </div> */}
                </div>
            </div>)
    } else {
        let apikey="68ed940b3b921df8ccf6e6331of75tba"
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apikey}`
        axios.get(apiUrl).then(handleforcast)
        return null;
    }
}