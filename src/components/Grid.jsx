import React from 'react'
import CurrentTemp from './CurrentTemp'
import { PiCloud, PiDrop, PiWindLight } from 'react-icons/pi'
import { TbWind } from 'react-icons/tb'
import { LuArrowDownNarrowWide } from 'react-icons/lu'
import { FiEye } from 'react-icons/fi'
import { MdDewPoint } from 'react-icons/md'
import Forecast from './Forecast'

const Grid = ({ weatherData }) => {

  const Temperature = {
    tempC: weatherData?.current.temp_c,
    tempF: weatherData?.current.temp_f,
    status: weatherData?.current.condition.text,
    feelC: weatherData?.current.feelslike_c,
    humidity: weatherData?.current.humidity,
    windMPH: weatherData?.current.wind_mph,
    pressureIn: weatherData?.current.pressure_in,
    visibilityMi : weatherData?.current.vis_miles,
    cloud : weatherData?.current.cloud,
    dewpointC: weatherData?.current.dewpoint_c,
  }
  // const tempC = weatherData?.current.temp_c;
  // const tempF = weatherData?.current.temp_f;

  return (
    <div>
      <div className='h-[calc(100vh-8rem)]  mt-5  grid grid-cols-5 gap-5 grid-rows-6'>

        <div className='col-span-3 row-span-2  bg-[#ece8fa] rounded-3xl border-2 border-white'><CurrentTemp data={Temperature} /></div>

        <div className=' bg-[#ece8fa] rounded-3xl border-2 border-white col-span-2 row-span-6'><Forecast/></div>

        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><PiDrop size={21}/>Humidity</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.humidity} %</p>
        </div>
        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><TbWind size={21}/>Wind</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.windMPH} mph</p>
        </div>
        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><LuArrowDownNarrowWide size={22} />Pressure</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.pressureIn} in</p>
        </div>
        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><FiEye  size={21}/>Visibility</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.visibilityMi} miles</p>
        </div>
        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><PiCloud size={21}/>Clouds</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.cloud}%</p>
        </div>
        <div className=' bg-[#ece8fa] rounded-2xl border-2 border-white p-5 flex flex-col justify-around'>
          <div className='flex items-center gap-3'><MdDewPoint size={22}/>Dew Point</div>
          <p className='text-2xl font-semibold pl-8'>{Temperature.dewpointC} °C</p>
        </div>

        {/* <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>wind mph</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>pressure in</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>visibility mi</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>cloud %</div>
        <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>dewpoint c</div> */}

        <div className=' bg-[#ece8fa] rounded-3xl border-2 border-white col-span-3 row-span-2'>d</div>
      </div>
    </div>
  )
}

export default Grid