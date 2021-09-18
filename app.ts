// インターフェース オブジェクトがどんな形,構造であるかを定義する
// TS
interface Person {
  name: string;
  age: number;

  // (引数の名前: 型): 戻り値の型;
  greet(phrase: string): void;
}

// なぜ必要？
// どんな時に使う？

// let user1: Person;

const user1 = {
  name: "sho",
  age: 24,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
