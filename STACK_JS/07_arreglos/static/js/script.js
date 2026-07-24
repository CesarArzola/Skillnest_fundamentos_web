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
    let edades = [15, 18, 20, 14, 25];
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
    for (let i = 0; i < 5; i++) {
        alert(`${posicion[i]} ${nombres[i]}`);
    }
}


//Recorrer un arreglo

function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];
    for (let i = 0; i < notas.length; i++) {
        alert(`Mostrando nota ${i + 1} de ${notas.length}: ${notas[i]}`);
    }
}


//Sumar elementos dentro de un bucle

function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i]; // += acumula
    }
    alert(`El resultado final es: ${total}`);
}

//Calcular un promedio

function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    alert(`La suma acumulada es: ${suma}`);
    let promedio = suma / notas.length;
    alert(`La suma de las notas: ${notas.join(` - `)}\nPromedio: ${promedio.toFixed(1)}`);
}

//Condiciones dentro de bucle

function buscarMayor() {
    let edades = [12, 15, 18, 20, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //Condicion para buscar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]); //Añade la posicion que cumple la condición
        }
    }
    alert(`De la lista de edades: ${edades.join(` - `)}
    \nLos mayores son: ${mayores.join(` - `)}`);
}

//Encontrar el menor y el mayor

function buscarMayorMenor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let meno = numeros[0]
    let mayo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < meno) {
            meno = numeros[i];
        } else if (numeros[i] > mayo) {
            mayo = numeros[i];
        } else {
            console.log(`Valor que no afecta: ${numeros[i]}`);
        }
    }
    alert(`De los números ${numeros.join(` - `)}
    \nEl menor es: ${meno}
    \nEl mayor es: ${mayo}`);
}


//Ejemplo completo
//Tarea: Unir los console.log en una alerta
//Eliminar el último valor y mostrarlo.
//Añadir dos valores nuevos con .push (prompt)
//Contar cantidad de ventas mayores que 10000

function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let eliminados = ventas.pop();
    let valor1 = parseInt(prompt(`Ingrese primer valor`));
    let valor2 = parseInt(prompt(`Ingrese segundo valor`));
    ventas.push(valor1, valor2);
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }
    }
    alert(`Total ventas: ${total}
        \nMayor: ${mayor}
        \nPromedio: ${total / ventas.length}
        \nValores sobre $10000: ${mayores.join(` / `)}
        \nConteo de mayores: ${contadorVentas}
        \nValor eliminado: ${eliminados}`);
}