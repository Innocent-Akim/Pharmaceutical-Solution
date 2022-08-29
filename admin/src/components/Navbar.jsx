import React from 'react';
import {Avatar} from '@material-tailwind/react'

const Navbar = () => {
    return (
        <div className='relative flex justify-between p-2'>
        <div className='flex items-center justify-between p-2 border-b dark:border-primary-darker'>
            <div className='inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark text-light'>
                Deconnection
            </div>
        </div>
        </div>
    )
}

export default Navbar;
