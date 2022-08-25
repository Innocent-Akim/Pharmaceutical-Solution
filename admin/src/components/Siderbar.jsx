import React, { useState } from 'react'

function Siderbar() {

    return (
        <div className="fixed bg-white h-screen w-72 shadow-md top-0 left-0 m-0 flex flex-col">
            <div className="bg-black h-7 mx-2 my-2 items-center rounded">
                <i className=' text-white text-center text-12'>Dashboard</i>
            </div>
            <i>Cours</i>
            <i>Participants</i>
            <i>Paramatres</i>
        </div>
    )
}

export default Siderbar;