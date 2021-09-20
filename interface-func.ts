// インターフェースでもFUNCTION型を実装することが出来る

// まずはFUNCTION型の復習
// type addFn = (a: number, b: number) => number;

// インターフェースで書いてみる
interface addFn {
  (a: number, b: number): number;
}

// 変数の型宣言
let adding: addFn;

adding = (n1: number, n2: number) => {
  return n1 + n2;
};
