
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full flex justify-center items-center flex-col h-screen'> 
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <p className='text-6xl text-center'> FRONT END CHALENGES </p>
        <p className='text-2xl text-gray-500'>omar-opt</p>
      </div>
      <div className='w-full flex justify-center items-center flex-col gap-2 mt-10'>
        <p className='text-3xl text-white'>This is a collection of front end challenges</p>
        <p className='text-3xl text-white'>that I have completed</p>
        <p className='text-3xl text-white'>using React and Next.js and other libraries and frameworks</p>
        <p className='text-3xl text-white'></p>
        <p className='text-3xl text-white'></p>
        </div>
      <div className='w-full flex justify-center items-center flex-col mt-10'>
        <Link href='/challenges' className='p-4 rounded-xl '></Link>
        <Link href='/challenges' className='p-4 rounded-xl '></Link>
        <Link href='/challenges' className='p-4 rounded-xl '></Link>
        <Link href='/challenges' className='p-4 rounded-xl '></Link>
  
      </div>
    </div>
  )
}

export default page