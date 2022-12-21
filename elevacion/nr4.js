//CODIGO DADO
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//LUEGO DE ELEVACION
/**
 *  var food;   //declaracion se eleva
 *  function eat(){     //declaracion de funcion se eleva
 *      var food;   //declaracion se eleva
 *      food = 'half-chicken';  //posicion de asignacion inicial se mantiene
 *      console.log(food);  //imprime half-chicken
 *      food = 'gone';  //posicion de asignacion final se mantiene
 *  }
 *  food = 'chicken';   //posicion de asignacion se mantiene luego de las respectivas elevaciones de declaraciones
 *  console.log(food);  //imprime chicken
 *  eat();  //llamada a la funcion de antes se hace al final
 * 
 *  orden de impresion:
 *  chicken
 *  half-chicken
 */

//CON ES6
/**
 *  let food;
 *  function eat(){
 *      food = 'half-chicken';
 *      console.log(food);  //debido a que hay un let dentro de la funcion no se toma el food del scope de fuera y por ende se tira un ReferenceError
 *      let food = 'gone';
 *  }
 *  food = 'chicken';
 *  console.log(food);
 *  eat();
 */