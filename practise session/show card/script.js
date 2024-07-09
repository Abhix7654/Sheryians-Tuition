const users = [
        {
          id:1,
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
          profilePicture: "https://via.placeholder.com/150",
          bio: "Web developer from New York."
        },
        {
          id:2,
          name: "Jane Smith",
          age: 25,
          email: "jane.smith@example.com",
          profilePicture: "https://via.placeholder.com/150",
          bio: "Graphic designer from California."
        },
        {
          id:3,
          name: "Michael Johnson",
          age: 35,
          email: "michael.johnson@example.com",
          profilePicture: "https://via.placeholder.com/150",
          bio: "Software engineer from Texas."
        },
        {
          id:4,
          name: "Emily Davis",
          age: 28,
          email: "emily.davis@example.com",
          profilePicture: "https://via.placeholder.com/150",
          bio: "UX/UI designer from Florida."
        }
      ];
      
      
        const employeElements = document.querySelectorAll('.employe');
        const profileDiv = document.querySelector('.card');
        const profilePic = document.getElementById('profile'); 
      
        employeElements.forEach(element => {
          element.addEventListener('click', (event) => {
            const elementId = event.target.id - 1;
            const user = users[elementId];
            
           
              profilePic.style.backgroundImage = `url(${user.profilePicture})`; 
              profileDiv.innerHTML = `
                <div id="profile"></div>
                <h1>${user.name}</h1>
                <h3>${user.bio}</h3>
                <h2>Age: ${user.age}</h2>
                <h4>Email: ${user.email}</h4>
              `;
            
          });
        });
     
      