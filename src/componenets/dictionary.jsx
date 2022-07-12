import React, { useState } from 'react'
import axios from 'axios'
import Reasults from './results'
import './../styles/dictionary.css'

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary() {
  let [value, setValue] = useState(' ')
  let [reasult, setReasult] = useState(null)

  function handleResponse(response) {
    setReasult(response.data[0])
  }

  function searchForm(event) {
    event.preventDefault()
    alert(`Searching for ${value}`)

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    axios.get(apiUrl).then(handleResponse)
  }

  function updatevalue(event) {
    setValue(event.target.value)
  }

  return (
    <div className="dictionary">
      <form onSubmit={searchForm}>
        <input
          type="search"
          placeholder="Type a word"
          onChangeCapture={updatevalue}
        />
        <input type="submit" value="Search" />
      </form>
      <Reasults reasult={reasult} />
    </div>
  )
}
