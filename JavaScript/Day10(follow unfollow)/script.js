const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener("click", ()=>{
        if(h2.innerHTML =="Strange"){
                h2.innerHTML = "Friends";
                h2.style.color = "green";
                button.style.backgroundColor = "green";
                button.innerHTML = "Unfollow";
        }
        else{
                h2.innerHTML = "Strange";
                h2.style.color = "tomato";
                button.style.backgroundColor = "tomato";
                button.innerHTML = "Follow";
        }
})