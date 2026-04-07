const calcularPromedioPonderado = require('../app');

describe('Pruebas de Calculo de Promedio Ponderado (1-100)', () => {
    
    test('Debe calcular el promedio correcto con notas validas', () => {
        expect(calcularPromedioPonderado(70, 80, 90, 100)).toBe(90);
    });

    test('Debe lanzar un error si una nota es menor a 1', () => {
        expect(() => calcularPromedioPonderado(0, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
    });

    test('Debe lanzar un error si una nota es mayor a 100', () => {
        expect(() => calcularPromedioPonderado(101, 50, 50, 50)).toThrow("Las notas deben ser numeros entre 1 y 100");
    });
});