import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
         <div className='flex col-span-1 cursor-pointer'>
            <img className='h-14 p-2'
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
             alt="menu" />

             <img className='h-14 bg-transparent'
             src="https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png" 
             alt="youtube-logo" />
             <h1 className='font-bold py-3 text-2xl'>YouTube</h1>
         </div>

         <div className='col-span-10 py-4 px-14 text-center'>
            <input type="text" placeholder='Search' className='w-1/2 bg-gray-100 p-2 rounded-l-full border ' />
            <button className='bg-gray-100 rounded-r-full px-4 py-2 border'>🔎</button>
         </div>

         <div className='col-span-1 flex py-2'>
            <img 
            className='h-10 mx-4'
            src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg" alt="notification" />
            <img 
            className='h-10 ml-4'
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="user" />
         </div>
    </div>
  )
}

export default Header