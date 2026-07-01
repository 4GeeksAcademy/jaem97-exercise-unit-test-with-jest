// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);

});


// Prueba para la función sum (opcional, pero buena práctica tenerla)
test('adds 7 + 3 to equal 10', () => {
    expect(sum(7, 3)).toBe(10);
});

// Prueba para de Euros a Dólares
test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 3.5 * 1.07
});

// Prueba para de Dólares a Yenes
test("10 Dollars should be approximately 1462.61 Yen", function() {
    // 10 USD / 1.07 = 9.345 Euros -> 9.345 * 156.5 = 1462.6168...
    expect(fromDollarToYen(10)).toBeCloseTo(1462.6168, 4);
});

// Prueba para de Yenes a Libras
test("1000 Yen should be approximately 5.55 Pounds", function() {
    // 1000 JPY / 156.5 = 6.389 Euros -> 6.389 * 0.87 = 5.5591...
    expect(fromYenToPound(1000)).toBeCloseTo(5.5591, 4);
});