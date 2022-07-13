import React from 'react'
import './../styles/meaning.css'
import Synonyms from './synonyms'

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <span className="definition">Definitions :</span>{' '}
              {definition.definition}
              <br />
              <span className="example">
                <em>{definition.example}</em>
              </span>
              <br />
            </div>

            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        )
      })}
    </div>
  )
}
