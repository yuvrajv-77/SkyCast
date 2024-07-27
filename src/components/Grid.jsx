import React from 'react'

const Grid = () => {
  return (
    <div>
         <div className='h-[calc(100vh-8rem)]  mt-5  grid grid-cols-5 gap-5 grid-rows-6'>

          <div className='col-span-3 row-span-2  bg-[#e3e7fb] rounded-3xl border-2 border-white'>a</div>

          <div className=' bg-[#e3e7fb] rounded-3xl border-2 border-white col-span-2 row-span-6'>b</div>

          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'></div>
          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>c</div>
          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>c</div>
          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>c</div>
          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>c</div>
          <div className=' bg-[#e3e7fb] rounded-2xl border-2 border-white'>c</div>

          <div className=' bg-[#e3e7fb] rounded-3xl border-2 border-white col-span-3 row-span-2'>d</div>
        </div>
    </div>
  )
}

export default Grid