import React from 'react'
import "../App.css"

export default function Button(props) {
  return (
    <div className="BtnContainerWaitlist">
              <button
                type="button"
                onClick={props.functionName}
                className="BtnWaitlist"
              >
                {props.title}
              </button>
            </div>
  )
}