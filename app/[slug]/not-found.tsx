import React from 'react'
import notfoundImage from '../../public/not-found.jpg';
import Image from 'next/image';
const StoreNotFound = () => {
  return (
    <div className='w-screen min-h-screen flex items-center '>
            <div className='max-w-lg relative'>
                <div className='relative'>
                    <Image className='w-full h-auto' src={notfoundImage} alt="Store Not Found" width={500} height={500} placeholder='blur' />
                </div>
                <div className="tex-center mt-10">
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-500'>Store Not Found</h1>
                </div>
            </div>
        </div>
  )
}

export default StoreNotFound