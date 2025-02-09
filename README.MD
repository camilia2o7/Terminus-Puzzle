# Terminus Puzzle Solver

## Overview
The **Terminus Puzzle Solver** is a web-based tool that allows users to select symbols for three different variables (X, Y, Z) and calculates a solution code based on predefined equations.

## Features
- Dropdown selection for three variables: **Laptop X, Laptop Y, Laptop Z**.
- Real-time symbol preview updates.
- Automatic calculation of the final solution based on:
  - `2X + 11`
  - `(2Z + Y) - 5`
  - `|(Y + Z) - X|`
- Displays results in `XX-XX-XX` format.
- Reference table for symbol values.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/terminus-puzzle-solver.git
   ```
2. Navigate to the project folder:
   ```bash
   cd terminus-puzzle-solver
   ```
3. Open `index.html` in a browser.

## Usage
1. Select symbols from the dropdowns.
2. View the corresponding symbol images.
3. The solution code updates automatically based on selections.

## File Structure
```
terminus-puzzle-solver/
│── index.html        # Main HTML file
│── style.css         # Stylesheet
│── script.js         # JavaScript for calculations & UI updates
│── /images           # Symbol images
```

## Languages Used
- HTML
- CSS
- JavaScript

## Contributing
Feel free to fork this repository and submit pull requests with improvements or new features.
