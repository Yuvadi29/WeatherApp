import React from 'react';
import LowerSection from './LowerSection';
import MiddleSection from './MiddleSection';
import UpperSection from './UpperSection';

const MainSection = () => {
	return (
		// src\assets\hot.jpg/ 
		<div className="w-[500px] h-[600px] bg-hot font-changa flex flex-col justify-center items-center rounded-xl">
			{/* upper section  */}
			<UpperSection />
			{/* middle section  */}
			<MiddleSection />
			{/* lower section  */}
			<LowerSection />
		</div>
	)
}

export default MainSection