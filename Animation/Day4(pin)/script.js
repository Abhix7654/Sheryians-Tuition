gsap.to("#page2 h1",{
        transform:"translateX(-80%)",
        
 scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:1,
           
            pin:true,
        }
})
gsap.to("#page3 img",{
        width:"70%",
    
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:1,
           
            pin:true,
        }
})



 const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

// Set initial properties for each circle
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";  // Set the background color of the circles to white
});

// Update the coordinates when the mouse moves
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;  // Update x coordinate
  coords.y = e.clientY;  // Update y coordinate
});

// Function to animate the circles
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  // Set the cursor position
  cursor.style.top = x ;
  cursor.style.left = y ;
  
  // Update the position and scale of each circle
  circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";  // Set left position with an offset
      circle.style.top = y - 12 + "px";   // Set top position with an offset

      
      circle.style.scale = (circles.length - index) / circles.length;  // Scale the circles

      // Update circle's x and y with current coordinates
      circle.x = x;
      circle.y = y;

      // Calculate the position of the next circle
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.5;  // Move x halfway towards the next circle's x
      y += (nextCircle.y - y) * 0.5;  // Move y halfway towards the next circle's y
  });

  // Continuously call animateCircles to create the animation loop
  requestAnimationFrame(animateCircles);

  
}

// Start the circle animation
animateCircles();
