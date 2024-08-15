
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

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([])
  const [letrasErradas, setLetrasErradas] = useState([])
  const [tentativas, setTentativas] = useState(3)
  const [pontuacao, setPontuacao] = useState(0)



  const selecionaPalavraECategoria = useCallback(() => {
    const categorias = Object.keys(palavras)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)] // pegando cada categoria e passando uma categoria aleatoria pega do array "categorias"


    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)]

    
  

    return {palavra, categoria}
  }, [palavras])


  // funcao que comeca o jogo
  const comecarJogo = useCallback(() => {
    limpandoLetras()

    // funcao para categoria e palavra selecionad
    const {palavra, categoria} = selecionaPalavraECategoria()

    let LetrasDasPalavras = palavra.split("")
    LetrasDasPalavras = LetrasDasPalavras.map((letra) => letra.toLowerCase())

    // estados
    setPalavraSelecionada(palavra)
    setCategoriaSelecionada(categoria)
    setLetras(LetrasDasPalavras)

    setEstagioJogo(estagios[1].nome)
  }, [selecionaPalavraECategoria])

  // funcao de processar a letra
  const verificaLetra = (letra) => {
    const letrasNormalizadas = letra.toLowerCase()

    // checando se a letra ja foi utilizada

    if(letrasAdivinhadas.includes(letrasNormalizadas) || letrasErradas.includes(letrasNormalizadas)){
      return
    } 
    if(letras.includes(letrasNormalizadas)) {
      setLetrasAdivinhadas((atualLetraAdivinhada) => [
        ...atualLetraAdivinhada,
        letrasNormalizadas,
      ])
    } else {
      setLetrasErradas((atualLetraserradas) => [
        ...atualLetraserradas,
        letrasNormalizadas,
      ])

      setTentativas((atualTentativa) => atualTentativa - 1)
    }


  }

  const limpandoLetras = () => {
    setLetrasAdivinhadas([])
    setLetrasErradas([])
    
  }

  useEffect(() => {
    if(tentativas <= 0){
      limpandoLetras()

      setEstagioJogo(estagios[2].nome)
    }


  }, [tentativas])

  // checando a condicao de vitoria
  useEffect(() => {
    const letrasUnicas = [...new Set(letras)]

   if(letrasAdivinhadas.length === letrasUnicas.length){
    setPontuacao((atualPontuacao) => (atualPontuacao += 100))

    comecarJogo()
   }


  }, [letrasAdivinhadas, letras, comecarJogo])


  // funcao reiniciar jogo
  const reinicia = () => {
    setPontuacao()
    setTentativas(3)

    setEstagioJogo(estagios[0].nome)
  }

  return (
    <div className="App">
      {estagioJogo === 'comeco' && <TelaInicial comecarJogo={comecarJogo} />}
      {estagioJogo === 'jogando' && 
      <Jogando 
      verificaLetra={verificaLetra} 
      PalavraSelecionada={PalavraSelecionada} 
      CategoriaSelecionada={CategoriaSelecionada} 
      letras={letras} 
      letrasAdivinhadas={letrasAdivinhadas} 
      letrasErradas={letrasErradas} 
      tentativas={tentativas} 
      pontuacao={pontuacao} 
      />}
      {estagioJogo === 'fim' && <FimDeJogo reinicia={reinicia} pontuacao={pontuacao} />}
    </div>
  );
}


export default App;
