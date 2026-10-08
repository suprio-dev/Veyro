# 🎮 Veyro

### A modern and interactive Rock Paper Scissors game built with JavaScript.

Play against the AI in a **Best-of-5** battle with dynamic results, score tracking, round management, and interactive UI feedback.

**Live Demo:** [Veyro](https://suprio-dev.github.io/Veyro/)

---

## ✨ Features

- Player vs AI gameplay
- Rock, Paper, and Scissors choices
- Best-of-5 game system
- Real-time score tracking
- Dynamic round results
- Win, lose, and tie detection
- Interactive hand animations
- Game result celebration
- Reset and replay functionality
- Responsive dark neon UI

---

## 🛠️ Tech Stack

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| HTML5        | Structure               |
| Tailwind CSS | Styling & responsive UI |
| JavaScript   | Game logic & interactions |

---

## 🔄 How It Works
```text
Player Chooses
      ↓
  AI Chooses
      ↓
Compare Choices
      ↓
Determine Result
      ↓
Update Score
      ↓
Next Round
      ↓
First to 3 Wins
      ↓
Game Over
```

The player selects **Rock, Paper, or Scissors**, while the AI generates its own choice. JavaScript compares both choices, determines the winner, updates the scores, and moves the game to the next round.

The game ends when either the player or AI reaches **3 points**, making it a Best-of-5 match.

---

## 🧠 Game Logic

The core game logic is handled using JavaScript conditional statements.

```text
Rock beats Scissors
Scissors beats Paper
Paper beats Rock
```

If both the player and AI choose the same option, the round is counted as a **tie** and the score remains unchanged.

---

## 🎯 Why I Built It

This project was built to strengthen my understanding of:

- DOM manipulation
- Event listeners
- JavaScript functions
- Conditional logic
- Random number generation
- Game state management
- Score tracking
- Dynamic UI updates
- Handling user interactions

---

## 🚀 Run Locally
```bash
git clone https://github.com/suprio-dev/Veyro.git
cd Veyro
```

Open `index.html` in your browser.

No build tools or installation required.

---

## 📌 Project Status

**Completed — v1.0**

A fun JavaScript project built to practice game logic, DOM manipulation, and interactive UI development.