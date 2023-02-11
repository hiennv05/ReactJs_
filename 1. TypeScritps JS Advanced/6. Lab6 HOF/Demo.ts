let sum = (a: number, b: number) => {
    return a + b;
};
let minus = (a: number, b: number) => {
    return a - b;
};
let multiply = (a: number, b: number) => {
    return a * b;
};

let sum_ab = sum(20, 10);

console.log(`Tổng 2 số là: ${sum_ab}`);

//HOF
let calculate = (a: number, b: number, functionParam) => {
    let result = functionParam(a, b);
    console.log(`kết quả: ${result}`);
};
console.log("==== HOF====");

calculate(20, 10, sum);