import React from 'react'
import NavBar from '../../NavBar/NavBar';
import Sidebar from '../../Sidebar';


export const Dashboard = ({children}) => {
  return (
    <>
      <NavBar />
      <div className='flex'>
        <Sidebar />
        <div className='content'>
         {children}

        </div>

      </div>

    </>
  )
}
