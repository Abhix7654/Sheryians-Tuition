const btn=document.querySelector('#btn');
const popup=document.querySelector('#popup');
const close=document.querySelector('#close');
const body=document.querySelector('#main');

btn.addEventListener('click',()=>{
    popup.style.display='block';
});

close.addEventListener('click',()=>{    
        popup.style.display='none';
 });

 body.addEventListener('click',(e)=>{
        if(e.target.id==='main'){
                popup.style.display='none';
        }
         });
