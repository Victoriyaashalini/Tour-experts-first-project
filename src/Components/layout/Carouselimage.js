import React from 'react'

function Carouselimage({ imageUrl, text }) {
  return (
	<div>
      <img src={imageUrl} alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default Carouselimage;