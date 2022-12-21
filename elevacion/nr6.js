//CODIGO DADO
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//LUEGO DE ELEVACION
/**
 *  var genre;  //declaracion se eleva
 *  function rewind(){  //declaracion de funcion se eleva
 *      var genre;  //declaracion se eleva dentro de la funcion y se convierte en una variable cuyos cambios solo se reflejan dentro de la funcion
 *      genre = "rock"; //asignacion inicial mantiene posicion
 *      console.log(genre); //imprime rock
 *      genre = "r&b";  //asignacion final mantiene posicion
 *      console.log(genre); //imprime r&b
 *  }
 *  console.log(genre); //imprime undefined ya que no se asignó ningún valor aún a la variable declarada
 *  genre = "disco";    //asignacion global mantiene posicion
 *  rewind();   //como dentro de rewind se vuelve a declarar dentro genre, los cambios ahi dentro no cambian el genre de fuera de la funcion, haciendo que se mantenga el valor disco
 *  console.log(genre); //imprime disco
 * 
 *  orden de impresion
 *  undefined
 *  rock
 *  r&b
 *  disco
 */

//CON ES6
/**
 *  function rewind(){  //declaracion de funcion se eleva
 *      genre = "rock";
 *      console.log(genre);
 *      let genre = "r&b";
 *      console.log(genre);
 *  }
 *  console.log(genre); //lanza un ReferenceError porque es la primera linea que realmente se ejecuta y sin tener la variable genre declarada aun
 *  let genre = "disco";
 *  rewind();
 *  console.log(genre);
 */