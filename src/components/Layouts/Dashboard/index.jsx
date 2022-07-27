import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import './style.scss';

export const Dashboard = ({ children }) => {
  return (
    <>
        <div className='div-back flex w-full  h-screen'>

          <Sidebar />
          <div className='w-full p-5'>
            <div className='childrenClass h-full rounded-3xl p-5'>
              {children}
              
            </div>

          </div>

        </div>

    </>
  )
}
