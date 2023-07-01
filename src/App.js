import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainSection from './components/MainSection';

const App = () => {

	const [weatherData, setWeatherData] = useState();
	const [location, setLocation] = useState("");

	const fetchData = async () => {

		const apiKey = "6f120545f352a17e0d7be57e78811507";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

		try {
			const res = await axios.get(url);
			setWeatherData(res.data);

			console.log(res.data);
		} catch (error) {
			console.log("Error loading the data");
		}
	}

	useEffect(() => {
		fetchData();
	});

	return (
		<div className='h-screen flex flex-col justify-center items-center bg-[#141316]'>
			<div className="mb-3 w-[500px] text-[25px] font-changa flex justify-between items-center">
				<input type="text" value={location} className="px-4 py-3 w-[70%] outline-none border-none rounded-md" onChange={(e) => setLocation(e.target.value)} />
				<button className="py-3 bg-blue-500 text-white font-changa w-[28%] outline-none border-none rounded-md">Submit</button>
			</div>
			<MainSection place={location} data={weatherData} />
		</div>
	)
}

export default App;