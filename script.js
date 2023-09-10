// Pilihan Komputer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

// Rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "gunting") return comp == "kertas" ? "MENANG!" : "KALAH!";
  if (player == "kertas") return comp == "batu" ? "MENANG!" : "KALAH!";
}

function acak() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 2000) return clearInterval;
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) return (i = 0);
  }, 100);
}

function putar() {
    let info = document.querySelector(".info");
    let kata = ["SERI!", "MENANG!", "KALAH!"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 2000) return clearInterval;
        info.innerHTML = kata[i++];
        if (i == kata.length) return (i = 0);
    },100)
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    acak();
    putar();
    setTimeout(function () {
      const ubahGambar = document.querySelector(".info");
      ubahGambar.innerHTML = hasil;

      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");
    }, 2000);
  });
});

let kucingKlik = document.querySelector(".kucing");
let audioKlik = document.querySelector(".suara");

kucingKlik.addEventListener("click", function(){
    if (audioKlik.paused) {
        audioKlik.play();
      } else {
        audioKlik.pause();
        audioKlik.currentTime = 0;
        audioKlik.play();
      }
});