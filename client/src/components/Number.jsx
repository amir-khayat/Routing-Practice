import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { num } = useParams();
  return (
    <div>
        <h1>Number</h1>
        <h2>The number is: {num}</h2>
    </div>
  )
}

export default Number