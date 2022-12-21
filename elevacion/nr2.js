//CODIGO DADO
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//LUEGO DE ELEVACION
/**
 * var needle; //declaracion de needle global se eleva
 * function test(){ //declaracion de la funcion se eleva
 *      var needle; //declaracion se eleva solo dentro de la funcion
 *      needle = 'magnet';
 *      console.log(needle); //imprime magnet
 * }
 * needle = 'haystack'; //posicion de asignacion se mantiene
 * test();
 */

//CON ES6
/**
 * let needle;
 * funcion test(){
 *      let needle;
 *      needle = 'magnet';
 *      console.log(needle); //sigue imprimiendo magnet porque utiliza el needle del scope de la funcion
 * }
 * needle = 'haystack';
 * test();
 */