// Ejercicio 1: Calculadora de Envío
// Enunciado
// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// Nombre del cliente
// Peso del paquete (kg)

// Condiciones:

// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg

// El programa debe indicar:

// Nombre del cliente
// Valor correspondiente al despacho

function ejercicio1() {
    let nombre = prompt(`Ingrese su nombre`);
    let peso = parseInt(prompt(`Ingrese el peso del paquete`));
    let valorDespacho = 2000;
    let mensaje = "";
    if (peso > 0 && peso <= 2) {
        mensaje = `Paquete menor a 2Kgs
        \nValor despacho: $${valorDespacho * peso}`;
    } else if (peso > 2 && peso <= 5) {
        mensaje = `Paquete pesa: ${peso}Kgs
        \nValor despacho: $${valorDespacho * peso}`;
    } else if (peso > 5 && peso <= 10) {
        mensaje = `Paquete pesa: ${peso}Kgs
        \nValor despacho: $${valorDespacho * peso}`;
    } else if (peso > 10) {
        mensaje = `Paquete pesa: ${peso}Kgs
        \nValor despacho: $${valorDespacho * peso}`;
    } else {
        mensaje = `Ingrese valores validos`;
    }
    mensaje = `Nombre Cliente: ${nombre} \nPaquete pesa: ${peso}kg
    \nValor despacho: $${valorDespacho * peso}`;
    alert(mensaje);
}


// Ejercicio 2: Acceso a Biblioteca
// Enunciado
// Una biblioteca posee dos tipos de usuarios:

// Estudiante
// Profesor

// Solicitar:

// Tipo de usuario
// Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// Si el préstamo está permitido.
// Si supera el límite permitido.
// Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio2() {
    let tipoUsuario = prompt(`Ingrese su tipo de usuario:`);
    let libros = parseInt(prompt(`Cantidad de libros solicitados:`));
    let mensaje = "";
    if (tipoUsuario == "Profesor" && libros > 0 && libros <= 6) {
        mensaje = `El prestamo para profesor esta permitido`;
    } else if (tipoUsuario == "Profesor" && libros > 6) {
        mensaje = `El prestamo para profesor supera el limite permitido`;
    } else if (tipoUsuario == "Estudiante" && libros > 0 && libros <= 3) {
        mensaje = `El prestamo para estudiante esta permitido`;
    } else if (tipoUsuario == "Estudiante" && libros > 3) {
        mensaje = `El prestamo para estudiante supera el limite permitido`;
    } else {
        mensaje = `Ingrese un usuario/numero valido`;
    }
    alert(mensaje);
}


// Ejercicio 3: Clasificación Deportiva
// Enunciado
// Solicitar:

// Nombre del participante
// Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// Nombre
// Edad
// Categoría asignada

function ejercicio3() {
    let nombreParticipante = prompt(`Ingrese nombre del participante:`);
    let edadParticipante = parseInt(prompt(`Ingrese edad del participante`));
    let mensaje = "";
    if (edadParticipante > 0 && edadParticipante <= 8) {
        mensaje = `Nombre: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nCategoria asignada: Mini`;
    } else if (edadParticipante > 8 && edadParticipante <= 12) {
        mensaje = `Nombre: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nCategoria asignada: Mediana`;
    } else if (edadParticipante > 12 && edadParticipante <= 16) {
        mensaje = `Nombre: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nCategoria asignada: Grande`;
    } else if (edadParticipante > 16 && edadParticipante <= 20) {
        mensaje = `Nombre: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nCategoria asignada: Pro`;
    } else if (edadParticipante > 20 && edadParticipante <= 25) {
        mensaje = `Nombre: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nCategoria asignada: ProXL`;
    } else if (edadParticipante > 25 && edadParticipante <= 99) {
        mensaje = `El participante ${nombreParticipante} no puede participar
        \nYa que supera el limite de edad permitido en la competencia`;
    } else {
        mensaje = `Ingrese valores válidos`;
    }
    alert(mensaje);
}


// Ejercicio 4: Sistema de Bonificación
// Enunciado
// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// Nombre del trabajador
// Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// Nombre
// Nivel de antigüedad
// Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt(`Ingrese su nombre`);
    let años = parseInt(prompt(`Ingrese años de servicio`));
    let mensaje = "";
    if (años == 0) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nLo sentimos, no recibira bonificación,
        \nya que no lleva suficiente tiempo en la empresa`;
    } else if (años > 0 && años <= 2) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antigüedad: Nivel ${años}
        \nSe le dara una bonificación desde 5% a 7%`;
    } else if (años > 2 && años <= 5) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antigüedad: Nivel ${años}
        \nSe le dara una bonificación desde 8% a 10%`;
    } else if (años > 5 && años <= 9) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antigüedad: Nivel ${años}
        \nSe le dara una bonificación desde 10% a 12%`;
    } else if (años > 9 && años <= 99) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antigüedad: Nivel ${años}
        \nSe le dara una bonificación del 15%`;
    } else {
        mensaje = `Ingrese valores validos`;
    }
    alert(mensaje);
}


// Ejercicio 5: Evaluación de Velocidad
// Enunciado
// Solicitar:

// Nombre del conductor
// Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// Nombre del conductor
// Velocidad
// Clasificación obtenida

function ejercicio5() {
    let nombreConductor = prompt(`Ingrese su nombre:`);
    let velocidad = parseInt(prompt(`Velocidad registrada:`));
    let mensaje = "";
    if (velocidad > 0 && velocidad <= 35) {
        mensaje = `Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidad}
        \nClasificación obtenida: Prudente`;
    } else if (velocidad > 35 && velocidad <= 50) {
        mensaje = `Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidad}
        \nClasificación obtenida: Equilibrado`;
    } else if (velocidad > 50 && velocidad <= 70) {
        mensaje = `Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidad}
        \nClasificación obtenida: Ágil`;
    } else if (velocidad > 70 && velocidad <= 99) {
        mensaje = `Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidad}
        \nClasificación obtenida: Veloz`;
    } else if (velocidad > 99 && velocidad <= 120) {
        mensaje = `Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidad}
        \nClasificación obtenida: Temerario`;
    } else if (velocidad > 120 && velocidad <= 250) {
        mensaje = `¡Ha excedido la velocidad permitida!`;
    } else {
        mensaje = `Ingrese valores validos`;
    }
    alert(mensaje);
} 