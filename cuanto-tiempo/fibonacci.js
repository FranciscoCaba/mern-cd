const { performance } = require('perf_hooks');

//La forma iterativa debería ser más rápida, la forma recursiva hace demasiadas llamadas innecesarias

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
const start = performance.now();
console.log("Buscando el valor fibonacci de forma RECURSIVA: ");
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run\n`);



// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
const start2 = performance.now();
console.log("Buscando el valor fibonacci de forma ITERATIVA: ");
iFib(20);
console.log(`This took ${performance.now() - start2} milliseconds to run\n`);