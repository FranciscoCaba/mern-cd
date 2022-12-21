const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);       //imprime value
console.log(secondKey);     //imprime [ 1, 5, 1, 8, 3, 3 ]
console.log(secondKey[0]);  //imprime 1
console.log(willThisWork);  //imprime 5