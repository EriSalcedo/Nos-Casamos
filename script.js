const sello = document.getElementById("sello");
const musica = document.getElementById("musica");

sello.addEventListener("click", () => {
  musica.volume = 0.7;
  musica.play();
});

