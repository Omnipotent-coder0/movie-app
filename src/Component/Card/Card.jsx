import React from 'react'
import '../Card/Card.scss'

const url = "https://image.tmdb.org/t/p/w500/"

function Card({item}) {
  const path = `${url}${item.poster_path}`;
  return (
        <img className='card' src = {path} alt="movie poster" />
  )
}

export default Card