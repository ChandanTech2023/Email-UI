import React from 'react'
import { IoMdArrowBack, IoMdCloudOutline, IoMdMore } from 'react-icons/io'
import { BiArchiveIn } from "react-icons/bi"
import { RiSpam2Line } from "react-icons/ri";
import { MdArrowLeft, MdArrowRight, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineWatchLater, MdStar } from "react-icons/md";
import { FaRegSmile } from 'react-icons/fa';
import { PiArrowArcLeft } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

function Mail() {
  const navigate = useNavigate();
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div onClick={()=> navigate("/")}
           className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdArrowBack />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BiArchiveIn />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <RiSpam2Line />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            < MdDeleteOutline />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineMarkEmailUnread />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineWatchLater />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineAddTask />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineDriveFileMove />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore />
          </div>

        </div>
        <div className='flex items-center gap-2'>
          <button className='hover:rounded-full hover:bg-gray-200'><MdKeyboardArrowLeft size={"24px"} /></button>
          <button className='hover:rounded-full hover:bg-gray-200'><MdKeyboardArrowRight size={"24px"} /></button>
        </div>

      </div>

      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className=' flex items-center justify-between bg-white gap-1'>
          <div className='flex items-center gap-2'>
            <h2 className='text-xl font-medium'> Subject </h2>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>
        </div>
        <div className='flex items-center justify-between p-0'>
          <div className='text-gray-400 text-xs flex items-center gap-2 '>
            <span className='text-black font-serif '>Chandan Kumar </span>
            <p> &lt; chandan25@gmail.com  &gt; </p>
          </div>
          <div className='flex  items-center justify-between gap-3 px-3  text-gray-400 my-5 text-sm cursor-pointer '>
            <p>02-01-2025</p>
            <MdStar />
            <FaRegSmile/>
            <PiArrowArcLeft/>
            <IoMdMore/>
          </div>
        </div>
      
        <div className='my-9'>
          <p>Hey 👋 How are you !!</p>
        </div>
        <div className='flex items-center justify-start gap-5 '>
          <button className='hover:rounded-full p-3 hover:bg-gray-200 flex items-center border rounded-full border-gray-500 text-xs '>
            <MdArrowLeft size={"20px"} />
            Reply 
           </button>
          <button className='hover:rounded-full p-3 hover:bg-gray-200 text-xs flex items-center border rounded-full border-gray-500 '>
            <MdArrowRight size={"20px"} />Forward</button>
        </div>



      </div>

    </div>
  )
}

export default Mail