// sync and async behabiour of JS

// setTimeout(()=>{
//         console.log("hello");
// },1000);

// console.log("world");

// let a=1;
// let x=setInterval(()=>{

//         if(a==5){
//                 clearInterval(x);
//         }
//         console.log(a);
//         a++;
// },100);

// console.log(x);


// api is given by backend and to implement api in frontend we use the concept of AJAX which is theoretical and to
// implement it we use "fetch api"/axios in frontend
// let userapi=`https://jsonplaceholder.typicode.com/users`;

// fetch(userapi)
// .then((e)=>e.json())
// .then((r)=>console.log(r))
// .catch((err)=>console.log(error));

// promises

// sum((2,3){
//         console.log(2+3);

// }).then((result=>{
//         console.log(result);
// })
// .catch((error)=>{
//         console.log("error");
// }))

// create promises

// function myPromises(data) {
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 if(data>100){
//                         resolve("data is greater than 100");
//                 }else{
//                         reject("data is less than 100");
//                 }
//         },1000)
//      });
// }

// myPromises(50)
// .then((result)=>{
//         console.log(result);
// })
// .catch((error)=>{
//         console.log(error);
// })

// console.log(myPromises);

// async and wait --> use to convert async code to sync code

async function getusers(){
        try{
                let userapi=`https://jsonplaceholder.typicode.com/users`;
                const Response = await fetch(userapi);
                const data=await Response.json();
                console.log(data);

        }catch{
                console.log("error")
        }
}

getusers();

// Make sure this script is loaded as a module
let userapii = `https://jsonplaceholder.typicode.com/users`;
const Responsee = await fetch(userapii);
const dataa = await Responsee.json();
console.log(dataa);

