import React from 'react'
import CurrentTemp from './CurrentTemp'
import { PiCloud, PiCloudRain, PiDrop, PiWindLight } from 'react-icons/pi'
import { TbWind } from 'react-icons/tb'
import { LuArrowDownNarrowWide, LuMoon } from 'react-icons/lu'
import { FiEye, FiSunrise, FiSunset } from 'react-icons/fi'
import { MdDewPoint } from 'react-icons/md'
import Forecast from './Forecast'
import { GoSun } from 'react-icons/go'
import { IoMdMoon } from 'react-icons/io'

const Grid = ({ weatherData }) => {

    const Temperature = {
        tempC: weatherData?.current.temp_c,
        tempF: weatherData?.current.temp_f,
        status: weatherData?.current.condition.text,
        feelC: weatherData?.current.feelslike_c,
        humidity: weatherData?.current.humidity,
        windMPH: weatherData?.current.wind_mph,
        pressureIn: weatherData?.current.pressure_in,
        visibilityMi: weatherData?.current.vis_miles,
        cloud: weatherData?.current.cloud,
        uv: weatherData?.current.uv,
        dewpointC: weatherData?.current.dewpoint_c,
        rainChance: weatherData?.forecast.forecastday[0].day.daily_chance_of_rain,
        sunrise: weatherData?.forecast.forecastday[0].astro.sunrise,
        sunset: weatherData?.forecast.forecastday[0].astro.sunset,
        moonrise: weatherData?.forecast.forecastday[0].astro.moonrise,
        moonset: weatherData?.forecast.forecastday[0].astro.moonset,
    }

    const forecastData = weatherData?.forecast.forecastday

    return (
        <div>
            <div className='h-[calc(100vh-8rem)]  mt-5  grid grid-cols-5 gap-5 grid-rows-6'>

                <div className='col-span-3 row-span-2  bg-[#ece8fa] rounded-3xl border-2 border-white'><CurrentTemp data={Temperature} /></div>

                <div className=' bg-[#ece8fa] rounded-3xl border-2 border-white col-span-2 row-span-6'><Forecast data={forecastData} /></div>

                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><PiDrop size={21} />Humidity</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.humidity} %</p>
                </div>
                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><TbWind size={21} />Wind</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.windMPH} mph</p>
                </div>
                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><LuArrowDownNarrowWide size={22} />Pressure</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.pressureIn} in</p>
                </div>
                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><FiEye size={21} />Visibility</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.visibilityMi} miles</p>
                </div>
                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><PiCloud size={21} />Clouds</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.cloud}%</p>
                </div>
                <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3'><MdDewPoint size={22} />Dew Point</div>
                    <p className='text-2xl font-semibold pl-8'>{Temperature.dewpointC} °C</p>
                </div>

                {/* <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>wind mph</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>pressure in</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>visibility mi</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>cloud %</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>dewpoint c</div> */}

                <div className=' bg-[#ece8fa] rounded-3xl border-2 border-white col-span-3 row-span-2 py-7 px-9 flex justify-between'>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><PiCloudRain size={27} />Chance of Rain</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.rainChance} %</p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><GoSun size={27} />UV Index</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.uv}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><FiSunrise size={25} />Sunrise</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.sunrise} </p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><LuMoon size={25} />Moonrise</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.moonrise}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><FiSunset size={25} />Sunset</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.sunset}</p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3'><IoMdMoon  size={25} />Moonset</div>
                            <p className='text-2xl font-semibold pl-10'>{Temperature.moonset}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Grid