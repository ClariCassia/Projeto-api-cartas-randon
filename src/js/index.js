document.querySelector(".btn-nova-carta").addEventListener("click", () => {
  tirarUmaCartadobaralho();
});

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

  const imagemCarta = carta.cards[0].image; 
  let valueCarta = carta.cards[0].value; 
  console.log("tirarUmaCartadobaralho : valueCarta:", valueCarta)
  let nipe = carta.cards[0].suit

  const nipeDaCarta = {
    "HEARTS": "Copas",
    "DIAMONDS": "Ouros",
    "SPADES": "Espada",
    "CLUBS": "Paus",
  }  

  const valorDaCarta = {
    "JACK":"Valete",
    "QUEEN": "Dama",
    "KING":  "Rei",
    "CLUBS": "Paus",
    "ACE": "Ás",
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
  }   
  
  document.getElementById("carta").src = imagemCarta;
  document.querySelector(
    ".descricao"
  ).innerHTML = `${valorDaCarta[valueCarta]} de ${nipeDaCarta[nipe]} `;

}

tirarUmaCartadobaralho();

