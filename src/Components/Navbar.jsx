import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSeacrhText, setUser } from '../redux/appSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function Navbar() {
    const [searchMail, setSearchMail] = useState("");
    const [toggle, setToogle] = useState(false)
    const dispatch = useDispatch();
    const {user} = useSelector(store => store.appSlice)

    const signOutHandler = ()=>{
        signOut(auth).then(()=>{
            dispatch(setUser(null))
        }).catch((error)=> console.log(error));
        
    }

    useEffect(() => {
        dispatch(setSeacrhText(searchMail));
        // dispatch(setToogle(toggle));

    }, [searchMail])
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
                <div className='flex items-center gap-2 bg-[#EAF1FB] px-3 py-2 rounded-full'>
                    <FaSearch size={'22px'} className='text-gray-600 ' />
                    <input
                        type="text"
                        //Taking Input email for search
                        value={searchMail}
                        onChange={(e) => setSearchMail(e.target.value)}
                        placeholder='Search email'
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
                    <div className='relative cursor-pointer'>
                        <Avatar onClick={()=>setToogle(!toggle)} src={user?.photoUrl} size='30px' round={true} />
                        <AnimatePresence>
                            {
                                toggle && (<motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.1 }}
                                    className='absolute right-1 z-20 bg-white shadow-lg rounded-md'
                                >
                                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>

                                </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Navbar