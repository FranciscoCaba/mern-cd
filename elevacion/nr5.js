//CODIGO DADO
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//LUEGO DE ELEVACION
/**
 *  var mean;
 *  mean(); //tira error porque a mean aun no se le asignó la funcion a la que haria referencia
 *  console.log(food);
 *  mean = function(){
 *      var food;
 *      food = "chicken";
 *      console.log(food);
 *      food = "fish";
 *      console.log(food);
 *  }
 *  console.log(food);
 */

//CON ES6
/**
 *  mean();     //lanza ReferenceError ya que no se declaró dicha función en ningún punto, ya que el let no se elevó
 *  console.log(food);
 *  let mean = function(){
 *      let food;
 *      food = "chicken";
 *      console.log(food);
 *      food = "fish";
 *      console.log(food);
 *  }
 *  console.log(food);
 */