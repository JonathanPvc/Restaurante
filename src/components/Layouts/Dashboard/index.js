import React from 'react'
import NavBar from '../../NavBar/NavBar';
import Sidebar from '../../Sidebar';


export const Dashboard = ({ children }) => {
  return (
    <>
      <div className=' flex  h-full bg-slate-500 '>
        <div className='flex w-full bg-orange-400 rounded-3xl m-4 '>
          <Sidebar />
          <div className='w-full'>
            <div className='bg-orange-200 h-4/5 rounded-3xl m-6 h-screen'>
              {children}
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
