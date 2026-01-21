const sello = document.getElementById("sello");
const musica = document.getElementById("musica");
const envelope = document.querySelector(".envelope");
const invitacion = document.getElementById("invitacion");

sello.addEventListener("click", () => {
  musica.volume = 0.7;
  musica.play();

  envelope.classList.add("abierto");

  setTimeout(() => {
    invitacion.classList.add("visible");
  }, 800);
});
