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
for(let i of vrr){
        console.log(i);
}

let profile={
        name:"Abbisek",
        age:21,

}
for(let i in profile){
        console.log(i,profile[i]);
}