document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('envelope');
  const convite = document.getElementById('convite');
  
  // criar elemento de áudio dinamicamente
  const musica = new Audio('musica.mp3');
  musica.loop = true;

  envelope.addEventListener('click', function() {
    // animação do envelope
    envelope.style.transform = 'rotateX(180deg) translateY(-50px)';
    envelope.style.opacity = '0.5';

    // mostrar o convite
    convite.style.opacity = '1';
    convite.style.transform = 'scale(1)';

    // tocar música apenas no clique direto
    musica.play().catch(() => {
      console.log("Para ativar a música, o usuário deve interagir com a página (clique/tap).");
    });
  });
});