//Número de enlaces de la página.
const element1 = document.getElementsByTagName('input');
console.log(element1);

//Dirección a la que enlaza el penúltimo enlace.
const element = document.getElementsByName('https://geonet.esri.com/welcome');

console.log(element)

//Número de enlaces del tercer párrafo.
const element2 = document.getElementsByClassName('tercer');

console.log(element2)
//pinta los resultados al final de la página utilizando innerHTML y creando un nodo

const element3 = document.createElement('p');
const contenido = document.createTextNode('Estos fueron los links de la página');
element3.appendChild(contenido);
document.body.appendChild(element3);
console.log(element3);
console.log(element3.innerHTML = "Ejercicios DOM");
