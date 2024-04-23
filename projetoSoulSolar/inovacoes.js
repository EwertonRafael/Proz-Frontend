const toggleButton = document.getElementById('toggle-video');
const videoContainer = document.getElementById('video-container');

toggleButton.addEventListener('click', () => {
  if (videoContainer.style.display === 'none') {
    videoContainer.style.display = 'block'; // Mostra o vídeo quando estava oculto
  } else {
    videoContainer.style.display = 'none'; // Oculta o vídeo quando estava visível
  }
});
