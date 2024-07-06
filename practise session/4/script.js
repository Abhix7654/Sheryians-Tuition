function getRandomColor() {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        const r = getRandomValue();
        const g = getRandomValue();
        const b = getRandomValue();
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    const main=document.querySelector('.main')
    
    
    main.addEventListener('mousemove', ()=> {
        const randomColor = getRandomColor();
       
        document.body.style.backgroundColor = randomColor;
      
    });
    