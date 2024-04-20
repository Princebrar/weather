export default function Weathertext({weather, isFetching}) {
    return (
        <div className=" flex flex-row gap-4 p-2 mt-10 w-full h-fit">
        <div className="flex backdrop-blur-sm backdrop-brightness-110 flex-col gap-4 shadow-xl items-center w-full h-full p-4 border-2 border-gray-400 rounded-3xl border-solid px-5">
        {isFetching ? <p className="flex flex-col items-center justify-center h-full text-xl font-medium animate-ping">Loading...</p> :
        <>
          {weather && 
          <>
          <span className=" text-3xl font-bold">Today&apos;s Weather</span>
          <span className=" text-lg font-medium font-serif">Weather today in {weather.location.region} will be {weather.current.condition.text}. The current temperature is {weather.current.temp_c}°C, with a real feel of {weather.current.feelslike_c}°C. Winds coming from the {weather.current.wind_dir} at {weather.current.wind_mph} mph ({weather.current.wind_kph} kph) with gusts up to {weather.current.gust_mph} mph ({weather.current.gust_kph} kph). The air pressure stands at {weather.current.pressure_mb} mb ({weather.current.pressure_in} in). Humidity is at {weather.current.humidity}% with a cloud cover of {weather.current.cloud}%. Visibility is {weather.current.vis_km} km ({weather.current.vis_miles} miles).</span>
          </>
          }
          </>
        }
        </div>
        <div className="flex flex-col backdrop-blur-sm backdrop-brightness-110 gap-4 shadow-xl items-center w-full h-full p-4 border-2 border-gray-400 rounded-3xl border-solid px-5">
        {isFetching ? <p className="flex flex-col items-center justify-center h-full text-xl font-medium animate-ping">Loading...</p> :
        <>
          {weather && 
          <>
          <span className=" text-3xl font-bold">Tomorrow&apos;s Weather</span>
          <span className=" text-lg font-medium font-serif">On {weather.forecast.forecastday[1].date}, expect {weather.forecast.forecastday[1].day.condition.text} skies with a maximum temperature of {weather.forecast.forecastday[1].day.maxtemp_c}°C ({weather.forecast.forecastday[1].day.maxtemp_f}°F) and a minimum of {weather.forecast.forecastday[1].day.mintemp_c}°C ({weather.forecast.forecastday[1].day.mintemp_f}°F). The average temperature will be {weather.forecast.forecastday[1].day.avgtemp_c}°C ({weather.forecast.forecastday[1].day.avgtemp_f}°F). Maximum wind speeds could reach {weather.forecast.forecastday[1].day.maxwind_mph} mph ({weather.forecast.forecastday[1].day.maxwind_kph} kph). The average visibility will be {weather.forecast.forecastday[1].day.avgvis_km} km ({weather.forecast.forecastday[1].day.avgvis_miles} miles), and the humidity will be around {weather.forecast.forecastday[1].day.avghumidity}%. The UV index is forecasted to be {weather.forecast.forecastday[1].day.uv}. Sunrise is at {weather.forecast.forecastday[1].astro.sunrise}, and sunset is at {weather.forecast.forecastday[1].astro.sunset}.</span>
          </>
          }
          </>
        }
        </div>
      </div>
    );
  }
  