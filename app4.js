// Simulación de una competencia de atletismo con 8 corredores.
// Cada corredor da 4 vueltas, pero si se cansa antes, se detiene.

for (let corredor = 1; corredor <= 8; corredor++) {
    console.log(`Corredor ${corredor} inicia la carrera.`);

    // Ciclo para las vueltas de cada corredor
    for (let vuelta = 1; vuelta <= 4; vuelta++) {
        let cansado = prompt(`¿El corredor ${corredor} se cansó en la vuelta ${vuelta}? (si/no)`).toLowerCase();

        if (cansado === "si") {
            console.log(`Corredor ${corredor} se detiene en la vuelta ${vuelta}.`);
            break; // Sale del ciclo de vueltas, pasa al siguiente corredor
        } else {
            console.log(` Corredor ${corredor} completó la vuelta ${vuelta}.`);
        }
    }

    console.log(`Corredor ${corredor} terminó su participación.\n`);
}

console.log("Fin de la competencia.");
