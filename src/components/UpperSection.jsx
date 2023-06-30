import React from 'react'

const UpperSection = () => {
    return (
        <div classname="flex flex-col justify-center items-center">
            <div className="text-white text-[70px] text-center">
                {/* place */}
                Mumbai
            </div>
            <div className="mt-[-85px] mb-[-65px] text-white text-[180px] text-center">
                {/* temp */}
                29&deg;C
            </div>
            <div className="text-[30px] text-white text-center">
                {/* day, date, time  */}
                Monday, 24 June, 20:02
            </div>
        </div>
    )
}

export default UpperSection
