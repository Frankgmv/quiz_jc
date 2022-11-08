
const Boton = document.querySelector('#trigger_button');
const Nombre = document.querySelector('#nombre_usuario');

Boton.addEventListener('click', () => {
    if (Nombre.value.length == 0) {
        Nombre.focus();
    } else {
        let NombreUser = Nombre.value;
        localStorage.setItem("NombreUsuario", NombreUser);
        var cont = [0];
        var puntaje = [0];
        localStorage.setItem("cont", cont);
        localStorage.setItem("puntaje", puntaje);
        window.location = "./views/preguntas.html";
    }
});
