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

  // "멈춤" 버튼을 클릭할 때 처리되는 함수
  const btnHold = document.querySelector(".btn--hold");
  btnHold.addEventListener("click", function () {
    if (isGamePlaying) {
      // 1. 현재 점수를 플레이어 점수에 추가
      playerScores[activePlayer].textContent =
        parseInt(playerScores[activePlayer].textContent) + currentScore;

      // 2. 플레이어의 점수가 50 이상이면 승리 처리
      if (parseInt(playerScores[activePlayer].textContent) >= 50) {
        playerNames[activePlayer].textContent = "Winner!";
        dice.style.display = "none";
        isGamePlaying = false;
      } else {
        // 3. 플레이어 변경 및 현재 점수 초기화
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

  // "게임 다시하기" 버튼을 클릭할 때 처리되는 함수
  const btnNew = document.querySelector(".btn--new");
  btnNew.addEventListener("click", function () {
    // 게임 상태와 점수 초기화
    // 현재 플레이 중인 플레이어 초기화
    activePlayer = 0;

    // 현재 점수 초기화
    currentScore = 0;
    currentScores[0].textContent = "0";
    currentScores[1].textContent = "0";

    // 플레이어 점수 초기화
    playerScores[0].textContent = "0";
    playerScores[1].textContent = "0";

    // 플레이어 이름 초기화
    playerNames[0].textContent = "Player 1";
    playerNames[1].textContent = "Player 2";

    // 게임 상태 초기화, 주사위 이미지 표시
    isGamePlaying = true;
    dice.style.display = "block";

    // 플레이어 표시 초기화
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
  });
});
