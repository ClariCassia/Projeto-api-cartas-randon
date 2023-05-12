async function criarBaralho() {
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const resposta = await fetch(url);
  return await resposta.json();
}

async function tirarUmaCartaAleatoria(deck_id) {
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const resposta = await fetch(url);
  return await resposta.json();
}

async function tirarUmaCartadobaralho() {
  const baralho = await criarBaralho();
  const carta = await tirarUmaCartaAleatoria(baralho.deck_id);
  console.log(
    "🚀 ~ file: index.js:16 ~ tirarUmaCartadobaralho ~ carta:",
    carta
  );

  const imagemCarta = carta.cards[0].image;
  let descricao = null;
  let valorCarta = carta.cards[0].value;  

  switch (carta.cards[0].value) {
    case "JACK":
      valorCarta = "Valete";
      break;
    case "QUEEN":
      valorCarta = "Dama";
      break;
    case "KING":
      valorCarta = "Rei";
      break;    
    case "ACE":
      valorCarta = "Ás";
      break;
  }

  switch (carta.cards[0].suit) {
    case "HEARTS":
      descricao = "Copas";
      break;
    case "DIAMONDS":
      descricao = "Ouros";
      break;
    case "SPADES":
      descricao = "Espada";
      break;
    case "CLUBS":
      descricao = "Paus";
      break;
  }

  document.getElementById("carta").src = imagemCarta;
  document.querySelector(
    ".descricao"
  ).innerHTML = `${valorCarta} de ${descricao}`;
}

const btnNovaCarta = document.querySelector(".btn-nova-carta");

btnNovaCarta.addEventListener("click", () => {
  tirarUmaCartadobaralho();
});

tirarUmaCartadobaralho();
