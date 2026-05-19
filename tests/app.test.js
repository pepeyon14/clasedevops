// const calcularPromedioPonderado = require('../app'); // trae la funcion desde app.js
const { calcularPromedioPonderado } = require('../index'); // Trae la función desde index.js

describe('Pruebas de Cálculo de Promedio Ponderado', () => {
    
    test('Debe calcular el promedio correcto con notas y porcentajes válidos', () => {
        const notas = [5.0, 6.0];
        const porcentajes = [0.4, 0.6];

        expect(calcularPromedioPonderado(notas, porcentajes)).toBe(5.6);
    });

    test('Debe retornar 0 si los arreglos están vacíos', () => {
        expect(calcularPromedioPonderado([], [])).toBe(0);
    });

    test('Debe retornar 0 si falta algún parámetro', () => {
        expect(calcularPromedioPonderado(null, null)).toBe(0);
    });
});


//se haecr una descripcion de la prueba para que en el git se muestre ordenado
// describe('Pruebas de Calculo de Promedio Ponderado (1-100)', () => {
//     //aqui se verifica si el resultado de las notas es valida
//     test('Debe calcular el promedio correcto con notas validas', () => {
//         expect(calcularPromedioPonderado(70, 80, 90, 100)).toBe(90);
//     });
//     //aqui se verifica si una de las notas es menor a 1
//     test('Debe lanzar un error si una nota es menor a 1', () => {
//         expect(() => calcularPromedioPonderado(0, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
//     });
//     //aqui se verifica si una de las notas es mayor a 100
//     test('Debe lanzar un error si una nota es mayor a 100', () => {
//         expect(() => calcularPromedioPonderado(101, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
//     });
// });