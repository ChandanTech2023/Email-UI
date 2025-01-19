import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdMinimize, MdOutlineCloseFullscreen } from "react-icons/md";
const SendMail = () => {

  const open = true;

  return (
    <div className={`${open ? "block" : 'hidden'}  bg-white max-w-6xl shadow-xl shadow-slate-500 rounded-t-md`}>
        <div className='flex p-2 bg-[#F2F6Fc] justify-between rounded-t-md'>
            <h1>New Message </h1>
            <div className='p-2 rounded-full hover:bg-gray-300 cursor-pointer flex items-center justify-center gap-3'>
                <MdMinimize size={"10px"}/>
                <MdOutlineCloseFullscreen size={"10px"}/>
                <RxCross2 size={"10px"}/>

            </div>
        </div>
        <form action="" className='flex flex-col p-3 gap-2'>
            <input type="text" placeholder='To' className=' outline-none py-2'/>
            <input type="text" placeholder='Subject' className=' outline-none py-2'/>
           <textarea name="message" cols={"30"} rows={"10"} className='outline-none py-2'></textarea>
           <button type='submit' className='rounded-full w-fit px-4 text-white font-medium bg-[#0B57D0'>Send</button>
        </form>


    </div>
  )
}

export default SendMail