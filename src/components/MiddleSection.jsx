import React from 'react'

const MiddleSection = ({ lat, lon, sunrise, sunset }) => {

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const options = { hour: 'numeric', minute: 'numeric' };
        return date.toLocaleTimeString([], options);
      }
    
    return (
        // main container 
        <div className="my-3 pb-3 w-[380px] bg-white rounded-xl font-changa flex flex-col justify-center items-center">
            {/* lat and long  */}
            <div className="flex justify-center items-center">
                {/* lat  */}
                <div className="flex flex-col justify-center items-center">
                    {/* lat value  */}
                    <div className="text-[40px]">
                        {/* 33.44 */}
                        {lat}
                    </div>
                    {/* lat  */}
                    <div className="mt-[-15px] text-[15px]">
                        Latitude
                    </div>
                </div>
                {/* long  */}
                <div className="ml-10 flex flex-col justify-center items-center">
                    {/* long value  */}
                    <div className="text-[40px]">
                        {/* -94.04 */}
                        {lon}
                    </div>
                    {/* long  */}
                    <div className="mt-[-15px] text-[15px]">
                        Longitude
                    </div>
                </div>
            </div>
            {/* sunrise and sunset  */}
            <div className="flex justify-center items-center">
                {/* sunrise  */}
                <div className="flex flex-col justify-center items-center">
                    {/* sunrise value  */}
                    <div className="text-[40px]">
                        {/* 6:00 */}
                        {formatTime(sunrise)}
                    </div>
                    {/* sunrise  */}
                    <div className="mt-[-15px] text-[15px]">
                        Sunrise
                    </div>
                </div>
                {/* sunset  */}
                <div className="ml-10 flex flex-col justify-center items-center">
                    {/* sunset value  */}
                    <div className="text-[40px]">
                        {/* 18:00 */}
                        {formatTime(sunset)}
                    </div>
                    {/* sunset  */}
                    <div className="mt-[-15px] text-[15px]">
                        Sunset
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
