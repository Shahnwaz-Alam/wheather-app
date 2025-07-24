import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp()  {
    const [weatherInfo, setWeatherInfo ] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.02,
    tempMax: 25.05,
    humidity: 67,
    weather: "Dase",
});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    
    return(
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by sonu</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}