const disp = document.querySelector("#view");
let i = 0; 
document.querySelectorAll(".img").forEach(img => {
    img.addEventListener("click", (event) => {
        if (i === 0) {
            const style = window.getComputedStyle(img);
            const bgImage = style.backgroundImage;
            disp.style.display = "initial";
            i = 1;
            document.querySelector("#main").style.filter = "blur(8px)";
            disp.style.backgroundImage = bgImage;
            event.stopPropagation();  
        }
    });
});

document.querySelector("#main").addEventListener("click", (event) => {
    if (i === 1 && !disp.contains(event.target)) {
        disp.style.display = "none";
        document.querySelector("#main").style.filter = "none";
        i = 0;
    }
});
 
