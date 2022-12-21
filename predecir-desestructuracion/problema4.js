const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);   //imprime false (2 != 5 o numbers[1]!=numbers[3])
console.log(first == third);    //imprime true (2 == 2 o numbers[1]==numbers[8])