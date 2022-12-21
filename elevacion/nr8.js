//CODIGO DADO
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//LUEGO DE ELEVACION
/** function makeDojo(name, students){  //declaracion de funcion se eleva
 *      const dojo = {};    //declaracion mantiene posicion
 *      dojo.name = name;   //al ser un objeto es posible añadir atributos a este sin realmente modificar el valor directo de dojo
 *      dojo.students = students;   //lo mismo de arriba
 *      if(dojo.students > 50){
 *          dojo.hiring = true;     //lo mismo de arriba
 *      }
 *      else if(){
 *          dojo = "closed for now";    //lanza error porque estamos tratando de modificar el tipo de variable de dojo, pero dojo es constante y por ende no se le puede asignar directamente otro valor
 *      }
 *      return dojo;
 *  }
 *  console.log(makeDojo("Chicago", 65));
 *  console.log(makeDojo("Berkeley", 0));
 */