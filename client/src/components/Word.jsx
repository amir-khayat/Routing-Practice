import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    const { word, textcolor, backcolor } = useParams();
  return (
    <div>
        <h1>Color</h1>
        <h2 style={{background: backcolor, color: textcolor}}>The word is: {word}</h2>
    </div>
  )
}

export default Word