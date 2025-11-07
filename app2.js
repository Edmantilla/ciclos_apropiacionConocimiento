// Programa que pide 10 números y muestra solo los mayores que 50

for (let i = 1; i <= 10; i++) {
    // Pedir un número al usuario
    let numero = parseFloat(prompt(`Ingrese el número ${i}:`));

    // Verificar si el número es mayor que 50
    if (numero > 50) {
        console.log(`El número ${numero} es mayor que 50.`);
    }
}
