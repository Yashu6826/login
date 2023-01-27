import React,{useState} from "react";
import Button from "./button"
import "../App.css"
import swal from "sweetalert";


export default function VerificationField() {
  
  const [user, setUser] = useState({
    id: "",
    email: ""
  });
 
  
  const handleSubmit = () => {
      if (
        (user.id === "") ||
        (user.email === "") 
      ) 
      {
        swal({
          title: "All fields are required",
          icon: "warning",
        });

        return;
      }
      else
      {
        swal({
          title: "Thank you for uploading your detail we will verify you detail in 24 hours!",
          icon: "success",
        });
      }
  }


  return (
    <div className="mainVerificationContainer" >
      <div className="verificationFieldContainer">
        <label htmlFor="email"> Enter college email</label>
        <input type="email" name="emailid" value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}/>
      </div>
      <div className="verificationFieldContainer">
        <label htmlFor="email"> Enter college id</label>
        <input type="text" src="#" alt="submit" value={user.id}
            onChange={(e) => setUser({ ...user, id: e.target.value })}/>
      </div>
      <Button title="Submit" functionName={handleSubmit} />
    </div>
  );
}