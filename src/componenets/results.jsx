import React from 'react'
import Meaning from './meaning'
import Phonetic from './phonetic'

export default function Reasults(props) {
  if (props.reasult) {
    return (
      <div className="reasults">
        <h2>{props.reasult.word}</h2>
        {props.reasult.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          )
        })}
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
