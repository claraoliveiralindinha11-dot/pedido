// Função que cria um coração
function criarCoracao() {
  const container = document.getElementById('coracoes-container');

  // Cria o elemento do coração
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '❤️';

  // 1. Posição horizontal aleatória (de 0% a 100% da largura da tela)
  coracao.style.left = Math.random() * 100 + 'vw';

  // 2. Tempo de subida aleatório (entre 3 e 7 segundos para variarem a velocidade)
  const duracao = Math.random() * 4 + 3;
  coracao.style.animationDuration = duracao + 's';

  // 3. Tamanho aleatório para dar profundidade
  const tamanho = Math.random() * 15 + 15; // Entre 15px e 30px
  coracao.style.fontSize = tamanho + 'px';

  // Adiciona o coração na tela
  container.appendChild(coracao);

  // Remove o coração do HTML depois que a animação termina (para não travar a página)
  setTimeout(() => {
    coracao.remove();
  }, duracao * 1000);
}

// Cria um coração a cada 400 milissegundos
setInterval(criarCoracao, 400);