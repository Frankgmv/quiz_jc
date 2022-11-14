window.addEventListener('load', startAll);
let init = JSON.parse(localStorage.getItem('cont'));

const Preguntas = [
    { Pregunta: '¿Cuál es el plato típico paisa?', 'respuesta_1': 'Bandeja paisa', "respuesta_2": 'Arroz paisa', 'respuesta_3': 'uno', 'correcta': 1 },
    { Pregunta: '¿Cuál es la capital paisa?', 'respuesta_1': 'Medellín', "respuesta_2": 'Antioquia', 'respuesta_3': 'dos', 'correcta': 1 },
    { Pregunta: '¿Cuál es el principal evento de agosto para los paisas?', 'respuesta_1': 'la feria de flores', "respuesta_2": 'Desfile de carrozas', 'respuesta_3': 'tres', 'correcta': 1 },
    { Pregunta: '¿Cuál es un mito Antioqueño?', 'respuesta_1': 'La Catrina', "respuesta_2": 'El Sombrerón', 'respuesta_3': 'cuatro', 'correcta': 2 },
    { Pregunta: '¿Cuál es el artista paisa más reconocido mundialmente por su arte?', 'respuesta_1': 'Doris Salcedo', "respuesta_2": 'Fernando Botero', 'respuesta_3': 'cinco', 'correcta': 2 },
    { Pregunta: '¿Cuál es el edificio más alto de la capital paisa?', 'respuesta_1': 'El Coltejer', "respuesta_2": 'Torre Colpatria', 'respuesta_3': 'seis', 'correcta': 1 },
    { Pregunta: '¿Cuál es la batalla musical típica del paisa?', 'respuesta_1': 'La trova', "respuesta_2": 'El vallenato', 'respuesta_3': 'siete', 'correcta': 1 },
    { Pregunta: '¿Qué hace el arriero?', 'respuesta_1': 'El que exporta comida', "respuesta_2": 'El que arrea las mulas', 'respuesta_3': 'ocho', 'correcta': 2 },
    { Pregunta: '¿Qué lleva el arriero puesto encima?', 'respuesta_1': 'Poncho, sombrero y carriel', "respuesta_2": 'Sobrero, dulceabrigo y machete', 'respuesta_3': 'nueve', 'correcta': 1 },
    { Pregunta: '¿Cuál es el Clásico del futbol paisa?', 'respuesta_1': 'Nacional vs Medellín', "respuesta_2": 'Medellín vs Rio Negro', 'respuesta_3': 'diez', 'correcta': 1 },
    { Pregunta: 'Sistema de transporte más importante de Medellín', 'respuesta_1': 'Línea metro', "respuesta_2": 'Línea Copetran', 'respuesta_3': 'once', 'correcta': 1 },
    { Pregunta: 'seleccione el nombre del aeropuerto principal de los paisas', 'respuesta_1': 'Olaya Herrera', "respuesta_2": 'José María Córdova', 'respuesta_3': 'doce', 'correcta': 2 },
    { Pregunta: '¿Cuál es el Plato típico de diciembre para los paisas?', 'respuesta_1': 'Buñuelo y natilla', "respuesta_2": 'Asado y Lechona', 'respuesta_3': 'trece', 'correcta': 1 },
    { Pregunta: '¿Qué es un perico para el paisa?', 'respuesta_1': 'Un tinto', "respuesta_2": 'café con leche', 'respuesta_3': 'catorce', 'correcta': 2 },
    { Pregunta: 'Universidades pública de la capital', 'respuesta_1': 'UdeA', "respuesta_2": 'UdeM', 'respuesta_3': 'quince', 'correcta': 1 },
    { Pregunta: '¿Cuál es el dulce típico de los ancianos?', 'respuesta_1': 'Las solteritas', "respuesta_2": 'Los caramelos', 'respuesta_3': 'dieciséis', 'correcta': 1 }
]
let total_preguntas = [Preguntas.length];
localStorage.setItem("total_preguntas", total_preguntas);

// Recolectar variables
const id_ = document.querySelector("#index_pregunta");
const pregunta = document.querySelector("#question");
const boton = document.querySelector("#boton_submit");
const respuesta1 = document.querySelector("#answer1");
const respuesta2 = document.querySelector("#answer2");
const respuesta3 = document.querySelector("#answer3");
const cont_pregunta1 = document.querySelector("#cont1");
const cont_pregunta2 = document.querySelector("#cont2");
const cont_pregunta3 = document.querySelector("#cont3");
respuesta_seleccionada = 0;

