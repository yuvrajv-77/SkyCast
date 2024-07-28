import React, { useEffect, useState } from 'react'

const CurrentTemp = () => {
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
        <div className='p-8 flex flex-col justify-between h-full'>
            <div className='text-md flex font-light'>
               {currentTime} <span className='border border-white mx-2'></span> {currentDate}
            </div>

            <div className='flex items-center gap-9'>
                <p className='flex items-start text-8xl font-extralight'>39<span className='text-3xl '>°C</span></p>
                <div className='border-l-2 pl-5 py-4 text-lg font-normal border-white'>
                    <p>Rainy</p>
                    <p>Feels Like 62°</p>
                </div>
            </div>

            <div><p className='font-light text-md'>There will be mostly Sunny Skies.</p></div>
        </div>
    )
}

export default CurrentTemp