# Etch-a-Sketch

A simple browser-based drawing application inspired by the classic Etch A Sketch toy. This project allows users to create a grid of squares and "draw" on it by hovering their mouse over the grid cells.

## Features

- **Dynamic Grid Generation**: The application starts with a default 16x16 grid.
- **Customizable Grid Size**: Users can click the "Change size" button to create a new grid of any size between 1 and 100 (e.g., 50x50, 80x80).
- **Interactive Drawing**: Hovering over a square changes its background color, simulating a drawing action.
- **Responsive Design**: The grid maintains its aspect ratio and scales with the browser window.

## How to Use

1.  **Open `index.html`**: Open the `index.html` file in your web browser.
2.  **Start Drawing**: Move your mouse over the grid to start "drawing".
3.  **Change Grid Size**: Click the "Change size" button. A prompt will appear asking for a new grid size.
4.  **Enter Size**: Type a number between 1 and 100 to set the new grid dimensions (e.g., entering `64` will create a 64x64 grid).
5.  **Enjoy!**

## Technologies Used

- **HTML5**: For the basic page structure.
- **CSS3**: For styling the grid and the control button.
- **JavaScript**: For the core logic, including grid generation, user input handling, and event listeners for the drawing functionality.

## Project Structure

- `index.html`: The main HTML file for the project.
- `styles.css`: The CSS file for all styling.
- `javascript.js`: The JavaScript file containing the application's logic.
