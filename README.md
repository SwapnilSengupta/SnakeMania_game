# SnakeMania – Ek Gaming Katha 🎮

[Play Online on Vercel](https://snakemaniagame.vercel.app/)

---

## Project Overview
**SnakeMania** is a browser-based snake game built with **HTML, CSS, and JavaScript**.  
It features two visual modes (Adventure & Cartoon), five difficulty levels, real-time gameplay, audio effects, and persistent high score tracking.

---

## Folder Structure
```
snake_game/
│
├─ css/
│   ├─ style.css       # Adventure Mode
│   └─ style2.css      # Cartoon Mode
├─ js/
│   └─ index.js        # Game logic, event handling, DOM manipulation
├─ static_assets/
│   ├─ Logo3.png
│   ├─ bg.jpg          # Cartoon Mode background
│   ├─ bg2.jpg         # Adventure Mode background
│   └─ music/
│       ├─ food.mp3
│       ├─ gameover.mp3
│       ├─ move.mp3
│       └─ music.mp3
├─ index.html          # Main HTML file
└─ README.md
```

---

## Features
- **Snake Movement:** Controlled with arrow keys  
- **Food Consumption:** Snake grows when food is eaten  
- **Collision Detection:** Game over if snake hits itself or board boundaries  
- **Difficulty Levels:** 5 levels (Level 1 ⭐ to Level 5 👑)  
- **High Score Tracking:** Persistent using `localStorage`  
- **Mode Toggle:** Switch between Adventure and Cartoon modes  
- **Dynamic Grid Board:** 35x35 CSS Grid  
- **Score Display:** Styled with `box-shadow` and `text-shadow`  
- **Animated Food Glow**  
- **Responsive Design**  

---

## Technical Details

### JavaScript Concepts
- Game loop via `window.requestAnimationFrame(main)`  
- Asynchronous event handling (keyboard, dropdown, toggle)  
- Snake represented as an array of `{x, y}` objects  
- Collision detection for self and boundaries  
- Dynamic food placement  
- DOM manipulation for snake and food elements  
- LocalStorage for high score persistence  

### CSS Concepts
- CSS Grid for board layout  
- Flexbox for navigation and control panel  
- Animations with `box-shadow`, `text-shadow`, `transform: scale()`  
- Responsive units (`vmin`, `vh`, `vw`)  
- Two separate stylesheets for Adventure and Cartoon modes  

### Browser & Rendering Insights
- **Call Stack:** Tracks synchronous code execution  
- **Callback Queue:** Handles asynchronous events  
- **Event Loop:** Moves queued callbacks to call stack  
- **Repainting & Reflow:** Triggered by DOM updates  

---

## Learning Outcomes
- Mastered grid-based layouts  
- Used flexbox for responsive UI  
- Real-time DOM manipulation  
- Understood JavaScript execution flow (synchronous vs asynchronous)  
- Implemented persistent storage with `localStorage`  
- Integrated audio using the Audio API  
- Responsive web design principles  

---

## Future Scope
- Mobile touch controls  
- Obstacles & traps for advanced levels  
- Power-ups and bonus items  
- Online leaderboard integration  
- Enhanced graphics using Canvas or WebGL  
- Dynamic audio themes  

---

## Game Flow Diagrams

### Event Loop & Game Loop
```
[User Input / Timer Events] ---> [Callback Queue] ---> [Event Loop] ---> [Call Stack] ---> [Game Loop] ---> [DOM Updates & Rendering]
```

### Grid & Snake Representation
```
35x35 Grid Board
+-------------------------+
| .  .  .  .  .  .  .    |
| .  S  S  H  .  .  .    |
| .  .  .  F  .  .  .    |
| .  .  .  .  .  .  .    |
+-------------------------+
H = Head, S = Snake, F = Food
```

---

## How to Run Locally
1. Clone the repository:
```
git clone https://github.com/SwapnilSengupta/SnakeMania_game.git
```
2. Navigate to the project folder:
```
cd snake_game
```
3. Open `index.html` in a modern browser  
4. Use arrow keys to play, select difficulty level, enjoy the game  

---

## Credits
- **Developer:** Swapnil Sengupta  
- All assets and logic are custom-made  

---

## Technologies Used
- HTML5, CSS3 (Grid & Flexbox), JavaScript (ES6+)  
- Audio API  
- LocalStorage API  

---

## Links
- [Live Version on Vercel](https://snakemaniagame.vercel.app/)
