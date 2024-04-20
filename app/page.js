"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Information from "./Components/information";
import WeatherOutlook from "./Components/weather_outlook";
import Weathertext from "./Components/weathertext";
export default function Home() {
 const [city, setCity] = useState("calgary");
 const [weather,setWeather] = useState(null) ;
 const [isthereerror, setIsthereerror] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchWeather() {
        setIsFetching(true);
        const url1 = `https://corsproxy.io/?https://api.weatherapi.com/v1/forecast.json?key=ba3a39e42ea740cfae9232030241704&q=${city}&days=2&aqi=no&alerts=no`;
        const options1 = {
          method: 'GET',
        };
        
        try {
          const response = await fetch(url1, options1);
          const result = await response.json();
          if (!result.error)
          {
            setWeather(result);
          }
          else
          {
            setIsthereerror(true);
          }
          console.log(result)
          setIsFetching(false);
        } catch (error) {
          setIsFetching(false);
          console.error("Catcher Error is: "+error);
        }

    }

    fetchWeather();
  }, [city]);
  const onButtonClick = () => {
    setIsthereerror(false);
    if (document.querySelector('input').value != ""){
    setCity(document.querySelector('input').value);
  }
  else
  {
    setCity("calgary");
  }
}
  return (
    <main className={` h-fit w-screen bg-gradient-to-tr ${weather !=null &&` ${ weather.current.condition.text== "Sunny" || weather.current.condition.text== "Clear" ? " from-yellow-500 to-yellow-300": " from-blue-500 to-blue-200" }`} text-black`}>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-fit p-4 pt-24 mb-5 ">
      <h1 className="text-5xl font-extrabold">Weather App</h1>
        <form className="flex flex-col items-center justify-center w-full mt-5" onSubmit={e => { e.preventDefault();onButtonClick();}}>
        <input type="text" placeholder="Search for a city" className="border-2 bg-white/35 brightness-110 rounded-lg p-2 w-1/2"/>
        {isthereerror && <span className=" text-red-500 font-semibold text-lg">This City Doesnot Exist in the Database</span>}
        </form>
      </div>
      <div className=" flex flex-row w-full h-[400px]">
      <WeatherOutlook weather={weather} isFetching={isFetching} />
      <Information weather={weather} isFetching={isFetching} />
      </div>
      <Weathertext weather={weather} isFetching={isFetching} />
    </main>
  );
}
