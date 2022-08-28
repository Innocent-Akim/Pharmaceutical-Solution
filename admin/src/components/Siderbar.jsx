import React, { useState } from 'react';
import {AiOutlineDashboard} from 'react-icons/ai';
// import { SiShopware } from "react-icons/si";

function Siderbar() {
    const styleCount="flex m-4 bg-white h-10 mx-2 my-2 items-center rounded cursor-pointer gap-3 ";
    return (
        <div className="fixed  h-screen w-72 shadow-md top-0 left-0 m-0 flex flex-col bg-blue-900">
         
        



            <div className={`${styleCount}`}>
                <AiOutlineDashboard className='text-blue-900 ml-5'/>
                <span className='text-black text-center text-12 font-normal'>Dashboard</span>
            </div>
            <div className={`${styleCount}`}>
            <AiOutlineDashboard className='text-blue-900 ml-5'/>
                <span className='text-black text-center text-12 font-normal'>Cours</span>
            </div>
            <div className={`${styleCount}`}>
            <AiOutlineDashboard className='text-blue-900 ml-5'/>
                <span className='text-black text-center text-12 font-normal'>Participant</span>
            </div>
            <div className={`${styleCount}`}>
            <AiOutlineDashboard className='text-blue-900 ml-5'/>
                <span className='text-black text-center text-12 font-normal'>Parametre</span>
            </div>
        </div>
    )
}

export default Siderbar;