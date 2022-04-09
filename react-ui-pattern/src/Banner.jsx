import React from 'react'
import './banner.css'

export default function banner({movie}) {
  return (
    <div className="banner" key={movie.id}>
      <img src={movie.image} alt={movie.title} />
    </div>
  )
}
