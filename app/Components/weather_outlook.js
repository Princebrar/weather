/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export default function WeatherOutlook({weather, isFetching}) {
    const [view, setView] = useState("today")
    return (
        <div className="flex flex-col gap-4 items-center w-full h-full border-r-2 border-gray-200 border-solid px-5">
        <h1 className=" text-3xl font-semibold">Weather Outlook</h1>
          {isFetching ? <p className="flex flex-col items-center justify-center h-full text-xl font-medium animate-ping">Loading...</p> :
          <>
          {weather && 
          <div className="flex flex-row h-full backdrop-blur-sm backdrop-brightness-110 w-full rounded-3xl shadow-xl overflow-hidden mb-3 border-2 border-solid border-gray-400">
                        <GrPrevious className={` relative h-full w-11 duration-150 ease-in-out hover:scale-150 z-20 ${view == "today" ? "opacity-0" : "opacity-100" } z-0`} onClick={()=>{setView("today")}}/>
            <div className={`flex flex-row duration-300 ease-in-out h-full w-full ${view == "today" ? "" : "hidden"}`}>
            <div className="absolute flex flex-row text-center w-5/12 h-10 items-center">
            <span className=" w-full font-light text-xl text-center">Today</span>
            </div>
            <div className=" relative flex flex-col justify-center items-center h-full w-1/2">
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="w-2/3 h-2/3 object-cover"/>
            <div>
            <span className=" text-xl font-medium">{weather.current.condition.text}</span>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <div className=" border-y-2 border-solid border-gray-200 px-2 py-1">
            <span className=" text-3xl font-semibold ">&nbsp;{weather.current.temp_c}&deg;C</span>
            </div>
            <div className=" border-b-2 border-solid border-gray-200 px-2 py-1">
                <span className=" text-lg font-light ">Wind:</span><span className=" text-lg font-medium ">&nbsp;{weather.current.wind_kph}kph ({weather.current.wind_dir})</span>
            </div>
            <div className=" border-b-2 border-solid border-gray-200 px-2 py-1">
                <span className=" text-lg font-light ">Humidity:</span><span className=" text-lg font-medium ">&nbsp;{weather.current.humidity}%</span>
            </div>
            </div>
            </div>
            <div className={`flex flex-row duration-300 ease-in-out h-full w-full ${view != "today" ? "" : "hidden"}`}>
            <div className="absolute flex flex-row text-center w-5/12 h-10 items-center">
            <span className=" w-full font-light text-xl text-center">Tomorrow</span>
            </div>
            <div className=" relative flex flex-col justify-center items-center h-full w-1/2">
            <img src={weather.forecast.forecastday[1].day.condition.icon} alt={weather.forecast.forecastday[1].day.condition.text} className="w-2/3 h-2/3 object-cover"/>
            <div>
            <span className=" text-xl font-medium">{weather.current.condition.text}</span>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <div className=" border-y-2 border-solid border-gray-200 px-2 py-1">
            <span className=" text-3xl font-semibold ">&nbsp;{weather.forecast.forecastday[1].day.avgtemp_c}&deg;C</span>
            </div>
            <div className=" border-b-2 border-solid border-gray-200 px-2 py-1">
                <span className=" text-lg font-light ">Wind:</span><span className=" text-lg font-medium ">&nbsp;{weather.current.wind_kph}kph ({weather.current.wind_dir})</span>
            </div>
            <div className=" border-b-2 border-solid border-gray-200 px-2 py-1">
                <span className=" text-lg font-light ">Humidity:</span><span className=" text-lg font-medium ">&nbsp;{weather.forecast.forecastday[1].day.avghumidity}%</span>
            </div>
            </div>
            </div>
            <GrNext className={` relative h-full w-11 duration-150 ease-in-out hover:scale-150 z-40 ${view != "today" ? "opacity-0" : "opacity-100" } z-0`} onClick={()=>{setView("tomorrow")}}/>
          </div>
          }
                    </>
        }
        </div>
    );
  }
  