# 🐍 SnakeMania: A Vercel Arcade Game 🕹️



Welcome to **SnakeMania**! This classic arcade game, deployed on Vercel, offers a nostalgic and challenging experience. Navigate the snake, eat the food, and grow longer, but be careful not to collide with yourself or the walls! This README provides a comprehensive overview of the project, including its features, technical architecture, and future development plans.

## 🚀 Live Demo

You can play the game live here: [https://snakemaniagame.vercel.app/](https://snakemaniagame.vercel.app/)

## ✨ Features

- **Classic Gameplay:** A faithful recreation of the timeless snake game.
- **Dynamic Scoring:** Your score updates in real time as the snake eats food.
- **High Score Tracking:** The game saves your highest score using **local storage**, so you can compete against yourself.
- **Multiple Difficulty Levels:** Choose from 5 different speeds to match your skill level, from a casual Level 1 to a blistering Level 5.
- **Dual Game Modes:** Switch between two unique themes:
  - **Adventure Mode:** A darker, more rugged aesthetic.
  - **Cartoon Mode:** A vibrant, playful, and colorful theme.
- **Immersive Sound Effects:** Enjoy a complete auditory experience with background music, move sounds, food-eating sounds, and a game-over alert.

## 📂 Project Structure
snakemaniagame/
├── css/
│   ├── style.css             # Styles for Cartoon Mode
│   └── style2.css            # Styles for Adventure Mode
├── static_assets/
│   ├── Logo3.png             # Game logo
│   ├── bg.jpg                # Background for Cartoon Mode
│   ├── bg2.jpg               # Background for Adventure Mode
│   └── music/
│       ├── gameover.mp3      # Game over sound effect
│       ├── food.mp3          # Food eating sound effect
│       ├── move.mp3          # Snake movement sound effect
│       └── music.mp3         # Background music
├── js/
│   └── index.js              # Core game logic and functionality
└── index.html                # Main game page
## 💻 Technical Deep Dive

### **HTML (`index.html`)**

The `index.html` file provides the semantic structure of the game.
- It includes a `DOCTYPE` declaration for modern HTML5.
- A `<meta viewport>` tag ensures the game is responsive and playable on various devices.
- The `id="css_link"` on the `<link>` tag is crucial for dynamic theme switching. JavaScript changes the `href` attribute of this element to switch between `style.css` (Cartoon Mode) and `style2.css` (Adventure Mode).
- The game board is a `div` with the class `board`.
- **Game Controls and Info:** The layout includes elements for the score, high score, a mode-toggle button, and a level-selection dropdown. The scores are updated dynamically via JavaScript.

### **CSS (`style.css` and `style2.css`)**

- **Grid Layout:** The heart of the game board's layout is a **CSS Grid**. The `.board` class is defined with `display: grid;`, and `grid-template-rows` and `grid-template-columns` are set to `repeat(35, 1fr)`. This creates a perfect 35x35 grid where each cell has a fractional unit (`1fr`), ensuring it scales to fill the parent container. This approach is highly efficient for managing the snake's position.
- **Flexbox:** `Flexbox` is used for responsive, one-dimensional layouts, particularly for the navigation bar (`.navbar`) and a more minor element within it (`.navleft`), ensuring elements are aligned and spaced correctly.
- **Styling with Vmin:** The use of **`vmin` (viewport minimum)** units ensures the game board scales proportionally with the smallest side of the viewport, maintaining a consistent aspect ratio on both landscape and portrait screens.
- **Themes and Transitions:** Both CSS files contain distinct styles for the background, snake, head, and food elements, with smooth `transition` effects and `box-shadows` to give the game a polished look and feel. The `id`s for each level option (`#lv1`, `#lv2`, etc.) in the HTML are styled individually in the CSS to give them unique appearances.

### **JavaScript (`index.js`)**

- **Game Loop (`requestAnimationFrame`):** The game's core loop is powered by `window.requestAnimationFrame`. This is a **browser-side asynchronous API** that schedules a function to be called before the browser's next repaint. This is more efficient than `setInterval` as it aligns the game's update rate with the screen's refresh rate, leading to smoother animations and saving battery life on mobile devices.
- **State Management:** Key game variables like `snake` (an array of coordinate objects), `food`, `dir` (direction), `score`, `speed`, and `highscore` are managed in global scope.
- **Event Listeners:** The game listens for `keydown` events to control the snake's direction and a `click` event on the mode-toggle button. It also listens for `change` events on the level select dropdown to adjust the game speed.
- **Collision Detection (`isCollide`):** This function checks two conditions:
  1. **Self-Collision:** It iterates through the snake's body parts to see if the head's coordinates match any other part.
  2. **Boundary Collision:** It checks if the snake's head has moved outside the 35x35 grid.
- **Game Logic (`gameEngine`):** This function is the heart of the game's logic. It's called on every frame of the game loop.
  - **Updating:** It first updates the snake's position by shifting each body part to the position of the one in front of it and then moving the head based on the `dir` variable.
  - **Collision:** It checks for collisions and, if detected, triggers a game-over sequence, including playing a sound, resetting the game state, and displaying an alert.
  - **Food Eating:** If the snake's head is at the same coordinates as the food, the score is incremented, a new snake part is added, and a new food item is placed randomly on the board.
- **DOM Manipulation:** The `gameEngine` function uses `innerHTML` to clear the board and then dynamically creates and appends `div` elements for each snake part and the food item, applying their respective CSS classes (`.snake`, `.head`, `.food`).

### **Core Learning and Takeaways**

- **Efficient DOM Manipulation:** Instead of manipulating individual elements for every snake segment, the entire board is cleared and repainted in a single operation (`board.innerHTML = "";`). This can be a performant approach for simple games like this.
- **The Browser's Role:** Understanding the browser's internal workings is key. When a game loop is running, the **JavaScript Engine** and the **Rendering Engine** work in tandem. `requestAnimationFrame` allows the JavaScript to do its calculations and state updates, and then the Rendering Engine takes over to paint the pixels on the screen, synchronizing the two processes.
- **Asynchronous vs. Synchronous JS:** Event listeners are a classic example of asynchronous JavaScript. They don't block the main **Call Stack** and are pushed to a **Callback Queue** (or Event Queue) to be processed after the main stack is empty. This is crucial for keeping the user interface responsive.
  - 
- **Modular Code:** Separating the CSS for each theme into different files and loading them dynamically promotes code organization and maintainability.
- **Local Storage:** The `localStorage` API provides a simple, effective way to persist data (like high scores) between browser sessions.

## 🔮 Future Scope

- **Improved Collision Detection:** Add obstacles or "walls" on the board to increase the challenge.
- **Pause/Resume Functionality:** Implement a pause button or keyboard shortcut.
- **Customization Options:** Allow players to customize the snake's color or the background image.
- **Player Stats:** Track additional stats like total food eaten or game-over count.
- **Better Mobile Controls:** Implement swipe gestures for a better mobile experience instead of relying solely on keyboard input.
- **Multiplayer Mode:** Introduce a local multiplayer option where two players can compete on the same board.
