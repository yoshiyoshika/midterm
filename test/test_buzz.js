describe("buzz: 引数を1つとる関数 buzz を次の条件を満たすように定義せよ。", function(){

    context("引数が数値の場合", function(){
        context("引数が5の倍数の場合", function(){
            it("buzzという文字列を返す", function(){
                buzz(5).should.equal("buzz");
                buzz(85).should.equal("buzz");
                buzz(845).should.equal("buzz");
                buzz(10).should.equal("buzz");
            });
        });

        context("5の倍数でない場合", function(){
            it("引数の値をそのまま返す", function(){
                buzz(2).should.equal(2);
                buzz(13).should.equal(13);
                buzz(197).should.equal(197);
            });
        });
    });

    context("上記以外の場合", function(){
        it("引数の値をそのまま返す", function(){
            buzz("buzz").should.equal("buzz");
        });
    });
});
