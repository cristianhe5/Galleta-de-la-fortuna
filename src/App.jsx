
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'




function App() {

//aqui en este ESTADO se guarda informacion
//phraseRandom = getRandomFromArr(phrases) que seria el valor inicial
//
  const [phraseRandom, setPhraseRandom] = useState(getRandomFromArr(phrases))
  // useState(getRandomFromArr(phrases)) es una funcion que se le pasa otra funcion como parametro
  
  //getRandomFromArr(phrases) a nuestra funcion getRandomFromArr le estamos pasando phrases como parametro que seria el elemto que contine todas las frases

  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))
  

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.jpg')`
  }
  
  

  return (
    <div  style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>

        <Phrase 
        //esto es un componente renderisado

        //esto es una prop
        //el nombre el que yo quiera = valor : es el que esta dentro del Estado (phraseRandom) 
          phraseskey ={phraseRandom}
        />
        < ButtonPhrase      
          setPhraseRandom ={setPhraseRandom} 
          setBgApp={setBgApp}
        />    
      </article>
          


      
    </div>
  )
}

export default App
//las clase se ponen en el los componentes
