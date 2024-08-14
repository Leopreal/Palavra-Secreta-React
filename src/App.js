
import './App.css';

// componentes
import TelaInicial from './components/TelaInicial';
import Jogando from './components/Jogando';
import FimDeJogo from './components/FimDeJogo';

// hooks
import {useCallback, useEffect, useState} from "react"


import {ListaPalavras} from './data/palavras'


const estagios = [
  {id: 1, nome: 'comeco'},
  {id: 2, nome: 'jogando'},
  {id: 3, nome: 'fim'}
]


function App() {
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome)

  const [palavras] = useState(ListaPalavras)

  const [PalavraSelecionada, setPalavraSelecionada] = useState("")
  const [CategoriaSelecionada, setCategoriaSelecionada] = useState("")
  const [letras, setLetras] = useState([])


  const selecionaPalavraECategoria = () => {
    const categorias = Object.keys(palavras)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)] // pegando cada categoria e passando uma categoria aleatoria pega do array "categorias"

    console.log(categoria)

    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)]

    console.log(palavra)

    return {palavra, categoria}
  }


  // funcao que comeca o jogo
  const comecarJogo = () => {
    // funcao para categoria e palavra selecionad
    const {palavra, categoria} = selecionaPalavraECategoria()

    let LetrasDasPalavras = palavra.split("")
    LetrasDasPalavras = LetrasDasPalavras.map((letra) => letra.toLowerCase())

    console.log(palavra, categoria)
    console.log(LetrasDasPalavras)

    // estados
    setPalavraSelecionada(palavra)
    setCategoriaSelecionada(categoria)
    setLetras(letras)

    setEstagioJogo(estagios[1].nome)
  }

  // funcao de processar a letra
  const verificaLetra = () => {
    setEstagioJogo(estagios[2].nome)
  }

  // funcao reiniciar jogo
  const reinicia = () => {
    setEstagioJogo(estagios[0].nome)
  }

  return (
    <div className="App">
      {estagioJogo === 'comeco' && <TelaInicial comecarJogo={comecarJogo} />}
      {estagioJogo === 'jogando' && <Jogando verificaLetra={verificaLetra} />}
      {estagioJogo === 'fim' && <FimDeJogo reinicia={reinicia} />}
    </div>
  );
}
console.log("teste")

export default App;
