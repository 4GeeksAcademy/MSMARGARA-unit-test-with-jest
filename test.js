const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);

});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(dollars).toBe(expected); 
});
test("string should return false", function(){
    const result = fromEuroToDollar('str');
    expect(result).toBe(false);
})
test("boolean should return false", function(){
    const result = fromEuroToDollar(true);
    expect(result).toBe(false);
})
test("null should return false", function(){
    const result = fromEuroToDollar(null);
    expect(result).toBe(false);
})
test("Undefined should return false", function(){
    const result = fromEuroToDollar(undefined);
    expect(result).toBe(false)
})
test("Object should return false", function(){
    const result = fromEuroToDollar(Object);
    expect(result).toBe(false)
})



test("One dollar be 146.26 yen", function(){
    const yen = fromDollarToYen(6);
    const expectedYen = 6 * (oneEuroIs.JPY / oneEuroIs.dollars);
    expect(yen).toBe(expectedYen);
  });

test("string should return false", function(){
    const result = fromDollarToYen('str');
    expect(result).toBe(false);
})
test("boolean should return false", function(){
    const result = fromDollarToYen(true);
    expect(result).toBe(false);
})
test("null should return false", function(){
    const result = fromDollarToYen(null);
    expect(result).toBe(false);
})
test("Undefined should return false", function(){
    const result = fromDollarToYen(undefined);
    expect(result).toBe(false)
})
test("Object should return false", function(){
    const result = fromDollarToYen(Object);
    expect(result).toBe(false)
})



test("One yen should be 0.0055 pound", function(){
    const pounds = fromYenToPound(6);
    const expectedPound = 6 * (oneEuroIs.GBP / oneEuroIs.JPY);
    expect(pounds).toBe(expectedPound);
  });

test("string should return false", function(){
    const result = fromYenToPound('str');
    expect(result).toBe(false);
})
test("boolean should return false", function(){
    const result = fromYenToPound(true);
    expect(result).toBe(false);
})
test("null should return false", function(){
    const result = fromYenToPound(null);
    expect(result).toBe(false);
})
test("Undefined should return false", function(){
    const result = fromYenToPound(undefined);
    expect(result).toBe(false)
})
test("Object should return false", function(){
    const result = fromYenToPound(Object);
    expect(result).toBe(false)
})




