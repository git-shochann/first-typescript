"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result); // => result  : 7.8
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "result: ";
// add関数の呼び出し
add(number1, number2, printResult, resultPhrase);
