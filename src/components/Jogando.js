import React, { useState, useRef } from 'react'

import './Jogando.css'

const Jogando = (
  {verificaLetra, 
  PalavraSelecionada, 
  CategoriaSelecionada, 
  letras, 
  letrasAdivinhadas, 
  letrasErradas, 
  tentativas, 
  pontuacao}) => {

    const [letra, setLetras] = useState("")

    const RefAtualLetra = useRef(null)

    const handleSubmit = (e) => {
      e.preventDefault()

      verificaLetra(letra)

      setLetras("")

      RefAtualLetra.current.focus() // funcao para que ao usuario mandar a letra ele volte ao bloco de texto automaticamente
    }

  return (
    <div className='game'>
      <p className='pontos'>
        <span>Pontuação {pontuacao}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='dica'>
        Dica sobre a palavra <span>{CategoriaSelecionada}</span>
      </h3>
      <p>vc ainda tem {tentativas} tentativas</p>
      <div className="containerPalavras">
        {letras.map((letra, i) => (
          letrasAdivinhadas.includes(letra) ? (
            <span key={i} className='letra'>{letra}</span>
          ) : (
            <span key={i} className='quadradoBranco'></span>
          )
        ))}
      </div>
        <div className="letraContainer">
          <p>tente adivinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="letra" 
            maxLength={1} 
            required 
            onChange={(e) => setLetras(e.target.value)}
            value={letra}
            ref={RefAtualLetra}
            />
            <button>Jogar!</button>
          </form>
          <div className="letrasErradas">
              <p>Letras erradas: </p>
              {letrasErradas.map((letra, i) => (
                <span key={i}>{letra}</span>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Jogando