const btnP1 = document.querySelector("#btnPlayer1")
const p1Score = document.querySelector("#ptPlayer1")
const btnP2 = document.querySelector("#btnPlayer2")
const p2Score = document.querySelector("#ptPlayer2")
const btnReset = document.querySelector("#btnReset")
const victoryPoint = document.querySelector("#ptVitoriaSelect")

btnP1.addEventListener("click", () => {
  let p1 = p1Score.innerText;
  p1++;

  p1Score.innerText = p1;

  if (p1Score.innerText == victoryPoint.value) {
    endGame(btnP1, btnP2, p1Score, p2Score);
  }
})

btnP2.addEventListener("click", () => {
  let p2 = p2Score.innerText;
  p2++;

  p2Score.innerText = p2;

  if (p2Score.innerText == victoryPoint.value) {
    endGame(btnP2, btnP1, p2Score, p1Score);
  }
})

const endGame = (winner, loser, winnerScore, loserScore) => {
  winnerScore.style.color = "green";
  loserScore.style.color = "red";

  winner.disabled = true;
  loser.disabled = true;
}

btnReset.addEventListener("click", resetGame)

victoryPoint.addEventListener("change", resetGame)

function resetGame() {
  btnP1.disabled = false;
  btnP2.disabled = false;

  p1Score.style.color = "black"
  p2Score.style.color = "black"

  p1Score.innerHTML = 0;
  p2Score.innerText = 0;
}
