import React from 'react'

import './FimDeJogo.css'

const FimDeJogo = ({reinicia, pontuacao}) => {
  return (
    <div>
        <h1>Fim de Jogo</h1>
        <h2>
          Sua pontuação foi <span>{pontuacao}</span>
        </h2>
        <button onClick={reinicia}>Recomeçar Jogo</button>

    </div>
  )
}

export default FimDeJogo