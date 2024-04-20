export default function Information({weather, isFetching}) {
    return (
        <div className="flex flex-col gap-4 items-center w-full h-full px-5 pb-4">
        <h1 className=" text-3xl font-semibold">Information</h1>
        {isFetching ? <p className="flex flex-col items-center justify-center h-full text-xl font-medium animate-ping">Loading...</p> :
        <>
        {weather && 
        <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-row items-center h-full border-y-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">Country:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.country}</span>
        </div>
        <div className="flex flex-row items-center h-full border-b-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">Region:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.region}</span>
        </div>
        <div className="flex flex-row items-center h-full border-b-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">Lat/Lon:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.lat},{weather.location.lon}</span>
        </div>
        <div className="flex flex-row items-center h-full border-b-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">TimeZone Id:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.tz_id}</span>
        </div>
        <div className="flex flex-row items-center h-full border-b-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">Current Time:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.localtime.split(" ")[1]}</span>
        </div>
        <div className="flex flex-row items-center h-full border-b-2 border-solid border-gray-100 w-full p-1">
          <span className=" text-xl font-medium">Current Date:</span><span className="text-xl font-normal text-center">&nbsp;{weather.location.localtime.split(" ")[0]}</span>
        </div>
        </div>
        }
        </>
        }
        
      </div>
    );
  }
  