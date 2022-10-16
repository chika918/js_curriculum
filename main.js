/*
【要件】
関数名：createJuice
仮引数名：fruits
処理：
・「〇〇を受け取りました。ジュースにして返します」と出力
・受け取った果物に「ジュース」という文字列を結合する
・結合した結果を呼び出し元に返す
・呼び出し元で、返ってきたジュースを適当な変数に入れて、「〇〇ジュースが届きました」と出力する*/

function createJuice(fruits) {
    console.log(fruits+'を受け取りました。ジュースにして返します')
    return fruits + 'ジュースが届きました'; 
    } 
    console.log(createJuice('みかん'));