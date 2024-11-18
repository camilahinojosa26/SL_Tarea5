function calcularSumaNotas(notas) {
    return notas.reduce((suma, nota) => suma + nota, 0);
}

function calcularPromedioNotas(notas) {
    const suma = calcularSumaNotas(notas);
    return suma / notas.length;
}

const notas = [6, 8, 9, 2, 5, 10];

const suma = calcularSumaNotas(notas);
const promedio = calcularPromedioNotas(notas);

console.log('Suma de notas:', suma);
console.log('Promedio de notas:', promedio);