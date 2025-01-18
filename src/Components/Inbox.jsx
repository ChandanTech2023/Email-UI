import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { GiOnTarget } from 'react-icons/gi'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { IconBase } from 'react-icons/lib'
import { MdInbox, MdOutlineForum } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa';
import { MdUpdate } from "react-icons/md";
// import { MdCropSquare } from 'react-icons/md'

const mailType = [
    {
        Icon:<MdInbox size={'20px'}/>,
        text:"Primary",
    },
    {
        Icon:<GiOnTarget size={'20px'}/>,
        text:"Promotions",
    },
    {
        Icon:<IoPeopleOutline size={'20px'}/>,
        text:"Socials",
    },
    {
        Icon:<MdUpdate size={'20px'}/>,
        text:"Updates",
    },
    {
        Icon:<MdOutlineForum size={'20px'}/>,
        text:"Forum",
    }
]

function Inbox() {
// Creating State variable for showing selected button
const [mailTypeSelected ,setMailTypeSelected] = useState(0);

    return (
        <div className='flex bg-white rounded-xl mx-5 min-w-[877px]'>
            <div className=' px-4 '>
                <div className='flex items-center gap-2 text-gray-600 py-2'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        {/* <MdCropSquare size ={"20px"}  /> */}
                        <input type="checkbox" />
                        <FaCaretDown size={'20px'} className='hover:border border-gray-500' />

                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdRefresh size={"20px"} />

                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer '>
                        <IoMdMore size={"20px"} />

                    </div>
                </div>
                <div className='h-[90vh] w-[80vw] overflow-y-auto '>
                    <div className='flex items-center gap-14 '>
                        {/* use javascript Map to show Items */}
                        {
                            mailType.map((item ,index)=>{
                                return(
                                    <button key={index}
                                    className={`${mailTypeSelected === index ? 'border-b-4 border-b-blue-500 text-blue-600' : 'border-b-4 border-b-transparent'}
                                     w-55 flex items-center gap-3 p-3 hover:bg-gray-200`}
                                     
                                     onClick={()=> setMailTypeSelected(index)}
                                      >
                                        {item.Icon}
                                        <span>{item.text}</span>
                                    </button>
                                )
                            })

                        }
                      
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inbox