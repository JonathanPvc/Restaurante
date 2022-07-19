import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';

export const Dashboard = ({ children }) => {
  return (
    <>
        <div className='flex w-full bg-slate-50 h-screen'>

          <Sidebar />
          <div className='w-full p-5'>
            <div className='bg-orange-200 h-full rounded-3xl  h-full p-5'>
              {children}
            </div>

          </div>

        </div>

    </>
  )
}
