var a =10;
function foo(){
var a = 20;
console.log(a);
console.log(window.a);    
}
console.log(a);
window.foo();