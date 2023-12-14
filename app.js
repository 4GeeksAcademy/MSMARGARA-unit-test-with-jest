const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * (156.5 / 1.07);

    if (typeof valueInDollar !== 'number'){
        return false
    }
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * (0.87/ 156.5);

    if (typeof valueInYen !== 'number'){
        return false
    }
    return valueInPound;
}
module.exports = {sum, fromYenToPound, fromDollarToYen, fromEuroToDollar}