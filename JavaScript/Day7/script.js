// sync and async behabiour of JS

setTimeout(()=>{
        console.log("hello");
},1000);

console.log("world");

let a=1;
let x=setInterval(()=>{

        if(a==5){
                clearInterval(x);
        }
        console.log(a);
        a++;
},100);

console.log(x);


// api is given by backend and to implement api in frontend we use the concept of AJAX which is theoretical and to
// implement it we use "fetch api"/axios in frontend
let userapi=`https://jsonplaceholder.typicode.com/users`;

fetch(userapi)
.then((e)=>e.json())
.then((r)=>console.log(r))
.catch((err)=>console.log(error));