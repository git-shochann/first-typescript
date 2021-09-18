"use strict";
// なぜ必要？
// どんな時に使う？
// let user1: Person;
const user1 = {
    name: "sho",
    age: 24,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
