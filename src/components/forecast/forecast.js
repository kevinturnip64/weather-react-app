import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

import WindIcon from "../../assets/icon/wind.png";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAILY_TIME = ['Morning', 'Afternoon', 'Evening', 'Overnight']

const Forecast = ({ data, currentWeather }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <div>
                <div className="todayforecast">
                    <div className="top">
                        <label className="title">Today's forecast for {currentWeather.city}</label>
                    </div>
                    <div className='hourlyforecast'>
                        {data.list.splice(0, 4).map((item, idx) => (
                            <div className="section" id={idx}>
                                <div className='highlight'>{DAILY_TIME[idx]}</div>
                                <div className='sectiontemp'>
                                    {Math.round(item.main.temp_max)}°
                                </div>
                                <div className='icon'>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} ></img>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dailyforecast">
                    <div className="top">
                        <label className="title">10 Day Weather  </label>
                        <p> - {currentWeather.city}</p>
                    </div>
                    <Accordion allowZeroExpanded>
                        {data.list.splice(0, 7).map((item, idx) =>
                        (
                            <AccordionItem key={idx}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily-item" id={idx}>
                                            <label className="day">{forecastDays[idx]}</label>
                                            <div className="min-max"><span className="bold">{Math.round(item.main.temp_max)}° </span> / {Math.round(item.main.temp_min)}°</div>
                                            <img
                                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="icon-small" alt="weather"
                                            />
                                            <label className="description">{item.weather[0].main}</label>
                                            <div className="wind">
                                                <img className="icon-small" src={WindIcon}></img>
                                                <label className="rain">{item.wind.speed} mph</label>
                                            </div>
                                            <div className="collapse-icon">

                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="daily-details-grid">
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Pressure:</label>
                                            <label>{item.main.pressure}</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Humidity:</label>
                                            <label>{item.main.humidity}</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Clouds:</label>
                                            <label>{item.clouds.all}%</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Wind speed:</label>
                                            <label>{item.wind.speed} m/s</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Sea level:</label>
                                            <label>{item.main.sea_level}m</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label className="bold">Feels like:</label>
                                            <label>{item.main.feels_like}°</label>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default Forecast;