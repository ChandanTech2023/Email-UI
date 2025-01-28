import React from 'react'
import { IoMdArrowBack, IoMdCloudOutline, IoMdMore } from 'react-icons/io'
import { BiArchiveIn } from "react-icons/bi"
import { RiSpam2Line } from "react-icons/ri";
import { MdArrowLeft, MdArrowRight, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineWatchLater, MdStar } from "react-icons/md";
import { FaRegSmile } from 'react-icons/fa';
import { PiArrowArcLeft } from "react-icons/pi";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function Mail() {
  const navigate = useNavigate();
  const selectedEmail = useSelector(store => store.appSlice.selectedEmail);
  const params = useParams(); // Fetch email ID 
  console.log(params);
  

  // Function for Delete message
  const deletmailById = async(id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div onClick={() => navigate("/")}
            className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdArrowBack />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BiArchiveIn />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <RiSpam2Line />
          </div>
          <div onClick={() => deletmailById(params.id)}
            className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
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
            <h2 className='text-xl font-medium '>{selectedEmail?.subject}  </h2>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>

          <div className='flex  items-center justify-between gap-3 px-3  text-gray-400 my-5 text-sm cursor-pointer '>
            <p>{new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
            <MdStar />
            <FaRegSmile />
            <PiArrowArcLeft />
            <IoMdMore />
          </div>
        </div>
        <div className='flex-none my-5 text-sm text-gray-500'>
          <div className='flex items-center justify-start'>
            <span className='text-black font-serif '>Name </span>
            <a className='cursor-pointer '> &lt; {selectedEmail?.to}  &gt; </a>
          </div>
          <span className='cursor-pointer text-sm'>to me </span>


          <div className='my-9 '>
            <p>{selectedEmail?.message} </p>
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
    </div>
  )
}

export default Mail