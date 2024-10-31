let jogos = {
  Ação: ["Grand Theft Auto V", "Spider-Man 2", "Red Dead Redemption 2"],
   Corrida: ["Forza Horizon 5", "Gran Turismo 7", "Need for Speed"],
  Esportes: ["EA FC 25", "NBA 2K25", "Rocket League"],
 BattleRoyale: ["Free Fire", "Fortnite", "Call of Duty"],
  Terror: ["Resident Evil 7", "Specimen Zero", "The Last Of Us"]
};

let generoSelecionado = null;
let jogoRecomendado = "";

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textSize(16);
  
  
  fill(90);
  text("Recomendador de Jogos", width / 8, 90);

  textSize(12);
  text("Selecione um gênero para receber uma recomendação", width / 2, 60);

 
  let y = 140;
  for (let genero in jogos) {
    let button = createButton(genero);
    button.position(55, y);
    button.mousePressed(() => recomendarJogo(genero));
    y += 55;
  }
}

function recomendarJogo(genero) {
  generoSelecionado = genero;
  let jogosGenero = jogos[genero];
  jogoRecomendado = random(jogosGenero);
}

function draw() {
  background(120, 194, 209);

  
  fill(0);
  textSize(50);
  text("Recomendador de Jogos", width / 2, 30);
  textSize(17);
  text("Selecione um gênero para receber uma recomendação", width / 2, 80);

  // Exibe recomendação, se houver
  if (generoSelecionado) {
    textSize(25);
    text(`Gênero: ${generoSelecionado}`, width / 2, 220);
    text(`Recomendação: ${jogoRecomendado}`, width / 2, 280);
  }
}