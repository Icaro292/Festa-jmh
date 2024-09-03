const imagens = [
    'img/IMG-20240831-WA0132.jpg',
    'img/IMG-20240828-WA0047.jpg',
    'img/IMG-20240902-WA0346.jpg',
    'img/IMG-20240902-WA0059.jpg'
];

let indiceAtual = 0;

function mudarImagem() {
    const imgElement = document.getElementById('imagem');
    
    // Reduz a opacidade para criar o efeito de transição
    imgElement.style.opacity = 0;

    // Após 500ms (tempo da transição), muda a imagem e aumenta a opacidade
    setTimeout(() => {
        imgElement.src = imagens[indiceAtual];
        imgElement.style.opacity = 1;
    }, 500); // 500ms é o tempo da transição

    // Atualiza o índice para a próxima imagem
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

// Muda a imagem a cada 3000ms (3 segundos)
setInterval(mudarImagem, 3000);

// Inicia com a primeira imagem
mudarImagem();
