console.log("Prueba de conexión...");

let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

//Acceder al pan

console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes();


//Objeto con método automovil

function metodoAuto() {
    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2023,
        encender: function () {
            alert(
                "Encendiendo",
                this.marca,
                this.modelo
            );
        }
    };
    auto.encender();
}

//Objeto con método casa

function metodoCasa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        mostrarInformacion: function () {
            alert(
                this.direccion
            );
        }
    };
    casa.mostrarInformacion();
}