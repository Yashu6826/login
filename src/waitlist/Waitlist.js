import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Button from "./button";
import VerificationField from "./VerificationFields";
import SelectFields from "./SelectFields";
import Add from '../plus.png'
import "../App.css";
import imagesvg from '../wave1.svg'
import stationary from '../stationary.gif'

export default function Waitlist() {
  const india = require("indian-states-cities-list"); // package used to get the names of all indian states
  const collegeList = require("./colleges"); // package containing the names of all the colleges where sellular is present

  const [state, setState] = useState(); // defines the state parameter
  const [city, setCity] = useState(); // defines the city parameter
  const [college, setCollege] = useState(); // defines the college parameter

  const [isVisible, setVisible] = useState(false); // sets the visibility of the Add sellular button
  const [verification, setVerification] = useState(false); // sets the visibility of the Verification fields
  const [verifyVisibility, setVerifyVisibility] = useState(true); // sets the visibility of the verify button
  const [addCollege, setAddCollege] = useState(false);


  useEffect(() => {
    setState(state);
    setCity(city);
    setCollege(college);
  }, [state, city, college]);

  // sets the value of state parameter

  const handleState = (e) => {
    if (e === null) {
      var state_name = document.getElementById("state");
      state_name.placeholder = "";
      setState(undefined);
      handleCity(null);
      handleCollege(null);
    } else {
      setState(e.name);
    }
  };

  // sets the value of city parameter

  const handleCity = (e) => {
    if (e === null) {
      var city_name = document.getElementById("city");
      city_name.placeholder = "";
      setCity(undefined);
      handleCollege(null);
    } else {
      setCity(e.value);
    }
  };

  // sets the value of college parameter

  const handleCollege = (e) => {
    if (e === null) {
      var college_name = document.getElementById("college");
      college_name.placeholder = "";
      setCollege(undefined);
    } else {
      setCollege(e.value);
    }
  };

  // function to maintain the wait list

  const collegeWaitlist = (e) => {
    if (city === undefined || city === null) {
      swal({
        title: "Select a city first!",
        icon: "warning",
      });
    } else {
      swal({
        title:
          "Seems we're not yet associated with your college😥 Want Sellular in your College click on Add Sellular button",
        icon: "info",
        button: "Add",
      }).then((Add) => {
        setVisible(true); // making the add sellular to your college button visible
        setVerifyVisibility(false); // making the verify button invisible
        setAddCollege(true);  // Option to add sellular to our college
      });
    }
  };

  const handleVerifyClick = () => {
    if (college === undefined || college === null) {
      swal({ title: "Enter college name first!", icon: "warning" });
      return;
    }
    setVerifyVisibility(false); // making the verify button invisible
    setVerification(true); // making the verification fields visible
    
  };

  //  custom css for the select tag used from the package react-select

  const customStyles = {
    control: (styles) => ({
      ...styles,
      fontWeight: "300",
      fontSize: "medium",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      backgroundColor: "#fff",
      
    }),
    option: (styles,{  isFocused}) => ({
      ...styles,
      color: "black",
      fontSize: "large",
      fontWeight: "300",
      backgroundColor:isFocused ? "lightgreen": null,
      //  font-family: "Arial, Helvetica, sans-serif"
      
    }),
   
  };

  return (
    <>
      <form className="form-inline1">
        <div className="main-fields-container-waitlist">
          <SelectFields
            className="state"
            id="state"
            optionsField={india.STATES_OBJECT}
            functionName={(e) => handleState(e)}
            placeholder="Bharat ke bhin bhin rajya"
            styles={customStyles}
            labelName="Enter State"
          />
          <SelectFields
            className="city"
            id="city"
            optionsField={india.STATE_WISE_CITIES[state]}
            functionName={(e) => handleCity(e)}
            messageName={(e) => "Select state first!"}
            placeholder="Kaun gaon se ho?"
            styles={customStyles}
            labelName="Enter City"
          />
          {verifyVisibility ?( <SelectFields
            className="college"
            id="college"
            optionsField={collegeList.colleges[city]}
            functionName={(e) => handleCollege(e)}
            messageName={(e) => collegeWaitlist()}
            placeholder="Ye lo khojo apna college "
            styles={customStyles}
            labelName="Enter College"
          />):( <>
            {addCollege && <input placeholder="Enter your college name" className="addCollege" />}
            </>
          )}
         

          {/*  conditional rendering of the add sellular button  */}

          {isVisible ? <Button title="Add sellular to your college" /> : ""}

          {/* conditional rendering of the verify button  */}

          {verifyVisibility ? (
            <Button title="Verify" functionName={handleVerifyClick} />
          ) : (
           ""
          )}
       <div className="image-holder">
        <img className="svgimage" src={imagesvg} alt="/" />
        <img className="image1" src={stationary} alt="/"/>
      </div> 
        </div>
      </form>
     

      {/* conditional rendering of the Verification fields        */}

      {verification ? <VerificationField /> : ""}
    </>
  );
}