const calcularPromedioPonderado = require('../app'); // trae la funcion desde app.js

//se haecr una descripcion de la prueba para que en el git se muestre ordenado
describe('Pruebas de Calculo de Promedio Ponderado (1-100)', () => {
    //aqui se verifica si el resultado de las notas es valida
    test('Debe calcular el promedio correcto con notas validas', () => {
        expect(calcularPromedioPonderado(70, 80, 90, 100)).toBe(90);
    });
    //aqui se verifica si una de las notas es menor a 1
    test('Debe lanzar un error si una nota es menor a 1', () => {
        expect(() => calcularPromedioPonderado(0, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
    });
    //aqui se verifica si una de las notas es mayor a 100
    test('Debe lanzar un error si una nota es mayor a 100', () => {
        expect(() => calcularPromedioPonderado(101, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
    });
});