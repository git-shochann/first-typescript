class Department {
  // name: string;
  // private で employeesはこのクラス内部からのみアクセス可能 => つまり作成されたインスタンス（オブジェクト）からのみ
  private employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  // id等あとから変更してはいけないことを明確にする為に、read only にする => 安全装置 先の自分が忘れる, チームで役立つ

  // 最初にプロパティを書かずに以下のようにして一括で書くことが出来る
  constructor(private readonly id: string, public name: string) {}

  describe() {
    // テンプレートリテラル 式展開
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// クラスの継承
// 継承元 => ベースクラス
// 継承先 => サブクラス
// オーバーライドも可能
// protected => クラスを継承したサブクラスからでもプロパティへの参照出来る
class ITDepartment extends Department {
  // 継承している場合にコンストラクタを追加するにはsuper();を使う
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// オブジェクトの作成
const accounting = new Department("d1", "Accounting");

console.log(accounting);

// メソッド呼び出し
accounting.describe();

accounting.addEmployee("Sho");
accounting.addEmployee("Taro");

accounting.printEmployeeInformation();

// ゲッター => 値を取得するメソッド
// get mostRecentReport() {
//   if (this.lastReport) {
//     return this.lastReport;
//   }
//   throw new Error('レポートが見つかりません。');
// }

console.log(accounting.mostRecentReport);

// セッター => 値を設定するメソッド
// set mostRecentReport(value: string){
//   if (!value) {
//     throw new Error('正しい値を設定してください。');
//   }
//   this.addReport(value);
// }

// (静的)Static(Static)メソッド => クラスから直接呼び出せる
// 便利メソッドや共通の定数を設定したりで使う

// abstractクラス => インスタンス化されず、他のクラスで継承することしか出来ないクラス
// シングルトンクラス => newでインスタンス化出来ないように作れられたクラス
// それをすることで、常に1つのインスタンスしか存在しないようにすることが出来る
