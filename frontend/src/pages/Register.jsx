import { useState } from 'react'
import React from 'react'

export default function Register() {
  const [activeTab, setActiveTab] = useState("user")

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#C6EFF1]">
            <div className="bg-white rounded-lg shadow-xl p-8 lg:w-1/3 md:w-96 sm:w-full">
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => setActiveTab("user")}
                        className={`py-2 px-4 text-sm rounded-lg focus:outline-none w-1/2 ${activeTab==="user" ? "bg-blue-500 text-white" : "bg-white text-black"} transition-colors duration-300 ease-in-out`}
                    >
                        User
                    </button>
                    <button
                        onClick={() => setActiveTab("organization")}
                        className={`py-2 px-4 text-sm rounded-lg focus:outline-none w-1/2 ${activeTab==="organization" ? "bg-blue-500 text-white" : "bg-white text-black"} transition-colors duration-300 ease-in-out`}
                    >
                        Organization
                    </button>
                </div>
                {activeTab === "organization" ? (
                <div>
                    <form action="">
                        <label htmlFor="name">Organization Name</label>
                        <br/>
                        <input className='w-full mb-5' type="text" name="name" id="name" required />
                        <br/>
                        <label htmlFor="email">Organization Email</label>
                        <br/>
                        <input className='w-full mb-5' type="email" name="email" id="email" required />
                        <br/>
                        <label htmlFor="url">Organization Website</label>
                        <br/>
                        <input className='w-full mb-5' type="url" name="url" id="url" required />
                        <br/>
                        <label htmlFor="password">Enter password</label>
                        <br/>
                        <input className='w-full mb-5' type="password" name="password" id="password" required />
                        <br/>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <br/>
                        <input className='w-full mb-5' type="password" name="confirmPassword" id="confirmPassword" required />
                        <br/>
                        <div className='w-full text-center'>
                            <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                Sign up as Organization
                            </button>
                        </div>
                    </form>
                </div>
                ) : (
                <div>
                    <form action="">
                        <label htmlFor="name">Enter name</label>
                        <br/>
                        <input className='w-full mb-5' type="text" name="name" id="name" required />
                        <br/>
                        <label htmlFor="email">Enter email</label>
                        <br/>
                        <input className='w-full mb-5' type="email" name="email" id="email" required />
                        <br/>
                        <label htmlFor="phone">Enter Phone</label>
                        <br/>
                        <input className='w-full mb-5' type="tel" name="phone" id="phone" required />
                        <br/>
                        <label htmlFor="password">Enter password</label>
                        <br/>
                        <input className='w-full mb-5' type="password" name="password" id="password" required />
                        <br/>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <br/>
                        <input className='w-full mb-5' type="password" name="confirmPassword" id="confirmPassword" required />
                        <br/>
                        <div className='w-full text-center'>
                            <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                Sign up as User
                            </button>
                        </div>
                    </form>
                </div>
                )}
            </div>
        </div>
    )
}
