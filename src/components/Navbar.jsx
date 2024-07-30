import React, { useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiMoon } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLocationSearching } from 'react-icons/md';
import { TbCurrentLocation } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';

const Navbar = ({ fetchWeatherData, data }) => {

    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeatherData(inputValue);
    }

  
    const city = data?.location.name;
    const country = data?.location.country;
    console.log("weather data navbar ",data?.location.name);
    return (
        <div className=''>
            <div className=' bg-[#eceefa] border-2 border-white rounded-3xl h-[5rem] py-5 px-10 flex mt-3 items-center justify-between'>

                <div className='flex items-center'>
                    <h2 className='font-bold text-2xl text-blue-500 '>SkyCast</h2>
                </div>

                {/* location */}
                <div className='flex items-center gap-2'>
                    <CiLocationOn size={25} />
                    <p className=''>{city || 'Mumbai'}, {country || 'India'}</p>
                </div>

                {/* Search */}
                <form className='relative' onSubmit={handleSubmit}>
                    <CiSearch size={25} color='gray' className='absolute bottom-2 left-3' />
                    <input
                        className='border bg-transparent border-gray-400 rounded-xl py-2 pl-10  pr-14 w-[25rem] outline-none focus:bg-white'
                        placeholder='Search Location'
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    {/* <button onClick={refetchCurrLocData} className='absolute bottom-[1.5px] p-[8.2px] rounded-r-xl right-[1px] bg-white hover:bg-blue-500'><MdLocationSearching size={23} /></button> */}
                </form>

                <div>
                    <button className=' p-2 bg-zinc-900 rounded-xl text-white flex items-center gap-2'>
                        <FiMoon size={22} />
                        Dark
                    </button>
                </div>

                <div>
                    <VscGithub size={25} />
                </div>

                <div>
                    <IoSettingsOutline size={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar