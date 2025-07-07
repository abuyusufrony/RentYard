import React from 'react';
import logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <img src={logo} className='  mr-2 h-8' alt="RentYard" />
                <p className='text-blue-600 font-semibold text-xl'>RentYard</p>
            </div>

            <div>
                <button className='btn mr-3 '>Exit  </button>
            </div>
        </div>
    );
};

export default Nav;