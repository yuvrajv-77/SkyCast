import React, { useState } from 'react'
import { CiAlarmOn } from 'react-icons/ci';
import { GoSun } from 'react-icons/go';
import { PiDrop } from 'react-icons/pi';
import { TbWind } from 'react-icons/tb';

const Forecast = ({ data, curr, weatherimgs }) => {

    const [aTab, setaTab] = useState('today');

    const handleTabChange = (tab) => {
        setaTab(tab);
    };

    const convertTo12HourFormat = (dateTime) => {
        const time24 = dateTime.split(' ')[1]; // Extract the time part
        const [hour, minute] = time24.split(':');
        const hourInt = parseInt(hour, 10);
        const period = hourInt >= 12 ? 'PM' : 'AM';
        const hour12 = hourInt % 12 || 12; // Convert '0' hour to '12'
        return `${hour12}:${minute} ${period}`;
    };

  

    let topInfo;
    let showForecast;

    if (data) {
        switch (aTab) {
            case 'today':
                topInfo = data[0].day
                showForecast = data[0].hour
                break;
            case 'tomorrow':
                topInfo = data[1].day
                showForecast = data[1].hour
                break;
            case 'day3':
                topInfo = data[2].day
                showForecast = data[2].hour
                break;
            default:
                break;
        }
    }


    return (
        <div className='p-7'>
            <div className=' flex items-center justify-between'>
                <h1 className='dark:invert text-lg desk:text-xl'>3-Day Forecast</h1>

                <div className=' text- space-x-3 desk:space-x-6 '>
                    <button onClick={() => handleTabChange('today')}
                        className={`pb-1 dark:text-white ${aTab === 'today' ? 'border-b-2 border-blue-500 ' : ''}`}
                    >Today</button>
                    <button onClick={() => handleTabChange('tomorrow')}
                        className={`pb-1 dark:text-white ${aTab === 'tomorrow' ? 'border-b-2 border-blue-500' : ''}`}
                    >Tomorrow</button>
                    <button onClick={() => handleTabChange('day3')}
                        className={`pb-1 dark:text-white ${aTab === 'day3' ? 'border-b-2 border-blue-500' : ''}`}
                    >Day-3</button>
                </div>

            </div>

            <div className='bg-white dark:bg-blue-950 rounded-2xl flex items-center justify-between mt-5 p-3'>

                {/* ----Left Side---- */}
                <div className='flex items-center gap-3'>
                <img src={weatherimgs[topInfo?.condition.code]} className='size-16 desk:size-20' alt="" />
                    <div className='dark:invert'>
                        <p className='text-sm desk:text-base'>{topInfo?.condition.text}</p>
                        <p className=' flex  text-3xl desk:text-4xl font-light'>{topInfo?.avgtemp_c}<span className='text-xl text-start'>°C</span></p>
                    </div>
                </div>

                {/* ----Right Side---- */}
                <div className='flex flex-col items-end text-sm gap-3 dark:invert'>
                        <p >Min Temp: {topInfo?.mintemp_c} °C</p>
                        <p>Max Temp: {topInfo?.maxtemp_c} °C</p>
                    </div>

                {/* {
                    aTab === 'today' ? (<div className='flex flex-col items-end text-sm gap-3'>
                        <p >Min Temp: {today?.mintemp_c}°C</p>
                        <p>Max Temp: {today?.maxtemp_c}°C</p>
                    </div>) :
                        aTab === 'tomorrow' ? (<div className='flex flex-col items-end gap-3 text-sm'>
                            <p>Min Temp: {tomorrow?.mintemp_c}°C</p>
                            <p>Max Temp: {tomorrow?.maxtemp_c}°C</p>
                        </div>) :
                            aTab === 'day3' ? (<div className='flex flex-col items-end gap-3 text-sm'>
                                <p>Min Temp: {day3?.mintemp_c}°C</p>
                                <p>Max Temp: {day3?.maxtemp_c}°C</p>
                            </div>) : ('00')

                } */}

            </div>

            <div className='my-4 overflow-auto h-[22rem] desk:h-[36rem]'>

                {
                    showForecast && showForecast.map((hour, index) => (
                        <div key={index} className='border-b-2 border-gray-500 p-2 '>
                            <div className=' flex items-center  justify-between'>
                                <div>
                                    <img src={weatherimgs[hour.condition.code]} className='size-16 desk:size-20' alt="" />
                                </div>
                                <div className='text-sm flex flex-col items-center gap-1 dark:invert'>
                                    <p>{convertTo12HourFormat(hour.time)}</p>
                                    <p className='text-xl desk:text-2xl font-semibold '>{hour.temp_c} <span className='text-lg'>°C</span></p>
                                    <p className=' text-sm'>{hour.condition.text}</p>
                                </div>
                                <div className='text-sm flex flex-col gap-2 dark:invert'>
                                    <p className='flex gap-x-2'><PiDrop size={18} />{hour.humidity} %</p>
                                    <p className='flex gap-x-2'><TbWind size={18} />{hour.wind_mph} mph</p>
                                    <p className='flex gap-x-2'><GoSun size={18} />{hour.uv}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Forecast;