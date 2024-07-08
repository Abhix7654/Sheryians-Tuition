let arr=[12,34,56,24,15,67];

arr.unshift(23);
arr.push(45);

console.log(arr)


arr.shift();
arr.pop();
console.log(arr);

let x=arr.slice(2,4);
console.log(x)

arr.forEach((ele,idx)=>{
        console.log(idx ,ele);

});

let v=arr.map((ele)=>{
        return ele*10;

});
console.log(v);

let c=arr.filter((ele)=>{
        return ele%2!=0;
})
console.log(c);

let details=[
        {name:"john",
        age:23,
        gender:"female"},{
        name:"john",
        age:23,
        gender:"female"}
         ]
console.log(details[0])
console.log(details[0].age)


details[0].gender="male";
details[0]["gender"]="female";
console.log(details)

delete details[1].age;
console.log(details)

let vrr=[23,24,2455,13,67];

// for of loop
for(let i of vrr){
        console.log(i);
}



let profile={
        name:"Abbisek",
        age:21,

}
// for in lopp
for(let i in profile){
        console.log(i,profile[i]);
}



// spread operator
// array
let arr1=[2,4,7,3,7];
// let arr2=Object.assign([],arr1);
let arr2=[...arr1];
console.log(arr1);
arr2.push(34);
console.log(arr2);


// Destructuring
  let ar=["john",23,"bhopal"];

//   let name=ar[0];
//   let age=ar[1];
//   let city=ar[2];

  let[name,,city]=ar;
  console.log(name,city);




