import React from 'react';

const UpperSection = ({ place, temp }) => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-white text-[70px] text-center">
                {/* place */}
                {place}
            </div>
            <div className="mt-[-85px] mb-[-65px] text-white text-[180px] text-center">
                {/* temp */}
                {temp}&deg;C
            </div>
            <div className="text-[30px] text-white text-center">
                {/* day, date, time  */}
                {/* Monday, 24 June, 20:02 */}
                {[year, month, day].join("-")}
            </div>
        </div>
    )
}

export default UpperSection
