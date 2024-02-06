import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
const OtpInput = ({length=4,onOtpSubmit}) => {

    const[otp,setOtp]=useState(new Array(length).fill(""))
    const InputRefs = useRef([]) // take the reference of each input
    useEffect(()=>{
        if(InputRefs.current[0]){
            InputRefs.current[0].focus();
        }
    },[])

    const handleChange=(idx,e)=>{
        const value = e.target.value
        const newOtp = [...otp];
        newOtp[idx] = value.substring(value.length-1);
        setOtp(newOtp)

        const combinedOtp = newOtp.join("")
        if(combinedOtp.length===length) onOtpSubmit(combinedOtp);
        //to change focus when number is entered
        if(value && idx<length-1 && InputRefs.current[idx+1]){
        
            InputRefs.current[idx+1].focus();
        }
        
    }
    const handleClick=(idx)=>{
        InputRefs.current[idx].setSelectionRange(1,1)
        //to make cursor at the end of the input
        if(idx>0 && !otp[idx-1] ){
            InputRefs.current[otp.indexOf("")].focus();
        }
    }
    const handleKeyDown=(idx,e)=>{
        //focus the previous input when backspace is pressed
        if(!otp[idx] && e.key=="Backspace" && idx >0 && InputRefs.current[idx-1]){
            InputRefs.current[idx-1].focus();
        }
    }
  return (
    <div >
     {
        otp.map((value,idx)=>{
            return <input key={idx} type="text" value={value}
            ref={(input)=>InputRefs.current[idx]=input}
            onChange={(e)=>handleChange(idx,e)}
            onClick={()=>handleClick(idx)}
            onKeyDown={(e)=>handleKeyDown(idx,e)}
            className='otpInput'
            />
        })
     }
    </div>
  )
}

export default OtpInput
