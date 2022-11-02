

const Preguntas = [
    { Pregunta: '¿Cuál es el plato típico paisa?', 'respuesta_1': 'Bandeja paisa', "respuesta_2": 'Arroz paisa', 'correcta':1},
    { Pregunta: '¿Cuál es la capital paisa?', 'respuesta_1': 'Medellín', "respuesta_2": 'Antioquia', 'correcta': 1},
    { Pregunta: '¿Cuál es el principal evento de agosto para los paisas?', 'respuesta_1': 'la feria de flores', "respuesta_2": 'Desfile de carrozas', 'correcta': 1},
    { Pregunta: '¿Cuál es un mito Antioqueño?', 'respuesta_1': 'El Sombrerón', "respuesta_2": 'La Catrina', 'correcta': 1},
    { Pregunta: '¿Cuál es el artista paisa más reconocido mundialmente por su arte?', 'respuesta_1': 'Doris Salcedo', "respuesta_2": 'Fernando Botero', 'correcta': 2},
    { Pregunta: '¿Cuál el edificio más alto de la capital?', 'respuesta_1': 'El Coltejer', "respuesta_2": 'Torre Colpatria', 'correcta': 1},
    { Pregunta: '¿Cuál es la batalla musical típica del paisa?', 'respuesta_1': 'La trova', "respuesta_2": 'El vallenato', 'correcta': 1},
    { Pregunta: '¿Quien es al arriero?', 'respuesta_1': 'El que cobra la plata', "respuesta_2": 'El que arrea las mulas', 'correcta': 2},
    { Pregunta: '¿Cómo usa el arriero encima?', 'respuesta_1': 'Poncho, sombrero y carriel', "respuesta_2": 'Sobrero y dulceabrigo y machete', 'correcta': 1},
    { Pregunta: '¿Cuál es el Clásico del futbol?', 'respuesta_1': 'Nacional vs Medellín', "respuesta_2": 'Medellín vs Rio Negro', 'correcta': 1},
    { Pregunta: '¿Sistema de transporte más importante de Medellín?', 'respuesta_1': 'Línea metro', "respuesta_2": 'Copetran SAS', 'correcta': 1},
    { Pregunta: 'Nombre del aeropuerto principal de los paisas?', 'respuesta_1': 'Olaya Herrera', "respuesta_2": 'José María Córdova', 'correcta': 2},
    { Pregunta: 'Plato típico de diciembre para los paisas?', 'respuesta_1': 'Buñuelo y natilla', "respuesta_2": 'Sancocho y asado', 'correcta': 1},
    { Pregunta: '¿Qué es un perico para los paisa?', 'respuesta_1': 'Un tinto', "respuesta_2": 'café con leche', 'correcta': 1},
    { Pregunta: 'Universidad pública de la capital', 'respuesta_1': 'UdeA', "respuesta_2": 'UdeM', 'correcta': 1},
    { Pregunta: '¿Cuál es el dulce típico de los ancianos?', 'respuesta_1': 'Las solterias', "respuesta_2": 'Los caramelos', 'correcta': 1},
    { Pregunta: 'Una economía principal de Antioquia es: ', 'respuesta_1': 'Comercio', "respuesta_2": 'Minería', 'correcta': 1},
]

const id_ = document.querySelector("#index_pregunta");
const pregunta = document.querySelector("#question");
const boton = document.querySelector("#boton_submit");
const respuesta1 = document.querySelector("#answer1");
const respuesta2 = document.querySelector("#answer2");
cont = 0;

do{
    id_.innerHTML = cont;
    pregunta.innerHTML = Preguntas[cont].Pregunta;
    respuesta1.innerHTML = Preguntas[cont].respuesta_1;
    respuesta2.innerHTML = Preguntas[cont].respuesta_2;

    // boton.addEventListener('click', )

}while(1 == 2);

    





