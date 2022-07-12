import React, { useState } from 'react'
import axios from 'axios'
import Reasults from './results'
import './../styles/dictionary.css'

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary(props) {
  let [value, setValue] = useState(props.keyWord)
  let [reasult, setReasult] = useState(null)
  let [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    setReasult(response.data[0])
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert(`Searching for ${value}`)
    search()
  }

  function updatevalue(event) {
    setValue(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word"
              onChangeCapture={updatevalue}
              className="search"
            />
            <input type="submit" value="Search" className="submit" />
          </form>
          <div className="hint mt-2 text-muted">
            suggested words : water, love, Heart, sunrise
          </div>
        </section>
        <Reasults reasult={reasult} />
      </div>
    )
  } else {
    load()
    return 'loading....'
  }
}
