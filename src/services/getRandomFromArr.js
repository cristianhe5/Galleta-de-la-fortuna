// no es un componente por que no empieza en mayuscula y no retorna un jsx

const getRandomFromArr = arr => {

    //Math.rambom = una funcionalidad que nos da un resultado random entre 0 y 1 concidera el cero pero no el 1
    //arr.length es el largo de elemntos de en el arreglo | obj
    // forma de calcular un indice aleatoriamente si tenemos un una cantidad que no sabemos  
   const indexRandom = Math.floor(Math.random() * arr.length)  
   
   // que nos devuelva el arr[indexRandom]=== ya que indexRandom nos esta guardando la funcion o la operacion que nos dara la aleatoridad
   return arr[indexRandom]

}
export default getRandomFromArr