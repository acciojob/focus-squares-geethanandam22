//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    // When hovered, set other squares to Coffee
    squares.forEach((other) => {
      if (other !== square) {
        other.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    // Reset all to Lavender
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });
});