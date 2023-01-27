import React from 'react'
import "./Ashmit.css"
import Select, { components } from "react-select";

export default function Ashmit() {
  return (
    <div className='login-box'>

      <form className="form-inline">
         
        <div className='labeller'>
            <label>Enter state:</label>
            <Select
              className="inputfield"
              id="state"
              isClearable={true}
              placeholder={"Bharat ke bhin bhin pradesh"}
            />
        </div>

        <div className='labeller'>
            <label>Enter city:</label>
            <Select
              className="inputfield"
              id="city"
              isClearable={true}
              placeholder={"Kaun gao ke ho?"}
            />
        </div>

        <div className='labeller'>
            <label>Enter college:</label>
            <Select
              className="inputfield"
              id="college"
              isClearable={true}
              placeholder={"Ye lo lelo college apna"}
            />
        </div> 

     </form>
    </div>
  )
}
