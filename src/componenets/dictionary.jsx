import React, { useState } from 'react'
import './../styles/dictionary.css'

export default function Dictionary() {
  let [value, setValue] = useState(' ')

  function searchForm(event) {
    event.preventDefault()
    alert(`Searching for ${value}`)
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
      </form>
    </div>
  )
}
