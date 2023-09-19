import React from 'react';
import { BiScan } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { BsFillKeyFill } from "react-icons/bs";
import { IconContext } from 'react-icons';


export default function Cards() {
  return (
    <div className='w-96vw overflow-hidden'>
        <IconContext.Provider value={{ size: "2.2em" }}>
        <div class="w-11/12 my-0 mx-auto grid grid-cols-3 items-center gap-x-20 h-full mt-8 p-12">
            <div>
                <BiScan/>
                <h1 className='font-bold text-3xl pt-3'>Verification</h1>
                <p className='text-lg pt-3' >Verify your identity with a simple scan of the ID card or passport.</p><br />
            </div>
            <div>
                <AiOutlineSafetyCertificate/>
                <h1 className='font-bold text-3xl pt-3'>Safe n Secure</h1>
                <p className='text-lg pt-3' >Your data is safe with us. We use the latest encryption technology to protect your data.</p><br />
            </div>
            <div>
                <BsFillKeyFill/>
                <h1 className='font-bold text-3xl pt-3'>Privacy</h1>
                <p className='text-lg pt-3' >We do not share your data with anyone without your consent.</p><br />
            </div>
        </div>
        </IconContext.Provider>
    </div>
  )
}
