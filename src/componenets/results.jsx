import React from 'react'
import Meaning from './meaning'
export default function Reasults(props) {
  console.log(props.reasult)
  if (props.reasult) {
    return (
      <div className="reasults">
        <h2>{props.reasult.word}</h2>
        {props.reasult.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}
