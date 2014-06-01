describe("succ: 次の整数を返す関数 succ を次の条件を満たすように定義せよ", function(){

    context("引数が整数の場合", function(){

        it("0の整数は1である", function(){
            succ(0).should.equal(1);
        });
        
        it("-1の次の整数は0である", function(){
            succ(-1).should.equal(0);
        });
        
        it("9999の次の整数は10000である", function(){
            succ(9999).should.equal(10000);
        });
    });
    
});
