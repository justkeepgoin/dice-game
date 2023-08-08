// 변수 설정
document.addEventListener("DOMContentLoaded", function () {
  const dice = document.querySelector(".dice");
  const btnRoll = document.querySelector(".btn--roll");
  const currentScores = document.querySelectorAll(".current-score");
  const playerScores = document.querySelectorAll(".score");
  const playerNames = document.querySelectorAll(".name");
  let activePlayer = 0;
  let currentScore = 0;
  let isGamePlaying = true;

  // 주사위 굴리기 버튼을 클릭할 때 처리되는 함수
  btnRoll.addEventListener("click", function () {
    if (isGamePlaying) {
      // 1. 랜덤한 주사위 숫자 생성
      const diceNumber = Math.floor(Math.random() * 6) + 1;

      // 2. 주사위 이미지 업데이트
      dice.src = `dice-${diceNumber}.png`;

      // 3. 주사위 숫자가 1이나 2가 아니면 현재 점수 업데이트
      if (diceNumber !== 1 && diceNumber !== 2) {
        currentScore += diceNumber;
        currentScores[activePlayer].textContent = currentScore;
      } else {
        // 4. 주사위 숫자가 1이나 2이면 플레이어 변경 및 현재 점수 초기화
        switchPlayer();
      }
    }
  });

  // 플레이어 변경 함수
  function switchPlayer() {
    currentScore = 0;
    currentScores[activePlayer].textContent = "0";
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
  }
});
