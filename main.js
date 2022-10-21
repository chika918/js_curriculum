//問1：以下の要件を満たすように「たい焼きクラス」を作成してください。
/*
【要件】
・クラス名：Taiyaki
・インスタンス化する度に「あんこ」「クリーム」「チーズ」等と中身を変えられるように実装してください。
（コンストラクタで渡ってきた引数をセットする）
・「中身は〇〇です」と中身を出力する関数を作成してください。
*/

class Taiyaki{
    constructor(anko,cream,cheese){
        this.anko = anko;
        this.cream = cream;
        this.cheese = cheese;
    }

    tast(){
        console.log(`中身は${this.anko}です`)
    }
}
let anko = new Taiyaki('あんこ')
let cream = new Taiyaki('クリーム')
let cheese = new Taiyaki('チーズ')
anko.tast();
cream.tast();
cheese.tast();