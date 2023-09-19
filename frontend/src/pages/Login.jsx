import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C6EFF1]">
        <div className="bg-white rounded-lg shadow-xl p-8 lg:w-1/3 md:w-96 sm:w-full">
            <div className='text-center text-3xl font-bold pb-8'>
                Log In
            </div>
            <div>
                <form action="">
                    <label htmlFor="email">Enter Registered Email/Phone</label>
                    <br/>
                    <input className='w-full mb-5' type="text" name="email" id="email" required />
                    <br/>
                    <label htmlFor="password">Enter password</label>
                    <br/>
                    <input className='w-full mb-5' type="password" name="password" id="password" required />
                    <br/>
                    <div className='w-full text-center'>
                        <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
