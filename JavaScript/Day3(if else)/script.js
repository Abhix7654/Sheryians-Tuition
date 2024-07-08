// break and contniue

var a=prompt("Enter 1st no");
a=Number(a);
var b=prompt("Enter 2nd no");
b=Number(b);
var c=prompt("Enter 3rd no");
c=Number(c);

if(a===b && b===c){
       console.log("all are equal");
}
else if(a===b || b===c || c===a){
        console.log("any two are equal");

}else{
        console.log("all are diferent");
}
