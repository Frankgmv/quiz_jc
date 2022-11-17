window.addEventListener('load', startAll);
let init = JSON.parse(localStorage.getItem('cont'));

const Preguntas = [
    {
        Pregunta: '¿Cuál es el plato típico paisa?',
        'respuesta_1': 'Rellena',
        'respuesta_2': 'Bandeja',
        "respuesta_3": 'Frijoles',
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
        'respuesta_1': 'La Llorona',
        "respuesta_2": 'El Sombrerón',
        'respuesta_3': 'La PataSola',
        'correcta': 3
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
        "respuesta_1": 'Torre del Café',
        'respuesta_2': 'Centro Coltejer',
        'respuesta_3': 'Cámara de Comercio',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es la batalla musical típica del paisa?',
        'respuesta_1': 'El Joropo',
        "respuesta_2": 'El Vallenato',
        'respuesta_3': 'La Trova',
        'correcta': 3
    },
    {
        Pregunta: '¿Quién era Cosiaca?',
        'respuesta_1': 'El creador de la cultura paisa',
        "respuesta_2": 'El creador del himno del paisa',
        'respuesta_3': 'El creador de muchos dichos paisas',
        'correcta': 3
    },
    {
        Pregunta: '¿Qué hace el arriero?',
        'respuesta_1': 'El que trabajar con chivas',
        "respuesta_2": 'El que trabaja con mulas',
        'respuesta_3': 'EL que trabajar hormigas',
        'correcta': 2
    },
    {
        Pregunta: '¿Cuál es el clásico del futbol paisa?',
        "respuesta_1": 'Medellín vs Rio Negro',
        'respuesta_2': 'Medellín vs Santa fé',
        'respuesta_3': 'Nacional vs Medellín',
        'correcta': 3
    },
    {
        Pregunta: 'Sistema de transporte más importante de Medellín',
        "respuesta_1": 'Línea Copetran',
        'respuesta_2': 'Línea Circular',
        'respuesta_3': 'Línea Metro',
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
        "respuesta_1": 'Asado y lechona',
        'respuesta_2': 'Buñuelo y natilla',
        'respuesta_3': 'Buñuelo y lechona',
        'correcta': 2
    },
    {
        Pregunta: '¿Qué es un perico para el paisa?',
        'respuesta_1': 'Un polvo',
        "respuesta_2": 'Café con leche',
        'respuesta_3': 'Un loro',
        'correcta': 2
    },
    {
        Pregunta: 'Universidad pública de la capital',
        'respuesta_1': 'Uniminuto',
        "respuesta_2": 'UdeM',
        'respuesta_3': 'UdeA',
        'correcta': 3
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
const progressBar = document.querySelector('.progress-bar')
respuesta_seleccionada = 0;

let bar = document.createElement('progress');
bar.setAttribute('value', parseInt(localStorage.getItem('progress')));
bar.setAttribute('max', 100);   
progressBar.appendChild(bar);

cambiar_pregunta(init);

function startAll(e) {
    e.preventDefault();
    cont_pregunta1.addEventListener('click', agregar_clase1);
    cont_pregunta2.addEventListener('click', agregar_clase2);
    cont_pregunta3.addEventListener('click', agregar_clase3);
    boton.addEventListener('click', Evaluar_respuesta);
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
                location.href = "../Views/puntaje.html";
            }, 1000);
        });
    }
    let progress = (parseInt(id_.textContent) * 100) / total_preguntas[0]
    localStorage.removeItem('progress')
    localStorage.setItem('progress', progress)
    bar.setAttribute('value', parseInt(localStorage.getItem('progress')))
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
        }, 900);
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
