import React from 'react'

const MiddleSection = () => {
    return (
        // main container 
        <div className="my-3 pb-3 w-[380px] bg-white rounded-xl font-changa flex flex-col justify-center items-center">
            {/* lat and long  */}
            <div className="flex justify-center items-center">
                {/* lat  */}
                <div className="flex flex-col justify-center items-center">
                    {/* lat value  */}
                    <div className="text-[40px]">
                        33.44
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
                        -94.04
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
                        6:00
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
                        18:00
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
    // < div className = "" >
    //     {/* sunrise  */ }
    //     < div className = "" >
    //         {/* sunrise value  */ }
    //         < div className = "" >
    //             6:00
    //                 </ >
    // {/* sunrise  */ }
    // < div className = "" >
    //     Sunrise
    //                 </ >
    //             </div >
    // {/* sunset  */ }
    // < div className = "" >
    //     {/* sunset value  */ }
    //     < div className = "" >
    //         18:00
    //                 </ >
    // {/* sunset  */ }
    // < div className = "" >
    //     Sunset
    //                 </ >
    //             </div >
    //         </div >