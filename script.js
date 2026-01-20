const sello = document.getElementById("sello");
const musica = document.getElementById("musica");

sello.addEventListener("click", () => {
  musica.play();
  document.getElementById("portada").style.display = "none";
});
