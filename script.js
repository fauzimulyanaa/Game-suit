function getPlihanComputer() {
  pilihan = ["batu", "gunting", "kertas"];

  const computer = Math.floor(Math.random() * pilihan.length);

  if (computer === 0) {
    return pilihan[0];
  } else if (computer === 1) {
    return pilihan[1];
  } else {
    return pilihan[2];
  }
}

function getHasil(comp, player) {
  if (comp == player) {
    return "SERI";
  } else if (player == "batu" && comp == "gunting") {
    return "MENANG!!";
  } else if (player == "gunting" && comp == "kertas") {
    return "MENANG!!";
  } else if (player == "kertas" && comp == "batu") {
    return "MENANG!!";
  } else {
    return "KALAH!!";
  }
}

let playerScore = 0;
let computerScore = 0;

// Ambil elemen tombol reset skor
const resetButton = document.getElementById("reset-score");

// Fungsi untuk mereset skor
function resetScore() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".hasil-player").textContent = playerScore;
  document.querySelector(".hasil-computer").textContent = computerScore;
}

// Event listener untuk klik tombol reset
resetButton.addEventListener("click", resetScore);

const choice = document.querySelectorAll("li img");

choice.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPlihanComputer();
    const pilihanPlayer = pil.className;

    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector(".img-computer");

    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

    const info = document.querySelector(".hasil");
    info.innerHTML = hasil;

    // UPDATE SCORE
    const scorePlayer = document.querySelector(".hasil-player");
    const scoreComputer = document.querySelector(".hasil-computer");

    if (hasil === "MENANG!!") {
      playerScore++;
      scorePlayer.textContent = playerScore;
    } else if (hasil === "KALAH!!") {
      computerScore++;
      scoreComputer.textContent = computerScore;
    }
  });
});
