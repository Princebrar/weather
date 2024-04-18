"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Information from "./Components/information";
import WeatherOutlook from "./Components/weather_outlook";
import Weathertext from "./Components/weathertext";
export default function Home() {
 const [city, setCity] = useState("Calgary");
 const [weather,setWeather] = useState() ;
  
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
          setWeather(result);
          console.log(result);
          setIsFetching(false);
        } catch (error) {
          setIsFetching(false);
          console.error(error);
        }

    }

    fetchWeather();
  }, [city]);
  const onButtonClick = () => {
    setCity(document.querySelector('input').value);
  }
  return (
    <main className=" h-fit w-screen bg-white text-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-fit p-4 pt-24 mb-5 ">
      <h1 className="text-5xl font-extrabold">Weather App</h1>
        <form className="flex flex-row items-center justify-center w-full mt-5" onSubmit={e => { e.preventDefault();onButtonClick();}}>
        <input type="text" placeholder="Search for a city" className="border-2 border-gray-300 rounded-lg p-2 w-1/2"/>
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
