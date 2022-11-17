
const Boton = document.querySelector('#trigger_button');
const Nombre = document.querySelector('#nombre_usuario');
const form = document.querySelector('#form-container');
const body = document.querySelector('body');


let NombreUser = Nombre.value;
let correctas = [0];
var cont = [0];
var puntaje = [0];

localStorage.setItem("NombreUsuario", NombreUser);
localStorage.setItem("correctas", correctas);
localStorage.setItem("cont", cont);
localStorage.setItem("puntaje", puntaje);

form.addEventListener('click',()=>{
    Nombre.focus();
})

body.addEventListener('keypress',(e)=>{
    let codeLetter = e.keyCode;

    if (codeLetter == 13 ) {
        Nombre.focus();
    }
})


Nombre.addEventListener('keypress', (e) => {
    let codeLetter = e.keyCode;

    if (codeLetter == 13 && Nombre.value.length > 0) {
        window.location = "assets/Views/preguntas.html";
    }
});

Boton.addEventListener('click', () => {
    if (Nombre.value.length == 0) {
        Nombre.focus();
    } else {
        // window.location = "assets/views/preguntas.html";
        location.href = "assets/Views/preguntas.html";
    }
});


