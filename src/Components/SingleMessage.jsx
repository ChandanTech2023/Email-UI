import React from 'react'
import { MdCropSquare, MdLabelImportantOutline } from 'react-icons/md'
import { CiStar } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'


const SingleMessage = () => {
// Now Create Mail when we click any mail link
let navigate = useNavigate();  // use navigate for moving one page to another
const openMail = ()=>{
    navigate("mail/1234r");

}

    return (
        <div onClick={openMail}  className='flex item-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover: shadow-md'>
            <div className='flex items-center '>
                <div className='flex-none  text-gray-400'>
                    <MdCropSquare size={"20px"} className='w-5 h-8' />

                </div>
                <div className='flex-none  text-gray-400'>
                    <CiStar size={"20px"} className='w-5 h-6' />

                </div>
                <div className='flex-none  text-gray-400'>
                    <MdLabelImportantOutline size={"20px"} className='w-5 h-8' />

                </div>
            </div>

            <div className='flex-1 justify-start content-center ml-8 '>
                <p className=' text-gray-600 truncate  max-w-full '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div className='flex-none text-gray-400 text-sm'>
                Time aayega

            </div>
        </div>
    )
}

export default SingleMessage