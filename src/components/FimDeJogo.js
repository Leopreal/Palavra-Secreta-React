import React from 'react'

import './FimDeJogo.css'

const FimDeJogo = ({reinicia}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <button onClick={reinicia}>Começar jogo</button>
    </div>
  )
}

export default FimDeJogo