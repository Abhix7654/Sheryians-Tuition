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