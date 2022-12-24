Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
Number.prototype.isPrimeMk2 = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

//      TEST DEL PRIMER METODO


const { performance } = require('perf_hooks');
let primeCount;
let num;
//      HALLANDO EL PRIMO NRO 10000
const start = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run\n`);


//      HALLANDO EL PRIMO NRO 100000
const start2 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start2} milliseconds to run\n`);


//      HALLANDO EL PRIMO NRO 1000000
const start3 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start3} milliseconds to run\n`);

//      TEST DEL SEGUNDO METODO

//      HALLANDO EL PRIMO NRO 10000
const start4 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrimeMk2() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start4} milliseconds to run\n`);


//      HALLANDO EL PRIMO NRO 100000
const start5 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e5 ) {
    if( num.isPrimeMk2() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start5} milliseconds to run\n`);


//      HALLANDO EL PRIMO NRO 1000000
const start6 = performance.now();
primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e6 ) {
    if( num.isPrimeMk2() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start6} milliseconds to run`);