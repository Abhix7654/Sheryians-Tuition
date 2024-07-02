// document.getElementById("id");
// document.getElementsByClassName("class");
// document.getElementsByTagName("tag");

const a=document.querySelector("h1"); //single tag
// const a=document.querySelectorAll("h1"); // multiple tag

// console.log(a[0]);
console.log(a.textContent);
console.log(a.innerText);
console.log(a.innerHTML);

a.innerHTML="Abhishek"
console.log(a.innerHTML);
