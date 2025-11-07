let suma = 0;

// Recorre los números del 1 al 100
for (let n = 1; n <= 100; n++) {
    suma += n; // Acumula la suma

    // Si el número es mayor a 90 y además es par
    if (n > 90 && n % 2 === 0) {
        console.log(`Se encontró un número mayor a 90 y par: ${n}`);
        break; // Interrumpe el ciclo
    }
}

console.log(`La suma total hasta ese punto es: ${suma}`);

