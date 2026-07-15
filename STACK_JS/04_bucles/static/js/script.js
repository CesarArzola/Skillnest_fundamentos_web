console.log("Prueba de conexión...");

/* Ejemplo bucle for */

function contarHasta5() {
    for (let i = 0; i < 6; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
        alert(i);
    }
}

function recorrerLista() {
    // Lista es un tipode dato (array/lista/arreglos)
    // [] = ["nombre", 4, True, [2, 4]]
    /*
    let nombre = "Carlos";
    alert(nombre)
                        0         1
    let nombres = ["Carlos", "María"]
    alert(nombres[0]) --> Esto imprime Carlos
    alert(nombres[1]) --> Imprime Maria
    alert(nombres.lenght); --> 2 (largo nombres)
        alert(nombres[0].lenght); --> 6 (largo 0)
    */
    let usuarios = ["Ana", "Luis", "María"]; // Lista es un tipo de dato

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        //reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contraseñaCorrecta = false;
// !variable = variable es distinto a verdadera - dentro de condicion
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break; // Rompe el bucle
            alert(`no se ejecuta`);
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}