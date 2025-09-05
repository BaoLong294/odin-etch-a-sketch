const container = document.querySelector("#container");

const numberOfSquare = 16 * 16;
for (let i = 1; i <= numberOfSquare; i++) {
  const div = document.createElement("div");
  div.style.width = "6.25%";
  div.style.height = "6.25%";
  div.style.borderRight = "1px solid black";
  div.style.borderBottom = "1px solid black";
  div.style.boxSizing = "border-box";
  div.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
  });
  container.appendChild(div);
}

const changeSizeButton = document.querySelector("#change-size-button");

changeSizeButton.addEventListener("click", () => {
  let userInput = prompt("Enter the size of grid (under 100) :");
  let newSize = Number(userInput);

  if (newSize > 0 && newSize <= 100) {
    // Delete old grid
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const squareSize = 100 / newSize;

    // Create new grid with newSize x newSize
    for (let i = 1; i <= newSize * newSize; i++) {
      const div = document.createElement("div");
      div.style.width = squareSize + "%";
      div.style.height = squareSize + "%";
      div.style.borderRight = "1px solid black";
      div.style.borderBottom = "1px solid black";
      div.style.boxSizing = "border-box";
      div.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
      });
      container.appendChild(div);
    }
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
