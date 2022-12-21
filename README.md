# counter
ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
inner 1040 40
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$
ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
inner 1040 40
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
inner 1040 40
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$ node scopes.js
inner 1040 40
outer 50 40
Global

ANGAD KUMAR@LAPTOP-T60HIOKM MINGW64 /c/xampp/htdocs/counter (master)
$



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
