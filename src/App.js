import React, { useState } from 'react'
import './App.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function App() {

const[addClass,setAddClass] = useState(false);     //this section is used to trigger the animation 
const handleClick = () => {
  if(!addClass)
  {
    setAddClass(true);
  }
  else{
    setAddClass(false);
  }
}

  return (
    <div>
    <div className={addClass ? "container sign-up-mode":"container "}>
      <div className="forms-container">
        <div className="signin-signup">

          <div className='SigninForm1'>
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              < PersonOutlineIcon className='iconsdiv'/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            < PasswordIcon className='iconsdiv'/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" defaultValue="Login" className="btn solid" />
          </form></div>

          <form action="#" className="sign-up-form signupbtn1">
            <button className='WhatsappLogin'>Login With <span><WhatsAppIcon className='Whatsappicon' /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whatsapp  </button>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
            < PersonOutlineIcon className='iconsdiv'/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            < EmailIcon className='iconsdiv'/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
            < PasswordIcon className='iconsdiv'/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" defaultValue="Sign up" />
          </form>

          </div>
      </div>
      
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <button className="btn transparent" id="sign-up-btn" onClick={handleClick}>
              Sign up
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <button className="btn transparent" id="sign-in-btn" onClick={handleClick}>
              Sign in
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}
