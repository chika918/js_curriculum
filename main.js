//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num){
    if (num % 2 === 0){
        console.log(num + 'は偶数です')
    }
}
isEven(2);
isEven(5);
isEven(12);
isEven(13);
isEven(15);
isEven(18);
isEven(22);