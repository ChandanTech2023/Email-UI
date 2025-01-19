import React, { useState } from 'react'
import { FaPencilRuler } from 'react-icons/fa'

import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowDown, MdOutlineStarRate, MdOutlineWatchLater } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
import { BiAlarmSnooze } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { RiDraftLine } from "react-icons/ri";
import { TbSend2 } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';


// Create array of Object 
const SidebarItems = [
    {
        icon: <RiInboxFill size={'22px'} />,
        text: "Inbox"
    },
    {
        icon: <MdOutlineStarRate size={'20px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'20px'} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'20px'} />,
        text: "Send"
    },
    {
        icon: <MdOutlineDrafts size={'20px'} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'20px'} />,
        text: "More"
    },

]

function Sidebar() {
    // Create Local State variable for Popup Menu
    // const [open , setOpen] = useState(false);

    const dispatch = useDispatch();
 //Now we need to pass Sidebar data into SendMail component for Popup mail so here we use 'Redux' For state manage
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={()=> dispatch(setOpen(true))}
                 className='flex items-center gap-2 p-3 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>
                    <LuPencil size={'22px'} />
                    Compose
                </button>

            </div>
            <div className='text-gray-500'>

                {
                    SidebarItems.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-3 pl-7 pr-8 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                                {/* <RiInboxFill size={'20px'} /> */}
                                <button key={index}>
                                {item.icon}
                                <p> {item.text}</p>
                                </button>
                            </div>

                        )
                    })

                }

                {/* <div className='flex  items-center gap-3 pl-7 pr-8 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                    <MdOutlineStarRate size={'20px'} />
                    <p>Stareed </p> 
                </div>
                <div className='flex  items-center gap-3 pl-7 pr-8 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                    <BiAlarmSnooze size={'20px'} />
                    <p>Snooze</p>
                </div>
                <div className='flex  items-center gap-3 pl-7 pr-8 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                    <IoMdSend size={'20px'} />
                    <p>Send </p>
                </div> */}


            </div>

        </div>
    )
}

export default Sidebar