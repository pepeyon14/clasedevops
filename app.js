function calcularPromedioPonderado(n1, n2, n3, n4) {
    if ([n1, n2, n3, n4].some(n => n < 1 || n > 100 || isNaN(n))) {
        throw new Error("Las notas deben ser numeros entre 1 y 100");
    }
    
    const promedio = (n1 * 0.1) + (n2 * 0.2) + (n3 * 0.3) + (n4 * 0.4);
    return parseFloat(promedio.toFixed(2)); //retorna el resultado con dos decimales
}

module.exports = calcularPromedioPonderado; 