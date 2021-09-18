"use strict";
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// combine関数の呼び出し
const combineAges = combine(30, 26);
console.log(combineAges);
const combinedNames = combine("max", "sho");
console.log(combinedNames);
