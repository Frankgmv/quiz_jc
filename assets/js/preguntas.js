window.addEventListener('load', startAll);
let init = JSON.parse(localStorage.getItem('cont'));

const Preguntas = [
    {
        Pregunta: '¿Cuál es el plato típico paisa?',
        'respuesta_1': 'Rellena',
        'respuesta_2': 'Bandeja paisa',
        "respuesta_3": 'Arroz paisa',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es la capital paisa?',
        'respuesta_1': 'Medellín',
        "respuesta_2": 'Antioquia',
        'respuesta_3': 'Rio Negro',
        'correcta': 1
    },
    {
        Pregunta: '¿Cuál es el principal evento de agosto para los paisas?',
        'respuesta_1': 'La alborada',
        "respuesta_2": 'Desfile de carrozas',
        'respuesta_3': 'la feria de flores',
        'correcta': 3
    },
    {
        Pregunta: '¿Cuál es un mito Antioqueño?',
        'respuesta_1': 'La llorona',
        "respuesta_2": 'El Sombrerón',
        'respuesta_3': 'La pata sola',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es el artista paisa más reconocido mundialmente por su arte?',
        'respuesta_1': 'Doris Salcedo',
        "respuesta_2": 'Fernando Botero',
        'respuesta_3': 'Belisario Betancur',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es el edificio más alto de la capital paisa?',
        'respuesta_1': 'Torre Coltejer',
        "respuesta_2": 'Torre Colpatria',
        'respuesta_3': 'Torre del Café',
        'correcta': 1
    },
    {
        Pregunta: '¿Cuál es la batalla musical típica del paisa?',
        'respuesta_1': 'El Joropo',
        "respuesta_2": 'El Vallenato',
        'respuesta_3': 'La Trova',
        'correcta': 3
    },
    {
        Pregunta: '¿Qué hace el arriero?',
        'respuesta_1': 'El que recolecta dinero',
        "respuesta_2": 'El que trabaja con mulas',
        'respuesta_3': 'EL que recolecta hormigas',
        'correcta': 2
    },
    {
        Pregunta: '¿Qué lleva el arriero puesto encima?',
        'respuesta_1': 'Poncho, sombrero y carriel',
        "respuesta_2": 'Sobrero, dulceabrigo y machete',
        'respuesta_3': 'Ruana, carriel y zurriago',
        'correcta': 1
    },
    {
        Pregunta: '¿Cuál es el Clásico del futbol paisa?',
        "respuesta_1":  'Medellín vs Rio Negro',
        'respuesta_2': 'Medellín vs Santa fé',
        'respuesta_3': 'Nacional vs Medellín',
        'correcta': 3
    },
    {
        Pregunta: 'Sistema de transporte más importante de Medellín',
        "respuesta_1": 'Línea Copetran',
        'respuesta_2': 'Línea Circular',
        'respuesta_3': 'Línea metro',
        'correcta': 3
    },
    {
        Pregunta: 'seleccione el nombre del aeropuerto principal de los paisas',
        'respuesta_1': 'Olaya Herrera',
        "respuesta_2": 'José María Córdova',
        'respuesta_3': 'Alberto Jaramillo Sánchez',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es el Plato típico de diciembre para los paisas?',
        "respuesta_1": 'Asado y Lechona',
        'respuesta_2': 'Buñuelo y natilla',
        'respuesta_3': 'Buñuelo y Lechona',
        'correcta': 2
    },
    {
        Pregunta: '¿Qué es un perico para el paisa?',
        'respuesta_1': 'Un tinto',
        "respuesta_2": 'café con leche',
        'respuesta_3': 'Un polvo',
        'correcta': 2
    },
    {
        Pregunta: 'Universidades pública de la capital',
        'respuesta_1': 'UdeA',
        "respuesta_2": 'UdeM',
        'respuesta_3': 'Uniminuto',
        'correcta': 1
    },
    {
        Pregunta: '¿Cuál es el dulce típico de los ancianos?',
        "respuesta_1": 'Los caramelos',
        'respuesta_2': 'Obleas',
        'respuesta_3': 'Las solteritas',
        'correcta': 3
    }
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
                // window.location = "../Views/puntaje.html";
                location.href = "../Views/puntaje.html";
            }, 1000);
        });
    }
}

esCorrecta = (n_ask, id_preg) => {
    let answer;
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