import React from 'react';
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router';


const Nav = () => {

    const loaction = useLocation()
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img src={logo} className='  mr-2 h-8' alt="RentYard" />
                    <p className='text-blue-600 font-semibold text-xl'>RentYard</p>
                </div>

                <div>
                    {loaction.pathname === '/' ?
                        <button className="btn  mr-3"> Exit</button>
                        :
                        <button className="btn  mr-3"><Link to={'/'}>Save & Exit</Link></button>
                    }
                </div>



            </div>

        </div>


    );
};

export default Nav;