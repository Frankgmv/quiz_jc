let Nombre = localStorage.getItem("NombreUsuario");
let correctas = JSON.parse(localStorage.getItem('correctas'));
let total_preguntas = JSON.parse(localStorage.getItem('total_preguntas'));
let puntaje = localStorage.getItem("puntaje");

console.log(Nombre);
console.log(puntaje);
console.log(`Total preguntas acertadas: ${total_preguntas - (total_preguntas - correctas)}/${total_preguntas} `);





