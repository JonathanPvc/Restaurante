import React from 'react'
import NavBar from '../../NavBar/NavBar';
import Sidebar from '../../Sidebar';


export const Dashboard = ({children}) => {
  return (
    <>
      <div className='flex h-full bg-orange-400 rounded-3xl '>
        <Sidebar />
        <div className='content w-full'>
          <div className='bg-orange-200  rounded-3xl m-4 '>
         {children}
          </div>

        </div>

      </div>

    </>
  )
}
