var Department = /** @class */ (function () {
    // コンストラクタ
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
// オブジェクトの作成
var accounting = new Department("Accounting");
console.log(accounting);
