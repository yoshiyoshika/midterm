(function(){
    var body = null;
    var target = null;
/*

    var order = ["../js/lib/mocha.js", "../js/lib/should.min.js"
    
    var scriptElementOf = function(url){
        var ret = document.createElement("script");
        ret.setAttribute("src", url);
        return ret;
    };

    var loadMochaPlugins = function(){
        var elm = scriptElementOf("../js/lib/should.min.js");
        body.appendChild(elm);
    };

    var loadMochaJs = function(){
        var mochaElm = scriptElementOf("../js/lib/mocha.js");
        mochaElm.onload = function(){
            mocha.setup('bdd');
            loadMochaPlugins();
        };
    };

    var prepare = function(name){
    };

    window.onload = function(){
        prepare(body.getAttribute("data-question"));
    };
*/
    var loadTestCase = function(){

        var config = reuiqre.config({

        });
    };
    
    window.onload = function(){
        body = document.querySelector("body");
        target = body.getAttribute("data-question");

        require(["../js/lib/mocha.js"], function(){
            mocha.setup('bdd');
            require(["../js/lib/should.min.js"], function(){
                var jsFile = target + ".js";
                var testCase = "../test/test_" + target + ".js";
                require([jsFile, testCase], function(){
                    mocha.run();
                });
            });
        });
    };
    
})();
