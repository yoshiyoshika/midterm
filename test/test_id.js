describe('id: 引数と同じ値を返す関数 id を以下の条件を満たすように定義せよ', function(){
    context("引数に数値が指定された場合、", function(){
        it("引数に指定した数値と同じ値を返す", function(){
            id(5).should.equal(5);
            id(-5).should.equal(-5);
            id(3.14159).should.equal(3.14159);
        });
    });
    context("引数に文字列が指定された場合", function(){
        it("引数に指定した文字列と同じ値を返す", function(){
            id("hello, world").should.equal("hello, world");
            id("").should.equal("");
        });
    });
    context("引数にオブジェクトが与えられた場合", function(){
        var argument = {
                x: 0,
                y: 10
        };
        var ret = id(argument);

        it("引数と同じ属性値をもつ", function(){
            ret.x.should.equal(argument.x);
            ret.y.should.equal(argument.y);
        });

    });
    context("引数に配列が指定された場合", function(){
        var array = [1, 2, 3, 4];        
        var ret = id(array);
        it("返り値の長さは引数と同じ", function(){
            ret.length.should.equal(array.length);
        });

        it("返り値の各要素の値は引数同じ", function(){
            var i = 0;
            while(i < ret.length){
                ret[i].should.equal(array[i]);
                i = i + 1;
            }
        });
    });
});
