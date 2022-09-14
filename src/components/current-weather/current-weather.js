import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                    </div>
                </div>

                <div className="middle">
                    <p className="temperature">{Math.round(data.main.temp)}°</p>
                    <div className="details">
                        <div className="parameter-row">
                            <img
                                alt="weather"
                                className="weather-icon"
                                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            />
                            <span className="parameter-value">
                                {Math.round(data.main.temp)}° / {Math.round(data.main.feels_like)}°
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="weather-description">{data.weather[0].main}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CurrentWeather;