import React, { useState } from 'react'
import OtpInput from './OtpInput'
const PhoneOtpLogin = () => {
    const[phoneNumber,setPhoneNumber]=useState("")
    const[showOtpInput,setShowOtpInput]=useState(false)
    const handlePhoneNumber = (event)=>{
        setPhoneNumber(event.target.value)
    }
    const handlePhoneSubmit = (evt)=>{
        evt.preventDefault();

        //phone validations
        const regex = /[^0-9]/g; //form of validation
        if(phoneNumber.length<10 || regex.test(phoneNumber) ){
            alert("invalid number");
            return 
        }
        //call api
        //show otp
        setShowOtpInput(true)
    }
    const onOtpSubmit=(otp)=>{
        console.log(otp,"login successful")
    }
  return (
    <div>
     {!showOtpInput? <form action="" onSubmit={handlePhoneSubmit}>
        <input type="text" 
        value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='enter phone number'
        />
        <button type='submit'>Submit</button>
      </form>:<div>
        <p>OTP field shown : {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>}
    </div>
  )
}

export default PhoneOtpLogin
