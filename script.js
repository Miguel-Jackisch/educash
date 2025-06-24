// Scroll suave ao clicar em links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Clique em miniaturas troca o vídeo principal
  const thumbs = document.querySelectorAll('.video-thumbs img');
  const mainVideo = document.querySelector('.video-main iframe');
  
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      // Coloca um vídeo diferente conforme o índice (exemplo fictício)
      const videoLinks = [
        'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'https://www.youtube.com/embed/9bZkp7q19f0',
        'https://www.youtube.com/embed/3JZ_D3ELwOQ'
      ];
      mainVideo.src = videoLinks[i] || videoLinks[0];
    });
  });
  