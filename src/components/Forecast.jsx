import React, { useState } from 'react'

const Forecast = () => {

    const [activeTab, setActiveTab] = useState('today');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    console.log(activeTab);
    return (
        <div className='p-7'>
            <div className=' flex items-center justify-between'>
                <h1 className='text-xl'>3-Day Forecast</h1>

                <div className='space-x-6   rounded-lg border-black'>
                    <button onClick={() => handleTabChange('today')}
                        className={`pb-1 ${activeTab === 'today' ? 'border-b-3 border-black' : ''}`}
                    >Today</button>
                    <button onClick={() => handleTabChange('tomorrow')}
                        className={`pb-1 ${activeTab === 'tomorrow' ? 'border-b-3 border-black' : ''}`}
                    >Tomorrow</button>
                    <button onClick={() => handleTabChange('day3')}
                        className={`pb-1 ${activeTab === 'day3' ? 'border-b-3 border-black' : ''}`}
                    >Day-3</button>
                </div>

            </div>
        </div>
    )
}

export default Forecast