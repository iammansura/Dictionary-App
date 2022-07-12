import React from 'react'
import Synonyms from './synonyms'

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definitions :</strong> {definition.definition}
              <br />
              <strong>Example :</strong>
              <em>{definition.example}</em>
              <br />
            </p>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        )
      })}
    </div>
  )
}
