import React from 'react'
import './../styles/photos.css'
export default function Photos({ photos }) {
  if (photos && photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-2" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    alt="photos what you search"
                    className="img-fluid"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </section>
    )
  } else {
    return <div> photos are loading...</div>
  }
}
