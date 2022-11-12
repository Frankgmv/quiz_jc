window.addEventListener('load', startAll);
let init = JSON.parse(localStorage.getItem('cont'));

const Preguntas = [
    { Pregunta: '¿Cuál es el plato típico paisa?', 'respuesta_1': 'Bandeja paisa', "respuesta_2": 'Arroz paisa', 'correcta': 1 },
    { Pregunta: '¿Cuál es la capital paisa?', 'respuesta_1': 'Medellín', "respuesta_2": 'Antioquia', 'correcta': 1 },
    { Pregunta: '¿Cuál es el principal evento de agosto para los paisas?', 'respuesta_1': 'la feria de flores', "respuesta_2": 'Desfile de carrozas', 'correcta': 1 },
    { Pregunta: '¿Cuál es un mito Antioqueño?', 'respuesta_1': 'La Catrina', "respuesta_2": 'El Sombrerón', 'correcta': 2 },
    { Pregunta: '¿Cuál es el artista paisa más reconocido mundialmente por su arte?', 'respuesta_1': 'Doris Salcedo', "respuesta_2": 'Fernando Botero', 'correcta': 2 },
    { Pregunta: '¿Cuál es el edificio más alto de la capital paisa?', 'respuesta_1': 'El Coltejer', "respuesta_2": 'Torre Colpatria', 'correcta': 1 },
    { Pregunta: '¿Cuál es la batalla musical típica del paisa?', 'respuesta_1': 'La trova', "respuesta_2": 'El vallenato', 'correcta': 1 },
    { Pregunta: '¿Quien hace el arriero?', 'respuesta_1': 'El que exporta comida', "respuesta_2": 'El que arrea las mulas', 'correcta': 2 },
    { Pregunta: '¿Qué lleva el arriero puesto encima?', 'respuesta_1': 'Poncho, sombrero y carriel', "respuesta_2": 'Sobrero, dulceabrigo y machete', 'correcta': 1 },
    { Pregunta: '¿Cuál es el Clásico del futbol paisa?', 'respuesta_1': 'Nacional vs Medellín', "respuesta_2": 'Medellín vs Rio Negro', 'correcta': 1 },
    { Pregunta: 'Sistema de transporte más importante de Medellín', 'respuesta_1': 'Línea metro', "respuesta_2": 'Línea Copetran', 'correcta': 1 },
    { Pregunta: 'seleccione el nombre del aeropuerto principal de los paisas', 'respuesta_1': 'Olaya Herrera', "respuesta_2": 'José María Córdova', 'correcta': 2 },
    { Pregunta: '¿Cuál es el Plato típico de diciembre para los paisas?', 'respuesta_1': 'Buñuelo y natilla', "respuesta_2": 'Asado y Lechona', 'correcta': 1 },
    { Pregunta: '¿Qué es un perico para el paisa?', 'respuesta_1': 'Un tinto', "respuesta_2": 'café con leche', 'correcta': 2 },
    { Pregunta: 'Universidades pública de la capital', 'respuesta_1': 'UdeA', "respuesta_2": 'UdeM', 'correcta': 1 },
    { Pregunta: '¿Cuál es el dulce típico de los ancianos?', 'respuesta_1': 'Las solterias', "respuesta_2": 'Los caramelos', 'correcta': 1 }
]
let total_preguntas = [Preguntas.length];
localStorage.setItem("total_preguntas", total_preguntas);

// Recolectar variables
const id_ = document.querySelector("#index_pregunta");
const pregunta = document.querySelector("#question");
const boton = document.querySelector("#boton_submit");
const respuesta1 = document.querySelector("#answer1");
const respuesta2 = document.querySelector("#answer2");
const cont_pregunta1 = document.querySelector("#cont1");
const cont_pregunta2 = document.querySelector("#cont2");
respuesta_seleccionada = 0;

cambiar_pregunta(init);

function startAll(e) {
    e.preventDefault();
    cont_pregunta1.addEventListener('click', agregar_clase1);
    cont_pregunta2.addEventListener('click', agregar_clase2);
    boton.addEventListener('click', Evaluar_respuesta);
}

// Funciones de eventos
function agregar_clase1(e) {
    e.preventDefault();
    cont_pregunta1.classList.add("seleccionado");
    cont_pregunta2.classList.remove("seleccionado");
    respuesta_seleccionada = 1;
}

function agregar_clase2(e) {
    e.preventDefault();
    cont_pregunta1.classList.remove("seleccionado");
    cont_pregunta2.classList.add("seleccionado");
    respuesta_seleccionada = 2;
}

function cambiar_pregunta(cont) {
    // iteración de preguntas
    id_.innerHTML = cont + 1;
    id_.innerHTML = cont + 1;
    pregunta.innerHTML = Preguntas[cont].Pregunta;
    respuesta1.innerHTML = Preguntas[cont].respuesta_1;
    respuesta2.innerHTML = Preguntas[cont].respuesta_2;

    if (cont >= 15) {
        boton.addEventListener('click', () => {
            setTimeout(() => {
                window.location = "../Views/puntaje.html";
            }, 1000);
        });
    }
}

esCorrecta = (n_ask, id_preg, id_resp) => {
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
    MarcarRespuesta(answer, id_resp)
    return answer;
}

function MarcarRespuesta(val, id) {

    if (val) {

        if (id == 1) {
            cont_pregunta1.classList.add("correcto");
            cont_pregunta2.classList.remove("correcto");
        } else {
            cont_pregunta1.classList.remove("correcto");
            cont_pregunta2.classList.add("correcto");
        }
    } else {
        if (id == 1) {
            cont_pregunta1.classList.add("incorrecto");
        } else {
            cont_pregunta2.classList.add("incorrecto");
        }
    }
}

function Evaluar_respuesta(e) {
    e.preventDefault();

    if (respuesta_seleccionada != 0) {

        let puntos = JSON.parse(localStorage.getItem('puntaje'));
        let num = JSON.parse(localStorage.getItem('cont'));

        if (esCorrecta(respuesta_seleccionada, num, respuesta_seleccionada)) {
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
    respuesta_seleccionada = 0;
}