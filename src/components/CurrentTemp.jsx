import React, { useEffect, useState } from 'react'

const CurrentTemp = ({ data,img }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
        };
        const updateDate = () => {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const day = days[now.getDay()];
            const date = now.getDate();
            const month = months[now.getMonth()];
            setCurrentDate(`${day}, ${date} ${month}`);
        };
        updateTime(); // Initial call to set the time immediately
        updateDate(); // Initial call to set the date immediately
        const intervalId = setInterval(updateTime, 1000); // Update the time every second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);


    return (
        <div className=' px-6 py-4  desk:p-8 flex flex-col justify-between h-full '>
            <div className='text-md flex font-light dark:text-white'>
                {currentTime} <span className='border border-gray-300 mx-2'></span> {currentDate}
            </div>

            <div className='flex items-center gap-9 '>
                <p className=' flex items-start text-7xl desk:text-8xl text-blue-500 font-extralight'>{data.tempC || '00.0'}<span className='text-3xl '>°C</span></p>
                <div className='border-l-2 pl-5 py-4  desk:text-lg font-normal  border-gray-300'>
                    <p className='dark:invert'>{data.status}</p>
                    <p className='dark:invert'>Feels Like {data.feelC}°C</p>
                </div>
            </div>
            
            <div><p className='font-light desk:text-md dark:invert'>There will be mostly Sunny Skies.</p></div>
            <img src={img} className='absolute -right-14 -top-12 size-56 desk:size-64' alt="" />
        </div>
    )
}

export default CurrentTemp