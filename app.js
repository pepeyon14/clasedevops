function calcularPromedioPonderado(n1, n2, n3, n4) {
    if ([n1, n2, n3, n4].some(n => n < 1 || n > 100 || isNaN(n))) { //se crea una validacion de datos que mediante el some verifica que las notas este entre el 1 y el 100. 
        throw new Error("Las notas deben ser numeros entre 1 y 100");// tambien esta el isNaN que es para que no accepte valores que no sean numeros 
    }
    
    const promedio = (n1 * 0.30) + (n2 * 0.2) + (n3 * 0.3) + (n4 * 0.4);
    return parseFloat(promedio.toFixed(2)); //retorna el resultado con dos decimales
}

if (typeof module !== 'undefined' && module.exports) {
    // si detecta que el entorno es node.js, exporta la funcion para que le pipeline pueda usarla en el test de jest
    module.exports = calcularPromedioPonderado;//el module exporta la funcion para que jest lo pueda ocupar en le test
} 