import React from 'react'
import './../styles/synonym.css'

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>
          })}
        </ul>
      </div>
    )
  } else {
    return null
  }
}
