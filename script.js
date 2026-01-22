const envelope = document.querySelector(".envelope");

sello.addEventListener("click", () => {
  musica.volume = 0.7;
  musica.play();
  envelope.classList.add("abierto");
});
