//CODIGO DADO
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//LUEGO DE ELEVACION
/**
 *  var dojo;   //por mas de que en el codigo original no se pone la palabra clave "var", el interprete toma la falta de la palabra clave como que estamos declarando dicha variable como si fuese un var. Por esto, es elevado
 *  function learn(){   //declaracion de funcion se eleva
 *      var dojo;   //declaracion se eleva dentro de dojo se eleva y reescribe la declaracion de var dojo de fuera, creando una variable local
 *      dojo = "seattle";   //asignacion mantiene posicion
 *      console.log(dojo);  //imprime seattle
 *      dojo = "burbank";   //asignacion mantiene posicion
 *      console.log(dojo);  //imprime burbank
 *  }
 *  dojo = "san jose";  //asignacion mantiene posicion y da el valor global de dojo a san jose
 *  console.log(dojo);  //imprime san jose
 *  learn();
 *  console.log(dojo);  //imprime san jose ya que el dojo dentro de learn() es diferente al haberse redeclarado dentro de la funcion
 * 
 *  orden de impresion
 *  san jose
 *  seattle
 *  burbank
 *  san jose
 */

//CON ES6
/**
 *  var dojo; //el interprete toma la falta de ninguna palabra reservada antes de la declaracion como que se esta declarando como "var"
 *  function learn(){
 *      dojo = "seattle";   //lanza ReferenceError al encontrarse con que dentro de learn hay una declaracion del tipo let, pero aun no ha sido declarado en este punto
 *      console.log(dojo);
 *      let dojo = "burbank";
 *      console.log(dojo);
 *  }
 *  dojo = "san jose";  //asigna el valor sin problemas ya que usa la declaracion del principio
 *  console.log(dojo);  //imprime san jose
 *  learn();
 *  console.log(dojo);
 */