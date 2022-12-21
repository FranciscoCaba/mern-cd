const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);  //tira error ya que asignamos lo que venga del objeto en otherName y no en una variable llamada name
console.log(otherName);     //No se llega a esta linea, pero en todo caso este imprimiria lo que buscamos que es Elon