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