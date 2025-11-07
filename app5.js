// Simulación de venta de 15 boletos de cine
// Si el comprador es menor de edad y la película es para adultos, se rechaza la venta

for (let comprador = 1; comprador <= 15; comprador++) {
    console.log(`Comprador ${comprador}`);

    // Leer edad del comprador
    let edad = parseInt(prompt(`Ingrese la edad del comprador ${comprador}:`));

    // Leer tipo de película
    let pelicula = prompt("¿La película es para adultos? (si/no)").toLowerCase();

    // Evaluar condiciones
    if (edad < 18 && pelicula === "si") {
        console.log("Venta rechazada. El comprador es menor de edad.\n");
    } else {
        console.log("Venta autorizada.\n");
    }
}

console.log("Fin del proceso de venta.");

