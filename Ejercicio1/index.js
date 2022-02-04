
//base 16 * 23 cm
//altura 13 cm

const volumen = 16 * 23 * 13
console.log ('volumen' , volumen + ' cm3')

//A = al + 2ab

const AreaLateral = 23*13
const AreaBase = 16*23
const AreaTotal = AreaLateral + 2*AreaBase;
console.log ('AreaTotal' , AreaTotal + ' cm2')

//Generalización
const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base*altura*ancho
console.log ('volumen2' , volumen2 + ' cm3')

const AreaTotal2 = base * altura + 2*base * ancho
console.log ('AreaTotal2' , AreaTotal2 + ' cm2')
