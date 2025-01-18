import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';


function Navbar() {
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <GiHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt="Gmail" />
                    <h1 className='text-2xl text-gray-600 font-medium'>Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-8 '>
                <div className='flex items-center bg-[#EAF1FB] px-3 py-2 rounded-full'>
                    <FaSearch size={'22px'} className='text-gray-600 ' />
                    <input
                        type="text"
                        placeholder='search email'
                        className='rounded-full w-full bg-transparent outline-none px-1 ' />

                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiCircleQuestion size={'20px'} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoSettingsSharp size={'20px'} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <TbGridDots size={'20px'} />
                    </div>
                    <div className='cursor-pointer'>
                       <Avatar src='' size='20px' round={true}/>
                    </div>

                </div>
            </div>
       

        </div>
    )
}

export default Navbar