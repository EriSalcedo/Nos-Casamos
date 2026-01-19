const boton = document.getElementById('entrarBtn');
const portada = document.getElementById('portada');
const contenido = document.getElementById('contenido');

boton.addEventListener('click', () => {
  portada.style.display = 'none';
  contenido.classList.remove('oculto');
});
