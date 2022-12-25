const { performance } = require('perf_hooks');
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

//      USANDO EL EJEMPLO

const start = performance.now();
console.log("INVERTIR CON FUNCIONES: ");
const reversed1 = story.split("").reverse().join("");
// console.log("\n",reversed1,"\n\n");
console.log(`This took ${performance.now() - start} milliseconds to run\n`);

//      USANDO UN CICLO Y CONCATENANDO

let reversed2 = "";
const start2 = performance.now();
console.log("INVERTIR CON CICLO: ");
for(let i=story.length-1;i>=0;i--){
    reversed2+=story[i];
}
// console.log("\n",reversed2,"\n");
console.log(`This took ${performance.now() - start2} milliseconds to run\n`);