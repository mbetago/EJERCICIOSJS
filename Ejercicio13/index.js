//seleccionar usuarios no premium

const premium1 = {username: 'lu65', age: 24, premium: true}

console.log ('premium1', premium1 )

const premium2 = { username: 'sergio58', age: 30, premium: true }

console.log ('premium2' , premium2 )

//seleccionar usuarios no premium

const users = [
    { username: 'ppc90', age: 30, premium: false },
    { username: 'lu65', age: 24, premium: true },
    { username: 'maria3', age: 36, premium: false },
    { username: 'abc123', age: 30, premium: false },
    { username: 'sergio58', age: 30, premium: true },
];
 const premiumu = users.filter(function (users) {
    return users.premium === false
});
    console.log(premiumu);

