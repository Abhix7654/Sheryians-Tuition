var boxes = document.querySelectorAll('.box');
var image = document.querySelector('.image');



boxes.forEach(box => {
        console.log(box)
        box.addEventListener('dragover', (e) => {
            e.preventDefault();
            
        });

        box.addEventListener('drop', () => {
            box.appendChild(image);
           
        });
 });