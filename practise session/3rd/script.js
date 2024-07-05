const disp=document.querySelector("#view");
document.querySelectorAll(".img").forEach(img => {
        img.addEventListener("click", () => {
                 const style = window.getComputedStyle(img);
                const bgImage = style.backgroundImage;
                disp.style.display="initial";
                document.querySelector("#view").style.backgroundImage = bgImage;
       
        });
    });
   
   