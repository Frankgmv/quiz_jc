
const Boton = document.querySelector('#trigger_button');
const Nombre = document.querySelector('#nombre_usuario');

Boton.addEventListener('click', () => {
    if (Nombre.value.length == 0) {
        Nombre.focus();
    } else {
        let NombreUser = Nombre.value;
        localStorage.setItem("NombreUsuario", NombreUser);
        window.location = "./views/preguntas.html";
    }
});
