// Define perspectives for left and right animations
const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 }
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 }
];

// Select all elements with class "item" inside the left and right containers
const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

// Function to apply 3D translation to a target element based on perspective
const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
};

// Function to animate the cards based on their current counter and perspective array
const animateCards = (c, perspectives) => {
  const count = parseInt(c.dataset.counter);  // Get the current counter value from data attribute
  translateImage(c, perspectives[count - 1]); // Translate the card based on the current perspective
  c.dataset.counter = (count === 6 ? 1 : count + 1).toString();  // Update the counter, wrapping back to 1 if it reaches 6
};

// Function to start the animation loop
const loop = () => {
  setInterval(() => {  // Repeat the animation every 1000 milliseconds (1 second)
      leftCards.forEach((c) => {
          animateCards(c, leftPerspectives);  // Animate each left card
      });

      rightCards.forEach((c) => {
          animateCards(c, rightPerspectives);  // Animate each right card
      });
  }, 1000);
};

// Start the animation loop
loop();
