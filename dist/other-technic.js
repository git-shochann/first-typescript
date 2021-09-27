"use strict";
// 交差型 => 複数の型を結合する型
var _a;
// 変数の型宣言をして、オブジェクトを作成する
const e1 = {
    name: "sho",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
// Type Guard(型ガードの使い方)
// union型を使うときに役立つ
function add_func(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        // 下記はAdminにしかないプロパティなのでエラー発生する => 型ガードで分岐させる
        console.log("Privileges : " + emp.privileges);
    }
    if ("startDate" in emp) {
        // 下記はEmployeeにしかないプロパティなのでエラー発生する => 型ガードで分岐させる
        console.log("startDate :" + emp.startDate);
    }
}
// printEmployeeInformation(e1);
printEmployeeInformation({ name: "a" });
// クラスでも...
class Car {
    drive() {
        console.log("運転中です...");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中です...");
    }
    loadCargo(amount) {
        console.log("荷物を乗せています..." + amount);
    }
}
const v1 = new Truck();
const v2 = new Car();
function useVehicle(vehicle) {
    // if (vehicle instanceof Truck)
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("移動速度: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 100 });
// TSはHTMLの中身まで確認できないので、HTMLElement or NULLかもしれない。
// NULLは!にて絶対にNullではないと回避可能だがエラーは継続する
// そのため、型キャストを使う => 確実な型宣言
// const userInputElement = <HTMLTagElement>(
//   document.getElementById("user-element")!
// );
// ReactならJSXと上記だと衝突してしまうのこの書き方でも可能
const userInputElement = document.getElementById("user-element");
userInputElement.value = "こんにちは";
const errorBag = {
    email: "正しいメアドではありません。",
};
// Optional Chaining
// ネストされたオブジェクトに安全にアクセスする機能, オブジェクトのプロパティの値があるとは限らないとき
// 実行時にエラーが発生されないようにする
// ?.を連結させることで、オブジェクトの値があるかどうかを確認できる
// 裏でif文にコンパイルされている
const fetchedUserData = {
    id: "u1",
    name: "sho",
};
// console.log(fetchedUserData.job && fetchedUserData.job.title); でも可であるが...
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// NULL合体演算子
// nullやundefinedが発生するかもしれないときに使える演算子
const userInput = null;
// nullだった場合は入れたいものを決定することが出来る
// 一番目がfalsyな値ならば、二番目を返す
const storedData = userInput || "DEFAULT";
console.log(storedData);
// falsyな値とは、条件式でfalseとして扱われる値
// false, 0, "", null, undefined
// 空文字を保持したいときは...
// userInputがnull or undefinedであれば、"DEFAULT"を返す
// それ以外であれば、userInputをそのまま返す
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
