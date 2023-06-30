import React from 'react'

const LowerSection = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* rain status */}
            <div className="flex justify-center items-center">
                <div className="w-[120px] border-[1px]">

                </div>
                <div className="mx-8 text-[30px] text-white">
                    Rain
                </div>
                <div className="w-[120px] border-[1px]">

                </div>
            </div>
            {/* pressure, humidity, wind speed  */}
            <div className="my-3 pb-3 w-[380px] bg-white rounded-xl font-changa flex justify-center items-center">
                {/* pressure  */}
                <div className="flex flex-col justify-center items-center">
                    {/* pressure value  */}
                    <div className="text-[30px]">
                        1014
                    </div>
                    {/* pressure title  */}
                    <div className="mt-[-15px] text-[15px]">
                        Pressure
                    </div>
                </div>
                {/* humidity  */}
                <div className="mx-7 flex flex-col justify-center items-center">
                    {/* humidity value  */}
                    <div className="text-[30px]">
                        89%
                    </div>
                    {/* humidity title  */}
                    <div className="mt-[-15px] text-[15px]">
                        Humidity
                    </div>
                </div>
                {/* wind speed  */}
                <div className="flex flex-col justify-center items-center">
                    {/* wind speed value  */}
                    <div className="text-[30px]">
                        12km/h
                    </div>
                    {/* wind Speed title */}
                    <div className="mt-[-15px] text-[15px]">
                        Wind Speed
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerSection
