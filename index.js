let userInput = document.querySelector("#userInput");
let playBtn = document.querySelector("#playBtn");
let userHand = document.querySelector("#userHand");
let computerHand = document.querySelector("#computerHand");
let userChoice = document.querySelector("#userChoice");
let computerChoice = document.querySelector("#computerChoice");
let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#computerScore");
let round = document.querySelector("#round");
let celebration = document.querySelector("#celebration");
let celebrationClose = document.querySelector("#celebrationClose");
let winningMessage = document.querySelector("#winningMessage");
let resetBtn = document.querySelector("#resetBtn");
let score = document.querySelector("#score");


let userpts = 0, computerpts = 0, roundCount = 0;

let arr = ['rock', 'paper', 'scissors'];

playBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let value = userInput.value.toLowerCase().trim();
  userInput.value = "";

  userChoice.className = "hidden";

  if (value === "rock") {

    userHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-cyan-400/20 to-cyan-400/5
              border border-cyan-300/20
              shadow-[0_0_30px_rgba(34,211,238,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✊
    </span>

  </div>
`;

    let computerResponse = computerMove();

    if (computerResponse === "paper") {

      computerpts++;
      computerScore.textContent = `${computerpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }

    if (computerResponse === "scissors") {

      userpts++;
      userScore.textContent = `${userpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }
  }


  if (value === "paper") {

    userHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-emerald-400/20 to-emerald-400/5
              border border-emerald-300/20
              shadow-[0_0_30px_rgba(52,211,153,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✋
    </span>

  </div>
`;

    let computerResponse = computerMove();

    if (computerResponse === "scissors") {

      computerpts++;
      computerScore.textContent = `${computerpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }


    if (computerResponse === "rock") {

      userpts++;
      userScore.textContent = `${userpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }
  }


  if (value === "scissors") {

    userHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-purple-400/20 to-purple-400/5
              border border-purple-300/20
              shadow-[0_0_30px_rgba(168,85,247,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✌️
    </span>

  </div>
`;

    let computerResponse = computerMove();

    if (computerResponse === "paper") {

      userpts++;
      userScore.textContent = `${userpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }

    if (computerResponse === "rock") {

      computerpts++;
      computerScore.textContent = `${computerpts}`;

      roundCount++;
      round.textContent = `${roundCount}`;

      if (roundCount === 5) {

        if (userpts > computerpts) {
          showCelebration(
            "YOU WON! 🏆",
            "You scored more points than the computer!"
          );
        } else {
          showLossMessage();
        }

        return;
      }
    }
  }

})


function computerMove() {

  let random = Math.floor(Math.random() * arr.length);

  if (arr[random] === "rock") {

    function rock() {

      computerChoice.className = "hidden";

      computerHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-cyan-400/20 to-cyan-400/5
              border border-cyan-300/20
              shadow-[0_0_30px_rgba(34,211,238,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✊
    </span>

  </div>
`;

      return "rock";

    }

    return rock();

  }

  else if (arr[random] === "paper") {

    function paper() {

      computerChoice.className = "hidden";

      computerHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-emerald-400/20 to-emerald-400/5
              border border-emerald-300/20
              shadow-[0_0_30px_rgba(52,211,153,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✋
    </span>

  </div>
`;

      return "paper";
    }

    return paper();

  }

  else {

    function scissors() {

      computerChoice.className = "hidden";

      computerHand.innerHTML = `
  <div class="w-20 h-20 md:w-24 md:h-24
              rounded-2xl
              bg-gradient-to-br from-purple-400/20 to-purple-400/5
              border border-purple-300/20
              shadow-[0_0_30px_rgba(168,85,247,0.12)]
              flex items-center justify-center
              backdrop-blur-xl
              animate-[reveal_0.35s_ease-out]">

    <span class="text-5xl md:text-6xl
                 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
      ✌️
    </span>

  </div>
`;

      return "scissors";
    }

    return scissors();

  }
}


function showCelebration(title, message) {

  celebration.classList.remove("hidden");
  celebration.classList.add("flex");

  celebration.querySelector("h1").textContent = "YOU WON!";

  winningMessage.textContent = message;

  let titleText = celebration.querySelector("#celebrationTitle");

  if (titleText) {
    titleText.textContent = title;
  }
}


function showLossMessage() {

  celebration.classList.remove("hidden");
  celebration.classList.add("flex");

  celebration.querySelector("h1").textContent = "YOU LOST!";

  let titleText = celebration.querySelector("#celebrationTitle");

  if (titleText) {
    titleText.textContent = "Better luck next time! 😭";
  }

  winningMessage.textContent =
    "The computer got you this time. Run it back and take the rematch!";
}


celebrationClose.addEventListener("click", () => {

  celebration.classList.add("hidden");
  celebration.classList.remove("flex");

});

resetBtn.addEventListener('click', () => {
  userScore.textContent = "0";
  computerScore.textContent = "0";
  score.innerHTML = `<p class="text-lg
                    font-bold
                    mt-0.5">

            <span id="round">0</span>

            <span class="text-gray-600">
              /
            </span>

            <span>5</span>

          </p>`;

  computerHand.innerHTML = `<div class="flex flex-col">
  <div id="computerHand" class="hand h-24 md:h-28
                        flex items-center
                        justify-center
                        text-6xl md:text-7xl
                        relative">

              ❔

            </div>


            <p id="computerChoice" class="text-xs
                      text-gray-500">
              Waiting...
            </p></div>`;

  userHand.innerHTML = `<div class="flex flex-col">
  <div id="userHand" class="hand h-24 md:h-28
                        flex items-center
                        justify-center
                        text-6xl md:text-7xl
                        relative">

              ❔

            </div>


            <p id="userChoice" class="text-xs
                      text-gray-500">
              Waiting...
            </p></div>`;

  userInput.value = "";
})