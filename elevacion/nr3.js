//CODIGO DADO
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//LUEGO DE ELEVACION
/**
 *  var brendan; //declaracion global se eleva
 *  function print(){ //declaracion de funcion se eleva
 *      //en este ejemplo esta funcion nunca es llamada por lo que no se ejecuta pero de todas formas se analiza
 *      brendan = 'only okay';  //se le asigna sin problemas el valor a brendan ya que es una variable global si es que se llama a la funcion
 *      console.log(brendan);   //imprimiria only okay si la funcion print se llama
 *  }
 *  brendan = 'super cool'; //se le asigna un valor a brendan de forma global
 *  console.log(brendan); //imprime super cool
 */

//CON ES6
/**
 *  let brendan;
 *  function print(){
 *      //en este ejemplo esta funcion nunca es llamada por lo que no se ejecuta pero de todas formas se analiza
 *      brendan = 'only okay'; //se le asignaria el valor only okay hasta fuera de la funcion ya que print esta en el mismo bloque que el let de afuera
 *      console.log(brendan);
 *  }
 *  brendan = 'super cool';
 *  console.log(brendan);
 */