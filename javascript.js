const container = document.querySelector("#container");

const numberOfSquare = 16 * 16;
for (let i = 1; i <= numberOfSquare; i++) {
  const div = document.createElement("div");
  div.style.width = "6.25%";
  div.style.height = "6.25%";
  div.style.borderRight = "1px solid black";
  div.style.borderBottom = "1px solid black";
  div.style.boxSizing = "border-box";
  container.appendChild(div);
}
