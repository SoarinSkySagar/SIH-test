import React from 'react'

export default function SelectType() {
  return (
    <div className='w-96vw overflow-hidden'>
        <div class="w-11/12 my-0 mx-auto grid grid-cols-2 items-center gap-x-20 h-full mt-8 p-12">
            <div className='rounded-3xl bg-white p-16 border-[3px] border-blue-700 shadow-lg shadow-blue-500'>
                <h1 className='text-5xl font-bold pb-40'>I'm a <br/> User</h1>
                <br/>
                <div className='text-center'>
                    <a href="/" class="bg-[#5967E8] font-semibold px-6 py-4 text-2xl rounded-full mx-auto">Get Started   <span>&#8594;</span></a>
                </div>
            </div>
            <div className='rounded-3xl bg-white p-16 border-[3px] border-blue-700 shadow-lg shadow-blue-500'>
                <h1 className='text-5xl font-bold pb-40'>I'm an <br/> Organisation</h1>
                <br/>
                <div className='text-center'>
                    <a href="/" class="bg-[#5967E8] font-semibold px-6 py-4 text-2xl rounded-full mx-auto">Get Started   <span>&#8594;</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}