cambiar_pregunta(init);

function startAll(e) {
    e.preventDefault();
    cont_pregunta1.addEventListener('click', agregar_clase1);
    cont_pregunta2.addEventListener('click', agregar_clase2);
    cont_pregunta3.addEventListener('click', agregar_clase3);
    boton.addEventListener('click', Evaluar_respuesta);
}

// Funciones de eventos
function agregar_clase1(e) {
    e.preventDefault();
    cont_pregunta1.classList.add("seleccionado");
    cont_pregunta2.classList.remove("seleccionado");
    cont_pregunta3.classList.remove("seleccionado");
    respuesta_seleccionada = 1;
}

function agregar_clase2(e) {
    e.preventDefault();
    cont_pregunta2.classList.add("seleccionado");
    cont_pregunta1.classList.remove("seleccionado");
    cont_pregunta3.classList.remove("seleccionado");
    respuesta_seleccionada = 2;
}
function agregar_clase3(e) {
    e.preventDefault();
    cont_pregunta3.classList.add("seleccionado");
    cont_pregunta1.classList.remove("seleccionado");
    cont_pregunta2.classList.remove("seleccionado");
    respuesta_seleccionada = 3;
}

function cambiar_pregunta(cont) {
    // iteración de preguntas
    id_.innerHTML = cont + 1;
    id_.innerHTML = cont + 1;
    pregunta.innerHTML = Preguntas[cont].Pregunta;
    respuesta1.innerHTML = Preguntas[cont].respuesta_1;
    respuesta2.innerHTML = Preguntas[cont].respuesta_2;
    respuesta3.innerHTML = Preguntas[cont].respuesta_3;

    if (cont >= 15) {
        boton.innerHTML = "Enviar";
        boton.addEventListener('click', () => {
            setTimeout(() => {
                window.location = "../Views/puntaje.html";
            }, 1000);
        });
    }
}

esCorrecta = (n_ask, id_preg) => {
    let answer;
    // TODO borrar comentarios innecesarios
    // console.log(`Resultado: ${Preguntas[id_preg].correcta} || ${n_ask}`);

    if (n_ask == Preguntas[id_preg].correcta) {
        answer = true;
        let correctas = JSON.parse(localStorage.getItem('correctas'));
        correctas++;
        localStorage.setItem('correctas', correctas);
    } else {
        answer = false;
    }
    MarcarRespuesta(answer, n_ask)
    return answer;
}

function MarcarRespuesta(val, id) {

    if (val) {
        switch (id) {
            case 1:
                cont_pregunta1.classList.add("correcto");
                break;
            case 2:
                cont_pregunta2.classList.add("correcto");
                break;
            default:
                cont_pregunta3.classList.add("correcto");
                break;
        }
    } else {
        switch (id) {
            case 1:
                cont_pregunta1.classList.add("incorrecto");
                break;
            case 2:
                cont_pregunta2.classList.add("incorrecto");
                break;
            default:
                cont_pregunta3.classList.add("incorrecto");
                break;
        }
    }
}

function Evaluar_respuesta(e) {
    e.preventDefault();

    if (respuesta_seleccionada != 0) {

        let puntos = JSON.parse(localStorage.getItem('puntaje'));
        let num = JSON.parse(localStorage.getItem('cont'));

        if (esCorrecta(respuesta_seleccionada, num)) {
            puntos += 10;
        } else {
            puntos -= 5;
        }
        localStorage.setItem('puntaje', puntos);

        setTimeout(() => {
            num++;
            cambiar_pregunta(num);
            localStorage.setItem('cont', num);

            Limpiar_pantalla();
        }, 2000);
    } else {
        swal("Selecciona una respuesta", '', 'warning');
    }
}

function Limpiar_pantalla() {
    cont_pregunta1.classList.remove("seleccionado", "incorrecto", "correcto");
    cont_pregunta2.classList.remove("seleccionado", "incorrecto", "correcto");
    cont_pregunta3.classList.remove("seleccionado", "incorrecto", "correcto");
    respuesta_seleccionada = 0;
}