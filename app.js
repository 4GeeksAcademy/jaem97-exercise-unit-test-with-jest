// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

const oneEuroIs = {
    "USD": 1.07,
    "JPY": 156.5, 
    "GBP": 0.87  
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
};

// 2. Función de Dólares a Yenes
const fromDollarToYen = function(valueInDollar) {
    // Convertimos los dólares a euros, y luego los euros a yenes
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
};

// 3. Función de Yenes a Libras
const fromYenToPound = function(valueInYen) {
    // Convertimos los yenes a euros, y luego los euros a libras
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
};

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


