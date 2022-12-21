const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);      //imprime 12345
console.log(hashedPassword);    //imprime undefined ya que no existe el atributo password dentro del objeto person