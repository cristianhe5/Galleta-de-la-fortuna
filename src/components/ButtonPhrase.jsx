//no olvidar importar siempre
import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'


//funcion que me permite cambiar el valor del estado
const ButtonPhrase = ({setPhraseRandom,setBgApp}) => {

    //es una funcion controladora
    const handleChangePhrase = () => {
        //a la funcion que esta en el js le pasamos el json para que escoja una frase randomly
        const quote = getRandomFromArr(phrases)
        

        //estamos cambiando el estado cada ves que hagamos un click psandole la funcion js que esta guardada en quote y se lo pasamos como parametro 
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))


    }
  return (
    //por cada click se va a ejecutar el handler el controlador
    <button className="app__btn"
     onClick={handleChangePhrase}>Your Fortune</button>
  )
}

export default ButtonPhrase