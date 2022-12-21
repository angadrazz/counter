var a = 10;

function outer(){
    var a = 50;
    var b = 40;
   

    function inner(){
        var a = 1040;
        console.log("inner",a,b);
    }
    inner();
     console.log("outer",a,b);
}

outer();
console.log("Global");