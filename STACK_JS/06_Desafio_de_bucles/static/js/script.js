console.log("Prueba de conexión...");
// 🎯 Objetivo
// Aplicar el uso de bucles y condicionales para resolver problemas
// computacionales mediante la implementación de algoritmos en JavaScript,
// reforzando los conocimientos adquiridos en los capítulos anteriores.

// ❓ ¿Por qué es importante?
// Los bucles son una herramienta fundamental en programación,
// permitiendo ejecutar tareas repetitivas de manera eficiente.
// Comprender cómo usarlos correctamente mejora la optimización del código
// y facilita la automatización de procesos.

// 📋 Instrucciones
// Resuelve cada ejercicio utilizando for o while, según corresponda.
// Recuerda probar tu código con console.log() para verificar los resultados.
// Usa buenas prácticas de programación y mantén tu código bien estructurado.



// 🔢 Contador de interacciones en una app:
// Imagina que una aplicación registra la cantidad de veces que
// un usuario interactúa con un botón. Escribe un programa que imprima
// los números del 1 al 10 para simular las interacciones de un usuario.
// Ejemplo de salida esperada:

// Interacción 1
// Interacción 2
// ...
// Interacción 10

function contadorInteracciones() {
    for (let i = 1; i <= 10; i++) {
        alert(`Interacción ${i}`);
    }
}


// ⏳ Simular una barra de carga:
// Crea un programa que simule una barra de carga mostrando
// porcentajes de progreso del 0% al 100% en incrementos de 10.
// Ejemplo de salida esperada:

// Cargando... 0%
// Cargando... 10%
// ...
// Cargando... 100%
// Carga completa.

function barraCarga() {
    for (let i = 0; i <= 100;) {
        alert(`Cargando... ${i}%`);
        i += 10;
        if (i == 110) {
            alert(`Carga completa...`);
        }
    }
}


// 🛍️ Simulación de descuento progresivo en una tienda:
// Una tienda en línea ofrece un descuento progresivo en una promoción especial.
// El primer producto tiene un 5% de descuento, el segundo un 10%, el tercero un 15%,
// y así sucesivamente hasta el quinto producto con un 25%.
// Escribe un programa que calcule y muestre los descuentos aplicados a cada producto.
// Ejemplo de salida esperada:

// Producto 1 - Descuento aplicado: 5%
// Producto 2 - Descuento aplicado: 10%
// Producto 3 - Descuento aplicado: 15%
// Producto 4 - Descuento aplicado: 20%
// Producto 5 - Descuento aplicado: 25%

function descuentoProgresivo() {
    let productos = [`Producto 1: `, `Producto 2: `, `Producto 3: `, `Producto 4: `, `Producto 5: `];
    let productosNum = [35500, 47800, 78990, 53500, 61900];
    let descuento = [0.05, 0.10, 0.15, 0.20, 0.25];
    for (let i = 0; i < productos.length; i++) {
        alert(`${productos[i]} ${productosNum[i] - (productosNum[i] * descuento[i])}
         Descuento aplicado: ${descuento[i] * 100}%`)
    }
}


// 🎮 Calcular el total de puntos en un videojuego:
//  Un jugador gana 50 puntos cada vez que completa un nivel.
// Escribe un programa que calcule la puntuación total
// después de 5 niveles usando un bucle.
// Ejemplo de salida esperada:

// Puntos acumulados: 250

function puntosVideojuego() {
    let niveles = [`nivel 1:`, `nivel 2:`, `nivel 3:`, `nivel 4:`, `nivel 5:`]
    let puntaje = [1, 2, 3, 4, 5];
    for (let i = 0; i < niveles.length; i++) {
        alert(`${niveles[i]} ${puntaje[i] * 50} puntos`);
    }
}



// 🔔 Contador de notificaciones en una app:
// Imagina que una aplicación de mensajería muestra
// un contador de notificaciones pendientes.

// Escribe un programa que muestre un mensaje con la cantidad de notificaciones
// pendientes y las marque como leídas una por una hasta llegar a 0.
// Ejemplo de salida esperada:

// Tienes 5 notificaciones nuevas.
// Tienes 4 notificaciones nuevas.
// ...
// Tienes 1 notificación nueva.
// No tienes notificaciones pendientes.

function notificaciones() {
    for (let i = 5; i > 0; i--) {
        alert(`Tienes ${i} notificaciones nuevas.`);
    } alert(`No tienes notificaciones pendientes.`);
}


// 💡 Tips
// ✅ Recuerda usar for cuando conozcas la cantidad de repeticiones
// y while cuando dependas de una condición externa.
// 🧪 Usa console.log() para verificar los valores en cada iteración.
// 🧹 Mantén tu código organizado y bien indentado para mejorar su legibilidad.
// 📚 Contenidos que estás aplicando

// 🔁 Bucles for y while para iteraciones controladas y condicionales.
// ⚖️ Uso de operadores de comparación para evaluar condiciones.
// 🖨️ Aplicación de console.log() para depurar y verificar resultados.
// 📦 Manipulación de variables y estructuras de datos.
// 🧐 Preguntas y reflexión

// ¿Cómo podrías optimizar el uso de bucles para mejorar la eficiencia
// en tareas repetitivas en un proyecto real?
// 🎉 Resultado esperado
// Al completar este desafío, habrás reforzado tu habilidad para estructurar
// bucles en distintos escenarios prácticos, aplicando la lógica de programación
// de manera eficiente. Estos ejercicios reflejan situaciones
// comunes en el desarrollo de software, ayudándote a automatizar tareas
// repetitivas y mejorar la optimización del código.