import React from 'react'
import "./css/Form.css";
const Form = () => {
  return (
    <div className='form'>
      <h1 className='ml-5'>Generate Certificate</h1>
      <div className='main-container'>
        <div className='card'>
        <h3>NAME OF USER</h3>
        <input type='text' placeholder='Name'></input>
        </div>
        <div className='card'>
        <h3>MESSAGE TO BE<br></br>DISPLAYED</h3>
        <input type='text' placeholder='Enter message'></input>
        </div>
        <div className='card'>
        <h3>DATE OF <br></br> CERTIFICATION</h3>
        <input type='text' placeholder='Date in DD.MM.YYYY'></input>
        </div>
        <div className='card'>
        <h3>USER'S WALLET <br></br> ADDRESS</h3>
        <input type='text' placeholder='eg- 0xfe2rkefgjwfioprj'></input>
        </div>
        <div className='card'>
        <h3>CREDENTIAL OF<br></br> SIGNATURE</h3>
        <input type='text' placeholder='Credential'></input>
        </div>
        <div className='card'>
        <h3>UPLOAD  SIGNATURE</h3>
        <button type="button" className="btnS">Upload</button>
        </div>
        <div className='card'>
        <h3>UPLOAD LOGO</h3>
        <button type="button" className="btnS">Upload</button>      
        <button type="button" className="btnS2">Issue Certifiate</button>
        </div>
      </div>
    </div>
  )
}

export default Form
