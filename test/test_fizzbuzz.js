describe("fizzbuzz: 引数を1つとる関数fizzbuzzを、次の条件を満たすように定義せよ", function(){
    context("引数が数値のとき", function(){
        context("引数の5の倍数のとき", function(){
            it("buzzという文字列を返す", function(){
                fizzbuzz(5).should.equal("buzz");
                fizzbuzz(85).should.equal("buzz");
                fizzbuzz(845).should.equal("buzz");
                fizzbuzz(10).should.equal("buzz");
            });
        });
        
        context("引数が3の倍数のとき", function(){
            it("fizzという文字列を返す", function(){
                fizzbuzz(3).should.equal("fizz");
                fizzbuzz(576).should.equal("fizz");
                fizzbuzz(663).should.equal("fizz");
            });
        });

        context("引数が3の倍数で、しかも5の倍数のとき", function(){
            it("fizzbuzzという文字列を返す", function(){
                fizzbuzz(15).should.equal("fizzbuzz");
                fizzbuzz(4485).should.equal("fizzbuzz");
                fizzbuzz(85215).should.equal("fizzbuzz");
            });
        });
    });

    context("上記以外の場合", function(){
        it("引数の値をそのまま返す", function(){
            fizzbuzz(2).should.equal(2);
            fizzbuzz(13).should.equal(13);
            fizzbuzz(197).should.equal(197);
        });
    });
});
