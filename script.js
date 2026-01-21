const sello = document.getElementById("sello");
const musica = document.getElementById("musica");
const envelope = document.querySelector(".envelope");
const invitacion = document.getElementById("invitacion");

sello.addEventListener("click", () => {
  musica.volume = 0.7;
  musica.play();

  envelope.classList.add("abierto");

  setTimeout(() => {
    envelope.style.display = "none";
    invitacion.classList.add("visible");
  }, 2000);
});

