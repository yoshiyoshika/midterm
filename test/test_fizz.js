describe("fizz: 引数を1つとる関数 fizz を次の条件を満たすように定義せよ。", function(){

    context("引数が数値の場合", function(){
        context("引数が3の倍数の場合", function(){
            it("fizzという文字列を返す", function(){
                fizz(3).should.equal("fizz");
                fizz(576).should.equal("fizz");
                fizz(663).should.equal("fizz");
            });
        });

        context("3の倍数でない場合", function(){
            it("引数の値をそのまま返す", function(){
                fizz(2).should.equal(2);
                fizz(13).should.equal(13);
                fizz(197).should.equal(197);
            });
        });
    });

    context("上記以外の場合", function(){
        it("引数の値をそのまま返す", function(){
            fizz("fizz").should.equal("fizz");
        });
    });
});
