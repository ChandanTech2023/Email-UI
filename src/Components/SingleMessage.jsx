import React from 'react'
import { MdCropSquare, MdLabelImportantOutline } from 'react-icons/md'
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSelectedEmail } from '../redux/appSlice';
import {motion} from 'framer-motion'


const SingleMessage = ({ email }) => {
    const dispatch = useDispatch();
    // Now Create Mail when we click any mail link
    let navigate = useNavigate();  // use navigate for moving one page to another

    const openMail = () => {
        navigate(`/mail/${email.id}`);
        dispatch(setSelectedEmail(email));
    }


    return (
        <motion.div
        initial = {{opacity:0 ,y :-20}}
        animate = {{opacity:1, y:0}}
        transition={{duration:0.5}}
         onClick={openMail} className='flex items-center  border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover: shadow-sm flex-nowrap'>
            <div className='flex items-center gap-2'>
                <div className='flex-none  text-gray-400'>
                    <MdCropSquare size={"20px"} className='w-5 h-8' />

                </div>
                <div className='flex-none  text-gray-400'>
                    <CiStar size={"20px"} className='w-5 h-6' />

                </div>
                <div className='flex-none  text-gray-400'>
                    <MdLabelImportantOutline size={"20px"} className='w-5 h-8' />

                </div>
                <div className='font-semibold'>
                    {email?.to}
                </div>
            </div>

            <div className='flex-1 justify-start content-center ml-6 overflow-y-auto   '>
                <p className=' text-gray-600 truncate '>
                    {email?.message}
                  
                </p>
            </div>
            <div className='flex-none text-gray-400 text-sm '>
                <p>
 
                       {new Date(email?.createdAt?.seconds * 1000).toLocaleString()}
                    
                </p>
            </div>
        </motion.div>
    )
}

export default SingleMessage