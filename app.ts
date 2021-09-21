// 交差型 => 複数の型を結合する型

// オブジェクトはインターフェース, それ以外はtype
// 型の定義
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// 交差型は単純に2つの型を結合する
type ElevatedEmployee = Admin & Employee;

// 変数の型宣言をして、オブジェクトを作成する
const e1: ElevatedEmployee = {
  name: "sho",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

// EX2 //

// 以下は alias型 + union型
type Combinable = string | number;

type Numeric = number | boolean;

// 交差型
// union型の結合であれば、共通の型が新しい変数の型になる
type Universal = Combinable & Numeric;

// Type Guard(型ガードの使い方)
// union型を使うときに役立つ

function add_func(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("荷物を乗せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Truck();
const v2 = new Car();

function useVehicle(vehicle: Vehicle) {
  // if (vehicle instanceof Truck)
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions 判別されるunion型 => 楽に出来る

interface Bird {
  // literal型 => birdという文字を許容する
  type: "bird";
  flyingSpeed: number;
}

interface House {
  type: "horse";
  runningSpeed: number;
}

// union型
type Animal = Bird | House;

function moveAnimal(animal: Animal) {
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
const userInputElement = document.getElementById(
  "user-element"
)! as HTMLInputElement;

userInputElement.value = "こんにちは";

// プロパティを柔軟に定義する為にindex型を使う
interface ErrorContainer {
  // index型
  // [名前: プロパティの型]: プロパティの値の型;
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "正しいメアドではありません。",
};
