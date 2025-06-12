let jogoIniciado = false; // Variável para controlar se o jogo foi iniciado

function setup() {
  createCanvas(400, 400);
}

let xJogador = [15, 15, 15, 15];
let yJogador = [75, 150, 225, 300];
let jogador = ["🐔", "🐖", "🧑‍💼", "👩‍💼"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function draw() {
  if (jogoIniciado) {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    verificaVencedor();
  } else {
    // Tela de espera antes de pressionar ENTER
    background("#D67999");
    textSize(22);
    fill("white");
    textAlign(CENTER, CENTER);
    text("Pressione ENTER para começar", width / 2, height / 2);
    text("PRECIONE AS TECLAS 'A, S , D, F'", 200, 100);
    text("para mover os personagens", 200, 70);
  }
}

function ativaJogo() {
  if (focused == true) {
    background("#A095B3");
  } else {
    background("#D67999");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("rgb(136,109,109)");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop(); // Para o jogo quando um vencedor é encontrado
    }
  }
}

function keyReleased() {
  if (jogoIniciado) {
    for (let i = 0; i < quantidade; i++) {
      if (key == teclas[i]) {
        xJogador[i] += random(20);
      }
    }
  }
}

// Função para detectar quando a tecla Enter é pressionada
function keyPressed() {
  if (keyCode === ENTER && !jogoIniciado) {
    jogoIniciado = true; // Inicia o jogo
    loop(); // Começa a animação do jogo
  }
}
