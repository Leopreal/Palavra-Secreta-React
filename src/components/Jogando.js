import React from 'react'

import './Jogando.css'

const Jogando = ({verificaLetra}) => {
  return (
    <div>
        <h1>Jogando</h1>
        <button onClick={verificaLetra}>Começar jogo</button>
    </div>
  )
}

export default Jogando