import React, { useState } from 'react'
import { CiAlarmOn } from 'react-icons/ci';

const Forecast = ({ data }) => {

    const [aTab, setaTab] = useState('today');

    const handleTabChange = (tab) => {
        setaTab(tab);
    };

    let today, tomorrow, day3;
    if (data) {
        today = data[0].day
        tomorrow = data[1].day
        day3 = data[2].day
    }
    console.log(today?.avgtemp_c);


    return (
        <div className='p-7'>
            <div className=' flex items-center justify-between'>
                <h1 className='text-xl'>3-Day Forecast</h1>

                <div className='space-x-6   rounded-lg border-black'>
                    <button onClick={() => handleTabChange('today')}
                        className={`pb-1 ${aTab === 'today' ? 'border-b-3 border-black' : ''}`}
                    >Today</button>
                    <button onClick={() => handleTabChange('tomorrow')}
                        className={`pb-1 ${aTab === 'tomorrow' ? 'border-b-3 border-black' : ''}`}
                    >Tomorrow</button>
                    <button onClick={() => handleTabChange('day3')}
                        className={`pb-1 ${aTab === 'day3' ? 'border-b-3 border-black' : ''}`}
                    >Day-3</button>
                </div>

            </div>

            <div className='bg-white rounded-2xl flex items-center justify-between mt-5 p-3'>
                <div className='flex items-center gap-3'>
                    <CiAlarmOn size={55} />
                    <div>
                        <p>{aTab === 'today' ? (today?.condition.text) :
                            aTab === 'tomorrow' ? (tomorrow?.condition.text) :
                                aTab === 'day3' ? (day3?.condition.text) : ('00')
                        }</p>
                        <p className=' flex items-start text-4xl font-light'>{
                            aTab === 'today' ? (today?.avgtemp_c) :
                                aTab === 'tomorrow' ? (tomorrow?.avgtemp_c) :
                                    aTab === 'day3' ? (day3?.avgtemp_c) : ('00')

                        } <span className='text-xl'>°C</span></p>
                    </div>
                </div>

                {
                    aTab === 'today' ? (<div className='flex flex-col items-end'>
                        <p>Min Temp: {today?.mintemp_c}°C</p>
                        <p>Max Temp: {today?.maxtemp_c}°C</p>
                    </div>) :
                        aTab === 'tomorrow' ? (<div className='flex flex-col items-end'>
                            <p>Min Temp: {tomorrow?.mintemp_c}°C</p>
                            <p>Max Temp: {tomorrow?.maxtemp_c}°C</p>
                        </div>) :
                            aTab === 'day3' ? (<div className='flex flex-col items-end'>
                                <p>Min Temp: {day3?.mintemp_c}°C</p>
                                <p>Max Temp: {day3?.maxtemp_c}°C</p>
                            </div>) : ('00')

                }

            </div>
            {/* tomorrow */}
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Forecast