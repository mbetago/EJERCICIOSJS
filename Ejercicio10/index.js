//separar pares

const pares = [20, 562, 258, 254]
console.log ('Pares' , pares + ' Estos son los números pares ')

//separar impares

const impares = [253, 8575, 1, 1233, 25, 27, 7485, 2683]
console.log ('imPares' , impares + ' Estos son los números impares ')

 //separar pares filtro

 const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
 const par1 = number.filter(number => {
     return number % 2 !== 0
  });
  console.log (par1);

   //separar impares filtro

 const numberimp = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
 const impar1 = numberimp.filter(numberimp =>  {
     return numberimp % 2 !== 1
  });
  console.log (impar1);