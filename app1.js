// Programa que registra el ingreso de 5 estudiantes a un salón.
// Si un estudiante no trae su carné, no puede ingresar.

for (let i = 1; i <= 5; i++) {
    // Pedir al usuario si el estudiante trae carné
    let carnet = prompt(`¿El estudiante ${i} trae su carné? (si/no)`);

    // Convertir respuesta a minúsculas para evitar errores
    carnet = carnet.toLowerCase();

    // Verificar si tiene carné
    if (carnet === "si") {
        console.log(`El estudiante ${i} puede ingresar al salón.`);
    } else {
        console.log(`El estudiante ${i} NO puede ingresar al salón.`);
    }
}
