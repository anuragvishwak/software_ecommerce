import React from 'react'
import Navbar from './Navbar'

function Products() {
  return (
    <div className='bg-gray-50 h-screen'>
        <Navbar/>
        <div className='mt-24 p-10'>
            <div className='bg-white shadow border rounded-lg p-3'>
                <input placeholder='Find Projects...' className='italic p-1 w-60 rounded-lg border  border-gray-300'></input>
            </div>
        </div>
    </div>
  )
}

export default Products