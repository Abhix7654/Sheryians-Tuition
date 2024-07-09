const users = [
        {
          id:1,
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
          profilePicture: "https://i.pinimg.com/736x/10/5b/ec/105beccc09e559a4dc9189d6cf3ff8ab.jpg",
          bio: "Web developer from New York"
        },
          
        {
          id:2,
          name: "Jane Smith",
          age: 25,
          email: "jane.smith@example.com",
          profilePicture: "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
          bio: "Graphic designer from California"
        },
        {
          id:3,
          name: "Michael Johnson",
          age: 35,
          email: "michael.johnson@example.com",
          profilePicture: "https://www.yourtango.com/sites/default/files/image_blog/four-examples-of-military-jargon-corporate-america-want-to-stop.png",
          bio: "Software engineer from Texas"
        },
        {
          id:4,
          name: "Emily Davis",
          age: 28,
          email: "emily.davis@example.com",
          profilePicture: "https://as2.ftcdn.net/v2/jpg/05/55/10/09/1000_F_555100946_MzNduzy7lbBbzlPSz3nwpO4cCA4q9Npm.jpg",
          bio: "UX/UI designer from Florida"
        },
        {
          id:5,
          name: "Muskan Pandey",
          age: 22,
          email: "muskan@example.com",
          profilePicture: "https://lh3.googleusercontent.com/pw/AP1GczMLwcyl90s8tNEADFlOSAJhNPvOQ8NEK7CS_-49BkcHPkyj9VCbBYFYCoScAntsi8JhJnXKqb5x2XeSRzSnjM1CdRKSlZdsQqK3KvjLCIPkrjytyJ6XDOaBefvqulhvXcvc_MhrwkR7qim_w-L8IPOcSLEEs5gZKEcdYztA5zMn9jFh3nfo9OPXvLMUN99EXSA1T5LRYEm5VUxPOxIsk_MX5-KA6p942sg5EA87b7DoMh0yXb13D7rtgGhSetJ0fFsNvoIF1ffG3BHC6aAD7obb3ohIGPUP4EWf7sl5v3msyEWh_23cXSuFojNuRFci_xqjffl5EECr7GdF9RD5F-adeG5IP1oTalGEw8J9UAz8fLwdc4JcqUTykhdx8XfX3hR69akIKSvWlye3fi6fXLrZzZwNeACvQ-xbLth215qKxgx3sJTFOUgDV8mExisDZyKvSyf-tnRsswjh4d9K7Mb_FwC1YIh_EJYWJuqwfmYPlidPehUCsIVUKMLwTpwdCw8uIYm6VxcMCow_Lr1nd7vcOPGQV8yOuWH7y90wjqqsfAR4kQnaf7UDPwD_IvAVht6P7KpKEreVmBCfpI5ZsooodJl8dOQD-X-KhQwnYOqyyY8L88adIYFJv-4URVuSDZRLvQs1Zg1U0uX8cJWehh4-82RiCSPdUcmDqnZW4eNUotTmtjkqLk9MEJpsO5Nqcocy0bslxdcPMGc-qxLDHxtg649QlvLepQu2fFVqwHLJQjHvGp38G2ba-ZbErppQqUNUm8YklC0EeINKtXTgLPyqRoGUz-zyN6-1a7huC7F6VoTpGkxbP_1QM_FWExV6_7v7pAHgcq4_MAOC22wt30FnDwRKvVUechasv7355xD93KIFZarf7YqhPq9DY-88myX71uoiTYxq8c-M9L9kIORwhTvXYK2qeuScJFlXpHETBQLBndVuIf9SWGueq8Evg0obI5POwvxrgcEeAiFdjGcqNcyOrOmR=w944-h1415-s-no?authuser=0",
          bio: "CEO of Google"
        }
      ];
      
      
        const employeElements = document.querySelectorAll('.employe');
        const profileDiv = document.querySelector('.card');
        let previousElement = null;
        

      employeElements.forEach((element,i) => {
        
        element.addEventListener("click", (event) => {
          const elementId = event.target.id - 1;
          const user = users[elementId];

          if (previousElement) {
            previousElement.style.backgroundColor = "";
          }
          element.style.backgroundColor = "rgba(76, 192, 144, 0.466)";


          profileDiv.innerHTML = `
            <div style="background-image: url(${user.profilePicture})" id="profile"></div>
            <h1>${user.name}</h1>
            <h3>${user.bio}</h3>
            <h2>Age: ${user.age}</h2>
            <h4>Email: ${user.email}</h4>
          `;
          previousElement = element;
        });


      })

      
      
     
      