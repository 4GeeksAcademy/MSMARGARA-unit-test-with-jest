let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    if (typeof valueInEuro !== 'number'){
        return false
    }
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.usd);

    if (typeof valueInDollar !== 'number'){
        return false
    }
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);

    if (typeof valueInYen !== 'number'){
        return false
    }
    return valueInPound;
}

module.exports = {sum, fromYenToPound, fromDollarToYen, fromEuroToDollar, oneEuroIs}