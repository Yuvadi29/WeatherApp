import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainSection from './components/MainSection';

const App = () => {

  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const fetchData = async () => {

    const apiKey = "6f120545f352a17e0d7be57e78811507";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
      const res = await axios.get(url);
      setWeatherData(res.data);
      setSubmitted(true);
      console.log(res.data);
    } catch (error) {
      console.log("Error loading the data");
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-[#141316]'>
      <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
        <input type="text" value={location} className="px-4 py-3 w-[70%] outline-none border-none rounded-md" onChange={(e) => setLocation(e.target.value)} />
        <button className="py-3 bg-blue-500 text-white font-changa w-[28%] outline-none border-none rounded-md" onClick={() => fetchData()}>Submit</button>
      </div>
      {submitted ? (

        location ? (
          <MainSection place={location} data={weatherData} />
        ) : (
          <p className='text-red-400'><sup>*</sup> Please Enter the location</p>
        )
      ) : null
      }
    </div>
  )
}

export default App;