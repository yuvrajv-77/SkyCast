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

    const weatherImages = {
        1000: "/assets/sun.png",
        1003: "/assets/partly-cloudy.png",
        1006: "/assets/clouds.png",
        1009: "/assets/overcast.png",
        1030: "/assets/overcast.png",
        1066: "/assets/light-rain.png",
        1063: "/assets/light-rain.png",
        1087: "/assets/light-thunder.png",
        1135: "/assets/fog.png",
        1147: "/assets/fog.png",
        1150: "/assets/light-rain.png",
        1180: "/assets/light-rain.png",
        1089: "/assets/light-rain.png",
        1192: "/assets/rain.png",
        1195: "/assets/rain.png",
        1198: "/assets/light-snow.png",
        1210: "/assets/light-snow.png",
        1213: "/assets/light-snow.png",
        1219: "/assets/snowy.png",
        1215: "/assets/snowy.png",
        1240: "/assets/light-rain.png",
        1273: "/assets/thunder.png",
        1276: "/assets/storm.png",
        1282: "/assets/storm.png"
    }
    const weatherCode = weatherData?.current.condition.code;
    const weatherImage = weatherImages[weatherCode] || "/assets/sun.png";


    return (
        <div>
            <div className='h-[calc(100vh-8rem)]  mt-5  grid grid-cols-5 gap-y-3 gap-x-5 desk:gap-5 grid-rows-6'>

                <div className='col-span-3 row-span-2  bg-[#eceefa] rounded-3xl border-2 border-white relative overflow-hidden'><CurrentTemp data={Temperature} img={weatherImage} /></div>

                <div className=' bg-[#eceefa] rounded-3xl border-2 border-white col-span-2 row-span-6'><Forecast data={weatherData?.forecast.forecastday} curr={Temperature} weatherimgs={weatherImages} /></div>


                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><PiDrop size={21} />Humidity</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.humidity} %</p>
                </div>
                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><TbWind size={21} />Wind</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.windMPH} mph</p>
                </div>
                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><LuArrowDownNarrowWide size={22} />Pressure</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.pressureIn} in</p>
                </div>
                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><FiEye size={21} />Visibility</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.visibilityMi} miles</p>
                </div>
                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><PiCloud size={21} />Clouds</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.cloud} %</p>
                </div>
                <div className=' bg-[#eceefa] rounded-2xl border-2 border-white p-3 desk:p-5 flex flex-col justify-around'>
                    <div className='flex items-center gap-3 text-sm desk:text-base'><MdDewPoint size={22} />Dew Point</div>
                    <p className='text-xl desk:text-2xl font-semibold pl-8'>{Temperature.dewpointC} °C</p>
                </div>


                <div className=' bg-[#eceefa] rounded-3xl border-2 border-white col-span-3 row-span-2 py-4 desk:py-7 px-9 flex justify-between'>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><PiCloudRain size={27} />Chance of Rain</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.rainChance} %</p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><GoSun size={27} />UV Index</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.uv}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><FiSunrise size={25} />Sunrise</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.sunrise} </p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><LuMoon size={25} />Moonrise</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.moonrise}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><FiSunset size={25} />Sunset</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.sunset}</p>
                        </div>
                        <div className=' flex flex-col justify-around'>
                            <div className='flex items-center gap-3 text-sm desk:text-base'><IoMdMoon size={25} />Moonset</div>
                            <p className='text-xl desk:text-2xl font-semibold pl-10'>{Temperature.moonset}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid