var main=document.querySelector('.main');
var cursor=document.querySelector(".cursor");

main.addEventListener('mousemove',function(e){
        var x=e.clientX;
        var y=e.clientY;
        cursor.style.left=x+'px';
        cursor.style.top=y+'px';
       
});