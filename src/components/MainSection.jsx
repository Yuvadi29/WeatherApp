import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LowerSection from './LowerSection';
import MiddleSection from './MiddleSection';
import UpperSection from './UpperSection';

const MainSection = ({ place, data }) => {

	return (
		// src\assets\hot.jpg/ 
		<div className="w-[500px] h-[600px] bg-hot font-changa flex flex-col justify-center items-center rounded-xl">
			{/* upper section  */}
			<UpperSection place={place} temp={Math.round(data?.main?.temp - 273)} />
			{/* middle section  */}
			<MiddleSection lat={data?.coord?.lat} lon={data?.coord?.lon} sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
			{/* lower section  */}
			<LowerSection status={data?.weather[0]?.description} pressure={data?.main?.pressure} humidity={data?.main?.humidity} windSpeed={data?.wind?.speed} />
		</div>
	)
}

export default MainSection