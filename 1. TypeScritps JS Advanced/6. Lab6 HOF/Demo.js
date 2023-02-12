var sum = function (a, b) {
    return a + b;
};
var minus = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var sum_ab = sum(20, 10);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(sum_ab));
//HOF
var calculate = function (a, b, functionParam) {
    var result = functionParam(a, b);
    console.log("k\u1EBFt qu\u1EA3: ".concat(result));
};
console.log("==== HOF====");
calculate(20, 10, sum);
calculate(10, 5, minus);
