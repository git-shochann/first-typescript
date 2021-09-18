"use strict";
// object型の練習
const person = {
    name: "taro",
    age: 3,
    hobbies: ["Running", "Eating"],
    role: [1, "author"],
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
person.role.push(2, "author");
