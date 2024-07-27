import { Button } from '@nextui-org/button';
import React from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiMoon } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscGithub } from 'react-icons/vsc';

const Navbar = () => {
    return (
        <div className=''>
            <div className=' bg-[#e3e7fb] border-2 border-white rounded-3xl h-[5rem] py-5 px-6 flex mt-3 items-center justify-between'>

                <div className='flex items-center'>
                    <h2 className='font-bold text-2xl text-blue-500 '>SkyCast</h2>
                </div>

                {/* location */}
                <div className='flex items-center'>
                    <CiLocationOn size={25} />
                    <p>Miami, USA</p>
                </div>

                {/* Search */}
                <div className='relative'>
                    <CiSearch size={25} color='gray' className='absolute bottom-2 left-3' />
                    <input className='border border-gray-400 rounded-xl py-2 pl-10 pr-2 w-[25rem]' type="text" />
                </div>

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