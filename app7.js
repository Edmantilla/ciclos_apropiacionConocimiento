// Programa que lee el nombre y la edad de 5 personas
// Solo muestra en pantalla aquellas personas que tengan 18 años o más

for (let i = 1; i <= 5; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i}:`);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

    if (edad >= 18) {
        console.log(`${nombre} tiene ${edad} años y es mayor de edad.`);
    } else {
        console.log(`${nombre} tiene ${edad} años y es menor de edad.`);
    }
}
