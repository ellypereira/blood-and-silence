

const storyText = document.getElementById("story-text");
const textBox = document.getElementById("textbox");
const speechBubble = document.getElementById("speech-bubble");
const speechText = document.getElementById("speech-text");

const lucien = document.getElementById("lucien");
const elias = document.getElementById("elias");

//ep2 afinidade já
// 1️⃣ CHAVE GLOBAL
const affinityKey = "bloodAndSilenceAffinity";

// 2️⃣ DECLARA A AFINIDADE PRIMEIRO
let affinity = {
  lucien: 0,
  elias: 0,
};

// 3️⃣ FUNÇÕES
function loadAffinity() {
  const saved = localStorage.getItem(affinityKey);

  if (saved) {
    affinity = JSON.parse(saved);
  } else {
    saveAffinity();
  }
}

function saveAffinity() {
  localStorage.setItem(affinityKey, JSON.stringify(affinity));
}

// 4️⃣ SÓ AGORA CHAMA
loadAffinity();




//ep1 
let stage = 0;

/* CONTROLE DE PERSONAGENS */
function showCharacter(char) {
  char.style.opacity = 1;
}

function hideCharacters() {
  lucien.style.opacity = 0;
  elias.style.opacity = 0;
}

/* BALÃO DE FALA */
function showSpeech(character, text) {
  textBox.style.display = "none";

    // mostra balão
  speechBubble.classList.remove("hidden");
  speechBubble.classList.remove("bubble-left", "bubble-right");
  
  if (character === "lucien") {
    lucien.style.opacity = 1;
    elias.style.opacity = 0;
    speechBubble.classList.add("bubble-right");
  }

  if (character === "elias") {
    elias.style.opacity = 1;
    lucien.style.opacity = 0;
    speechBubble.classList.add("bubble-left");
  }

  speechText.textContent = text;
}

/* NARRADOR */
function narrator(text) {
  speechBubble.classList.add("hidden");
  hideCharacters();
  textBox.style.display = "block";
  storyText.textContent = text;
}

function flashScreen() {
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 600);
}

function changeBackground(image) {
  document.getElementById("background").style.background =
    `url(${image}) center/cover no-repeat`;
}



