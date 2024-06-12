
// let n=+prompt("enter any no");
// console.log(typeof n);

// let v=prompt("enter user name" );
// console.log(v)
// console.log(`user name is ${v}`);

// var a=prompt();
// a=Number(a);

// var b=prompt();
// b=Number(b);

// console.log(`The sum of ${a} & ${b} is ${a+b}`)


// var a=prompt("enter 1st one marks");
// a=Number(a);
// var b=prompt("enter 2nd one marks");
// b=Number(b);
// var c=prompt("enter 3rd one marks");
// c=Number(c);
// var d=a+b+c;
// var e=((d/300)*100).toFixed(2)

// console.log(`Hello Abhishek your total score is ${a+b+c} with ${e}`);

// var a=prompt("enter temperature in F");
// a=Number(a);
//  alert(`The temperature in C is ${ ((a - 32) * 5/9).toFixed(2)}`)

// var principle=prompt("enter amount");
// principle=Number(principle);

// var year=prompt("enter year");
// year=Number(year);

// var rate=prompt("enter rate");
// rate =Number(rate);

// var amount=(principle*rate*year)/100;

// alert(`The simple intrest of ${principle} in ${year} with the rate of ${rate} is ${amount}`);

// var a = prompt("Enter your Name");
// var b = prompt("Enter your gender (male/female)");
// var c = prompt("Enter your age");
// c = Number(c);

if (c >= 18) {
    if (b === "male") {
        alert(`Congratulations Mr ${a}, you can vote.`);
    } else {
        alert(`Congratulations Mrs ${a}, you can vote.`);
    }
} else {
    if (b === "male") {
        alert(`Oh sorry Mr ${a}, you cannot vote for ${18 - c} more years.`);
    } else {
        alert(`Oh sorry Mrs ${a}, you cannot vote for ${18 - c} more years.`);
    }
}
