import React from 'react'

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
          <form>
            <input type="text" name="letra" maxLength={1} required />
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