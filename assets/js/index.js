
const Boton = document.querySelector('#trigger_button');
const Nombre = document.querySelector('#nombre_usuario');
const form = document.querySelector('#form-container');
const body = document.querySelector('body');


localStorage.setItem("NombreUsuario", Nombre.value);
localStorage.setItem("correctas", [0]);
localStorage.setItem("cont", [0]);
localStorage.setItem("puntaje", [0]);

form.addEventListener('click',()=>{
    Nombre.focus();
})

body.addEventListener('keypress',(e)=>{
    if (e.keyCode == 13 ) {
        Nombre.focus();
    }
})


Nombre.addEventListener('keypress', (e) => {
    if (e.keyCode == 13 && Nombre.value.length > 0) {
        window.location = "assets/Views/preguntas.html";
    }
});

Boton.addEventListener('click', () => {
    if (Nombre.value.length == 0) {
        Nombre.focus();
    } else {
        location.href = "assets/Views/preguntas.html";
    }
});