/* AVANÇO DA HISTÓRIA */
function nextScene() {
  stage++;

  switch(stage) {

    case 1:
      narrator(
        "Eu não deveria estar ali. Sabia disso desde o momento em que decidi sair sem rumo.\n\n" +
        "Os últimos meses tinham sido… pesados demais. Silêncios longos, noites mal dormidas, " +
        "pensamentos que insistiam em não ir embora. Eu só precisava andar. Respirar. Sumir por um instante."
      );
      break;

    case 2:
      narrator(
        "Mas a trilha parecia não terminar nunca. A floresta foi ficando mais densa, o ar mais frio, " +
        "e quando percebi, não reconhecia mais o caminho por onde tinha vindo.\n\n" +
        "Meu celular não tinha sinal. Nenhum som além do vento entre as árvores."
      );
      break;

    case 3:
      narrator(
        "Foi então que senti.\n\n" +
        "Não passos. Não galhos quebrando.\n\n" +
        "Olhares."
      );
      break;

    case 4:
      showSpeech("lucien", "— Hum... Humana perdida?");
      break;

    case 5:
      showSpeech("elias", "— Ela está assustada. Devemos ajudá-la.");
      break;

    case 6:
      narrator(
        "Meu corpo inteiro travou.\n\n" +
        "Eles não pareciam pessoas comuns. Havia algo errado… elegante demais, silencioso demais. " +
        "E ainda assim, estranhamente familiar."
      );
      break;

    case 7:
      narrator(
        "Naquele momento, sem saber, eu tinha acabado de cruzar uma linha.\n\n" +
        "E nada do que viria depois poderia ser desfeito."
      );
      break;
          case 8:
      narrator(
        "Meu instinto gritou mais alto.\n\n" +
        "Antes que eu pudesse pensar melhor, virei o corpo e comecei a correr."
      );
      break;

    case 9:
      narrator(
        "Meus pés escorregaram entre raízes e folhas molhadas.\n\n" +
        "O chão parecia se mover sob mim."
      );
      break;

    case 10:
      narrator(
        "Então tudo aconteceu rápido demais."
      );
      break;

    case 11:
      flashScreen();
      narrator(
        "Uma dor forte na cabeça.\n\n" +
        "O impacto.\n\n" +
        "E depois… nada."
      );
      break;

    case 12:
      document.getElementById("game-container").classList.add("fade-black");
      break;

    case 13:
      document.getElementById("game-container").classList.remove("fade-black");
      changeBackground("assets/bg-quarto-castelo.png");
      narrator(
        "Quando acordei, o silêncio era diferente.\n\n" +
        "Não havia árvores. Nem vento.\n\n" +
        "Eu estava deitada em uma cama desconhecida."
      );
      break;

    case 14:
      narrator(
        "O quarto era grande demais para ser seguro.\n\n" +
        "E elegante demais para ser um sonho."
      );
      break;

          case 15:
      narrator(
        "A dor na minha cabeça ainda pulsava quando abri os olhos.\n\n" +
        "O teto acima de mim não era de madeira velha nem céu aberto.\n\n" +
        "Era alto. Escuro. Elegante."
      );
      break;

    case 16:
      narrator(
        "Lençóis macios. Cortinas pesadas.\n\n" +
        "O ar tinha um cheiro metálico misturado com algo antigo.\n\n" +
        "Eu não estava mais na floresta."
      );
      break;

    case 17:
      showSpeech("lucien", "— Dorminhoca. Confesso que esperava que você acordasse gritando.");
      break;

    case 18:
      showSpeech("elias", "— Lucien… vá com calma. Ela acabou de despertar.");
      break;

    case 19:
      narrator(
        "Meu corpo se enrijeceu.\n\n" +
        "Eles estavam ali. Os mesmos da floresta."
      );
      break;

    case 20:
      showSpeech("lucien",
        "— Pode relaxar. Se quiséssemos te machucar, não teria sido tão… confortável."
      );
      break;

    case 21:
      const elias = document.getElementById("elias");
      elias.src = "assets/Elias/elias.png";
      showSpeech("elias",
        "— Você está segura. Trouxemos você para a mansão após a queda.\n\n" +
        "Sou Elias."
      );
      break;

    case 22:
      lucien.src = "assets/Lucien/lucien.png";
      showSpeech("lucien",
        "— E eu sou Lucien. Não costumo fazer apresentações formais, mas hoje estou de bom humor."
      );
      break;

    case 23:
      narrator(
        "Meu olhar caiu instintivamente sobre meu peito.\n\n" +
        "O colar.\n\n" +
        "Ainda estava comigo."
      );
      break;

    case 24:
      narrator(
        "Quando meus dedos tocaram o pingente, um arrepio percorreu minha espinha.\n\n" +
        "Por um segundo, tive a sensação de não estar sozinha dentro de mim."
      );
      break;

    case 25:
      showSpeech("elias",
        "— Esse colar…\n\n" +
        "Ele reagiu quando você chegou."
      );
      break;

    case 26:
      showSpeech("lucien",
        "— Não reage com qualquer um.\n\n" +
        "Você tem ideia do que está carregando?"
      );
      break;

    /* PRIMEIRA ESCOLHA */
    case 27:
      showChoices([
        {
          text: "— O colar era da minha mãe. Não sei mais nada.",
          affinity: "elias",
          nextStage: 28
        },
        {
          text: "— Isso não é da conta de vocês.",
          affinity: "lucien",
          nextStage: 28
        }
      ]);
      break;

    case 28:
      narrator(
        "O silêncio que se seguiu foi pesado.\n\n" +
        "Como se algo antigo tivesse acabado de despertar."
      );
      break;

    case 29:
      showSpeech("elias",
        "— Então é verdade…\n\n" +
        "Uma Guardiã."
      );
      break;

    case 30:
      showSpeech("lucien",
        "— Ótimo.\n\n" +
        "Isso explica por que a mansão inteira estremeceu quando você chegou."
      );
      break;

    case 31:
      narrator(
        "Lá fora, algo pareceu se mover.\n\n" +
        "As paredes rangeram.\n\n" +
        "E por um breve instante, tive a certeza de que… estava sendo observada."
      );
      break;

    case 32:
      narrator(
        "Sem saber, eu tinha acabado de chamar a atenção das Sombras."
      );
      break;
    
  }
}

//ep2

function showChoices(choices) {
  choicesBox.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("div");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.onclick = () => {
      if (choice.affinity) {
        affinity[choice.affinity]++;
      }
      choicesBox.innerHTML = "";
      stage = choice.nextStage - 1;
      nextScene();
    };
    choicesBox.appendChild(btn);
  });
}

function showNextChapterButton() {
  const btn = document.getElementById("next-chapter-btn");
  btn.classList.remove("hidden");
}

document.getElementById("next-chapter-btn").addEventListener("click", () => {
  window.location.href = "cap2.html";
});


/* CLIQUE PARA AVANÇAR */
document.getElementById("game-container")
  .addEventListener("click", nextScene);
