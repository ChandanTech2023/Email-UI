import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdMinimize, MdOutlineCloseFullscreen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { FaCaretDown } from 'react-icons/fa';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMail = () => {
  // Getting Mail data for sending Email
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: ""
  })
  const changeHendler = (event) => {
    // initial form data fill using spread operator then assign value 
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // Send email data into Firebase database 
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    await addDoc(collection(db, 'emails'), {
      to: formData.to, subject: formData.subject,
      message: formData.message,
      createdAtTime: serverTimestamp(), //Record created email time stemp
    })
    // Now close our Mode 
    dispatch(setOpen(false));
    setFormData({
      to: "",
      subject: "",
      message: ""

    })
  }

  // const open = false;
  const open = useSelector(store => store.appSlice.open); // We use useSelector for taking open variable access 
  const dispatch = useDispatch();

  return (
    <div className={`${open ? 'block' : 'hidden'}  bg-white max-w-5xl shadow-xl shadow-slate-500 rounded-t-md`}>
      <div className='flex p-2 bg-[#F2F6Fc] justify-between rounded-t-md'>
        <h1>New Message </h1>
        <div className='p-2 rounded-full cursor-pointer flex items-center justify-center gap-3'>
          <MdMinimize size={"10px"} />
          <MdOutlineCloseFullscreen size={"10px"} />
          <RxCross2 size={"10px"} onClick={() => dispatch(setOpen(false))} className='hover:border hover:bg-gray-400 rounder ' />

        </div>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input onChange={changeHendler} value={formData.to} name='to'
          type="text" placeholder='To' className=' outline-none py-2' />
        <input onChange={changeHendler} value={formData.subject} name='subject'
          type="text" placeholder='Subject' className=' outline-none py-2' />
        <textarea onChange={changeHendler} value={formData.message}
          name="message" cols={"30"} rows={"10"} className='outline-none py-2'></textarea>
        <div className='rounded-r-3xl'>
          <button type='submit'
            className='rounded-full w-fit px-4 text-white font-medium bg-[#0B57D0] flex items-center gap-1'>Send
            <FaCaretDown /></button>
        </div>

      </form>


    </div>
  )
}

export default SendMail