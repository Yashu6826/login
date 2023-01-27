import React from 'react'
import Select from "react-select";
import '../App.css'

export default function SelectFields(props) {
  return (
    <div className="college-field-container-waitlist">
    <label className="waitlistLabel" htmlFor="text">
      {props.labelName}
    </label>
    <Select
      className={props.className}
      id={props.id}
      options={props.optionsField}
      isClearable={true}
      onChange={props.functionName}
      noOptionsMessage={props.messageName}
      placeholder={props.placeholder}
      styles={props.styles}
    />
  </div>
  )
}
