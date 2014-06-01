describe("引数を1つとる関数 hinge を以下の条件を満たすように定義せよ", function(){

    context("引数が数値の時", function(){
        context("その値が10以下のとき", function(){
            it("0を返す", function(){
                hinge(10).should.equal(0);
                hinge(0).should.equal(0);
                hinge(-10).should.equal(0);
                hinge(-100).should.equal(0);
            });
        });
        context("その値が10より大きいとき", function(){
            it("引数から10を引いた値を返す", function(){
                hinge(11).should.equal(1);
                hinge(12345).should.equal(12345 - 10);
                hinge(1048576).should.equal(1048576 - 10);
            });
        });
    });

});
