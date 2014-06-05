describe("findFirstEvenNumber: 引数を一つ取る関数findFirstEvenNumberを、次の条件を満たすように定義せよ。", function(){

    context("引数が配列のとき", function(){
        
        it("最初の偶数の値を返す", function(){
            findFirstEvenNumber([1, 2, 3, 4]).should.equal(2);
            findFirstEvenNumber([2, 1, 3]).should.equal(2);
            findFirstEvenNumber([1, -2, 2, 3]).should.equal(-2);
            findFirstEvenNumber([2]).should.equal(2);
        });

        context("配列の長さが0の場合", function(){
            it("nullを返す", function(){
		var n = (findFirstEvenNumber([]) == null);
		(n).should.equal(true);
            });
        });

        context("要素が全て奇数の場合", function(){
            it("nullを返す", function(){
                (findFirstEvenNumber([1, 3, 5, 7, 9]) == null).should.equal(true);
            });
        });
        
    });
    
});
