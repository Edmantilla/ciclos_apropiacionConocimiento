// Simulación de un cajero automático
// El programa repite el proceso de retiro hasta que el saldo sea insuficiente

let saldo = parseFloat(prompt("Ingrese su saldo inicial: "));

// Mientras haya saldo disponible
while (saldo > 0) {
    let retiro = parseFloat(prompt("Ingrese el monto a retirar: "));

    // Verificar si el monto a retirar es válido
    if (retiro <= saldo) {
        saldo -= retiro; // Actualizar saldo
        console.log(`Retiro exitoso. Saldo actual: $${saldo}`);
    } else {
        console.log("Saldo insuficiente. Operación cancelada.");
        break; // Sale del ciclo si no hay saldo suficiente
    }
}

// Cuando el ciclo termina
console.log("Fin de la operación.");
