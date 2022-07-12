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
              <span className="definition">Definitions :</span>{' '}
              {definition.definition}
              <br />
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
