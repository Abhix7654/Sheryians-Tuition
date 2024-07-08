// Escape sequence
// \n change line
// \t add tab
// \b add backspace
// \r 

//n double slash is used to escape special character and print only one slash
///t will print only two slash

// console.log(`https:\\localhost:3000\\new\\tab`);
// console.log("https:\\localhost:3000\\new\\tab");

// console.log("hello\nworld")

// //methods

// var s="Hello  World";

// console.log(s.length);



// print vs return 

// function sum(a,b){
// sum=a+b;
// return sum;

// }
// console.log(sum(2,3));


// variable length parameter/arguments
// rest operator-- stores the value in the form of array 
// it should be the last parameter int function
// there must not be more than one rest operator

// function hobbies(name,age,...h){
//         console.log(name,age);
//         return h;

// }

// let result=hobbies("joohn",34,99,"ndosmd");

// console.log(result);

// let n=prompt("Enter no");
// n=Number(n);

// function fibonacciSeries(n) {
       
//         let fib = [0, 1];
    
       
//         for (let i = 2; i < n; i++) {
//             fib[i] = fib[i - 1] + fib[i - 2];
//         }
    
//         return fib;
//     }

   

//     console.log(fibonacciSeries(n));


// function primeno(n) {
//         let c = 0;
//         for (let i = 1; i <= n; i++) {
//             if (n % i == 0) {
//                 c++;
//             }
//         }
//         if (c == 2) {
//             console.log("It's prime");
//         } else {
//             console.log("It's not prime");
//         }
//     }
    
//     primeno(n);