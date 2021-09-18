"use strict";
// 関数の定義 3つ目の引数としてコールバック関数
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result); // 8の第三引数の処理が呼ばれる
}
// 関数の呼び出し
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// 分けて書いてみる
function cb(result) {
    console.log(result);
}
addAndHandle(10, 20, cb);
