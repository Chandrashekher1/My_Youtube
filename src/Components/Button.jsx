import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
        <button className='bg-gray-300 rounded-md px-2 py-1 m-2 mx-4'>{name}</button>
    </div>
  )
}

export default Button