import React, { useState } from 'react'
import axios from 'axios'
import Reasults from './results'
import Photos from './photos'
import './../styles/dictionary.css'

//pixel apiKey:563492ad6f9170000100000159facf5aae79469e8b89b8ce518be7d2

//https://api.dictionaryapi.dev/api/v2/entries/en/hello

export default function Dictionary(props) {
  let [value, setValue] = useState(props.keyWord)
  let [reasult, setReasult] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState()

  function handleResponse(response) {
    setReasult(response.data[0])
  }
  function handlePexelResponse(response) {
    if (response.status === 200) {
      setPhotos(response.data.photos)
    } else {
      setPhotos([])
    }
    // setPhotos(response.data.photos)
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    axios.get(apiUrl).then(handleResponse)
    // here start photos api
    let pexelApiKey = '563492ad6f9170000100000159facf5aae79469e8b89b8ce518be7d2'
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${value}&per_page=6`
    let headers = { Authorization: `Bearer ${pexelApiKey}` }

    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
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
          <div>
            <h6>What word do you want to look up?</h6>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word...."
              onChangeCapture={updatevalue}
              className="search"
            />
            <input type="submit" value="Search" className="submit" />
          </form>
          <div className="hint mt-2 text-muted">
            i.e. Star, Moon, Galaxy, Universe
          </div>
        </section>
        <Reasults reasult={reasult} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
    return 'loading....'
  }
}
