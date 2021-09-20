"use strict";
// 交差型 => 複数の型を結合する型
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
