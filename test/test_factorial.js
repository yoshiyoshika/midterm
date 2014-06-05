describe("factorial: 引数を1つとる関数factorialを、次の条件を満たすように定義せよ。", function(){

    context("引数が自然数の場合", function(){
        it("引数に指定された数値の階乗を返す", function(){
            factorial(1).should.equal(1);
            factorial(2).should.equal(2);
            factorial(3).should.equal(6);
            factorial(10).should.equal(3628800);
        });
    });

    context("引数が正の実数の場合", function(){
        it("小数点以下を切り捨て、その結果の階乗を返す", function(){
            factorial(1.5).should.equal(1);
            factorial(2.71828).should.equal(2);
            factorial(3.14159).should.equal(6);
            factorial(10.9999).should.equal(3628800);
        });
    });

    context("引数が0以下の数の場合", function(){
        it("nullを返す", function(){
            (factorial(0) == null).should.equal(true);
            (factorial(-1) == null).should.equal(true);
            (factorial(-10.9999) == null).should.equal(true);
        });
    });

    context("引数が数値以外の場合", function(){
        it("nullを返す", function(){
            (factorial("hello") == null).should.equal(true);
            (factorial({}) == null).should.equal(true);
            (factorial([]) == null).should.equal(true);
        });
    });
    
});
