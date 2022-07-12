import React from 'react'
import Meaning from './meaning'
import Phonetic from './phonetic'

export default function Reasults(props) {
  if (props.reasult) {
    return (
      <div className="reasults">
        <section>
          <h2 className="word">{props.reasult.word}</h2>
          {props.reasult.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            )
          })}
        </section>
        {props.reasult.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}
