console.log("Prueba de conexión...");

//Variables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

//Trasformar en array y mostrar

let array = [`Ana`, `Pedro`, `María`, `Carlos`];

//Mostrar a Maria en un alert

console.log(array[2]); //Muestra Maria
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

/* Desafio formar una oración con elementos
de las distintas variables */
//Pedro tiene 18 años y compro una sandia a $2300 pesos

let mensaje = `${alumnos[2]} fue al mercado con ${datos[0]} a comprar ${datos[1]}
${frutas[0]}s que le salieron $${compras[2]} pesos`;

console.log(mensaje);

// La propiedad .length devuelve la cantidad de elementos

let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];
console.log(frutas.length); // 4 --> Conteo de elementos

//Obtener el último elemento
let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1];
// variable.length -1 siempre trae el último elemento

console.log(ultima);

//Desafio
//Del arreglo ["Hola", "a", "todos", "los", "programadores!"]
//Mostrar el penultimo elemento y el ultimo

let arreglo = ["Hola", "a", "todos", "los", "programadores!"]
let ultimo = arreglo[arreglo.length - 1];
let penultimo = arreglo[arreglo.length - 2];

console.log(`${penultimo} ${ultimo}`)

function manipularArreglo() {

    let tareas = [`Barrer`, `Cocinar`, `Realizar compras`]

    //Modificar un elemento del arreglo
    tareas[1] = `Construir`;

    //Añadir un elemento al final de la lista
    tareas.push(`Cocinar`); //Agrega un elemento al final .push()

    //Eliminar el ultimo elemento y mostrarlo
    let eliminado = tareas.pop(); //Elimina último .pop()

    //Añadir un elemento al inicio de la lista
    tareas.unshift(`Boxear`); //Eliminar primero unshift();

    //Eliminar el primer elemento de la lista
    eliminado += ` - ` + tareas.shift(); //.shift elimina el primero

    //Mostrar resultado
    alert(tareas.join(` - `));
    alert(`Elementos eliminados: ${eliminado}`);
}


function buscarMayorEdad() {
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            console.log(edades[i]);
        }
    }
}


//Ejercicio 1:

//Crear el siguiente arreglo.
// let edades = [15,18,20,14,25];

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.

function edades() {
    let edades = [15,18,20,14,25];
    let ultimaEdad = edades[edades.length - 1]
    alert(`Primera edad: ${edades[0]}`);
    alert(`Última edad: ${ultimaEdad}`);
    alert(`Cantidad de elementos: ${edades.length}`);
}

//Ejercicio 2:

//Crear un arreglo con cinco nombres.

//Mostrar todos utilizando un ciclo `for`.

function nombres() {
    let nombres = [`Nicolas`, `César`, `Pedro`, `Juan`, `Diego`];
    let posicion = [1, 2, 3, 4, 5];
    for(let i = 0; i < 5; i++) {
        alert(`${posicion[i]} ${nombres[i]}`);
    }
}