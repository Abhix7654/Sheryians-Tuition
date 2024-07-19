const arr = [
        {
            "id": 1,
            "name": "John Doe",
            "image": "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
            "description": "A software engineer with 5 years of experience in web development."
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "image": "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
            "description": "A graphic designer who specializes in branding and illustration."
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "image": "https://www.yourtango.com/sites/default/files/image_blog/four-examples-of-military-jargon-corporate-america-want-to-stop.png",
            "description": "A project manager with a passion for agile methodologies."
        },
        {
            "id": 4,
            "name": "Elly lice",
           "image": "https://as2.ftcdn.net/v2/jpg/05/55/10/09/1000_F_555100946_MzNduzy7lbBbzlPSz3nwpO4cCA4q9Npm.jpg",
            "description": "A data analyst with expertise in big data and machine learning."
        },
        {
            "id": 5,
            "name": "Carol White",
            "image": "https://img.freepik.com/free-photo/portrait-man-working-computer_329181-16258.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
            "description": "A content writer with a knack for creating engaging blog posts."
        }
        
    ];
    function getRandomColor() {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        const r = getRandomValue();
        const g = getRandomValue();
        const b = getRandomValue();
        return `rgb(${r}, ${g}, ${b},0.4)`; 
    }
    
    
    const main = document.getElementById('main');
    
    arr.forEach(person => {
        var box = document.createElement('div'); 
    
        box.innerHTML = `
            <div class="card" id="card1">
                        <div id="image">
                        
       <img class="imgg" src="${person.image}" alt="">                      
         <div style="background-color: ${getRandomColor()}" id="clr" >
                              <h2>TCS</h2>
                        </div></div>
                        <h1>${person.name}</h1>
                       <h3>${person.description}</h3>         
                </div>
              
              
        `;
        main.appendChild(box); 
    });
    