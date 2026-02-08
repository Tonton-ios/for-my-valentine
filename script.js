// ==================== PRENOM DYNAMIQUE ====================
const params = new URLSearchParams(window.location.search);
const girlName = params.get("name");
if(girlName){
  document.getElementById("name").textContent = girlName;
}

// ==================== SYSTÈME DE CŒURS ====================
let heartCount = 0;
const heartCountEl = document.getElementById("heartCount");

function addHeart() {
  heartCount++;
  heartCountEl.textContent = heartCount;
  heartCountEl.parentElement.style.animation = "none";
  setTimeout(() => {
    heartCountEl.parentElement.style.animation = "pulse 1s ease-in-out infinite";
  }, 10);
}

// Ajouter des cœurs en cliquant partout
document.addEventListener("click", (e) => {
  if(!e.target.closest("button") && !e.target.closest(".gift-box")) {
    addHeart();
    const clickHeart = document.createElement("div");
    clickHeart.textContent = "❤️";
    clickHeart.style.position = "fixed";
    clickHeart.style.left = e.clientX + "px";
    clickHeart.style.top = e.clientY + "px";
    clickHeart.style.fontSize = "1.5rem";
    clickHeart.style.animation = "floatAwayHeart 1.5s ease-out forwards";
    clickHeart.style.zIndex = 999;
    clickHeart.style.pointerEvents = "none";
    document.body.appendChild(clickHeart);
    setTimeout(() => clickHeart.remove(), 1500);
  }
});

// ==================== MUSIQUE DE FOND ====================
const musicBtn = document.getElementById("musicBtn");
let isMusicOn = false;

musicBtn.addEventListener("click", () => {
  isMusicOn = !isMusicOn;
  musicBtn.classList.toggle("active");
  
  if(isMusicOn) {
    launchSparkles();
  }
});

// ==================== NAVIGATION PAGES ====================
const startBtn = document.getElementById("startBtn");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");

startBtn.addEventListener("click", ()=>{
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

// ==================== BOUTON OUI / NON ====================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", ()=>{
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random()*maxX + "px";
  noBtn.style.top = Math.random()*maxY + "px";
});

yesBtn.addEventListener("click", ()=>{
  response.textContent = "Merci ❤️ Tu rends ma vie magique...";
  response.style.opacity = 1;

  launchHearts();
  launchSparkles();

  setTimeout(()=>{
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    animateText(longText, 50); // lettre par lettre
  },1500);
});

// ==================== LONG TEXTE ROMANTIQUE ====================
const longText = `Depuis que tu es entrée dans ma vie, chaque jour est plus lumineux et plein de sens.
Ton sourire illumine mes journées les plus sombres, ta voix me calme et me rassure comme rien d'autre ne pourrait le faire.
Et la façon dont tu ris, avec cette innocence et cette joie, me rend meilleur et me rappelle pourquoi j'aime être vivant.

Chaque moment que nous partageons est gravé dans mon cœur comme un trésor précieux.
Je veux construire une vie remplie de ces petits instants magiques avec toi.
Je promets d'être là pour toi dans les rires éclatants, dans les larmes silencieuses, et dans chaque folie que la vie nous offrira.

Merci d'être toi, vraiment. Merci de me laisser t'aimer à ma façon, sans condition et sans limite.
Tu es ma personne préférée dans ce monde et dans tous les mondes possibles que je pourrais imaginer.
Avec toi, je veux construire quelque chose d'extraordinaire, une histoire dont on parlera dans les étoiles.

Je t'aime plus que les mots ne peuvent l'exprimer, plus que les étoiles ne peuvent briller, et bien au-delà du code et des rêves.
Tu es mon amour, ma confiance, mon espoir et mon avenir. 💖✨`;

// ==================== ANIMATION LETTRE PAR LETTRE ====================
const romanticTextEl = document.getElementById("romanticText");
const romanticTitleEl = document.getElementById("romanticTitle");
romanticTitleEl.textContent = "Mon amour Lyly  ❤️";

function animateText(text, speed){
  romanticTextEl.textContent = "";
  let i = 0;
  const interval = setInterval(()=>{
    romanticTextEl.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(interval);
  }, speed);
}

// ==================== ANIMATION CŒURS ====================
function launchHearts(){
  for(let i=0;i<40;i++){
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random()*25+20+"px";
    heart.style.animation = "floatUp " + (Math.random() * 2 + 3) + "s linear forwards";
    heart.style.zIndex = 999;
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
  }
}

// ==================== ANIMATION PAILLETTES ====================
function launchSparkles(){
  for(let i=0;i<50;i++){
    const sparkle = document.createElement("div");
    sparkle.textContent = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = Math.random()*50 + "vh";
    sparkle.style.fontSize = Math.random()*12 + 8 + "px";
    sparkle.style.animation = "twinkle " + (Math.random() * 2 + 1.5) + "s ease-in-out forwards";
    sparkle.style.zIndex = 998;
    sparkle.style.pointerEvents = "none";
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),3000);
  }
}

const secretBtn = document.getElementById("secretBtn");
const finalSurprise = document.getElementById("finalSurprise");

// ==================== Confettis ====================
function launchConfetti(){
  const confettiEmojis = ["🎉", "🎊", "🎈", "💝", "💖", "⭐"];
  for(let i=0;i<60;i++){
    const conf = document.createElement("div");
    conf.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
    conf.style.position = "fixed";
    conf.style.left = Math.random()*100 + "vw";
    conf.style.top = "-10vh";
    conf.style.fontSize = Math.random()*24+16 + "px";
    conf.style.animation = "confettiFall " + (Math.random() * 2 + 4) + "s linear forwards";
    conf.style.zIndex = 1000;
    conf.style.pointerEvents = "none";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),6000);
  }
}

// ==================== ANIMATIONS CSS SUPPLÉMENTAIRES ====================
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatAwayHeart {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) scale(0.5);
  }
}

@keyframes twinkle {
  0% { 
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  50% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
    transform: scale(1) translateY(-100px);
  }
}

@keyframes confettiFall {
  0% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(110vh) rotate(720deg); 
    opacity: 0; 
  }
}
`;
document.head.appendChild(style);

// ==================== BOUTON RESTART ====================
const restartBtn = document.getElementById("restartBtn");
if(restartBtn) {
  restartBtn.addEventListener("click", () => {
    location.reload();
  });
}

// ==================== Apparition du bouton secret ====================
const totalTime = longText.length * 50 + 500; // même vitesse que animateText
setTimeout(()=>{
  secretBtn.classList.remove("hidden");
  launchConfetti();
}, totalTime);

// ==================== CONTENU DES CADEAUX ====================
const giftContents = [
  {
    icon: "💌",
    title: "Message d'amour",
    content: "Tu es la plus belle chose qui me soit jamais arrivée. Merci de faire partie de ma vie. 💕"
  },
  {
    icon: "🌹",
    title: "Une rose pour toi",
    content: "Comme une rose, tu es belle, délicate et précieuse. Tu embellis chaque jour de ma vie. 🌹"
  },
  {
    icon: "💎",
    title: "Mon joyau",
    content: "Tu vaux plus que tous les trésors du monde. Tu es unique et irremplaçable. 💎✨"
  },
  {
    icon: "🎵",
    title: "Notre chanson",
    content: "Chaque moment avec toi est comme une mélodie douce et harmonieuse. Notre amour est notre plus belle chanson. 🎵💕"
  }
];

// ==================== ÉVÉNEMENTS CADEAUX ====================
const giftBoxes = document.querySelectorAll(".gift-box");
const giftContent = document.getElementById("giftContent");

giftBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    launchConfetti();
    const gift = giftContents[index];
    giftContent.innerHTML = `
      <p style="font-size: 2rem; text-align: center; margin-bottom: 15px;">${gift.icon}</p>
      <p style="font-weight: 600; color: #ff4d6d; text-align: center; margin-bottom: 15px;">${gift.title}</p>
      <p>${gift.content}</p>
    `;
    giftContent.classList.remove("hidden");
  });
});

// ==================== Message surprise ====================
const surpriseMessages = [
  "Tu es l'amour de ma vie",
  "Chaque jour à tes côtés est un cadeau",
  "Tu fais de moi une meilleure personne",
  "Mon cœur t'appartient",
  "Avec toi, je veux vivre mille aventures",
  "Tu es ma raison de sourire",
  "Ensemble, nous sommes invincibles",
  "Merci de croire en nous",
  "Je ne peux pas imaginer ma vie sans toi",
  "Tu es parfaite exactement comme tu es"
];

// ==================== Action bouton secret ====================
secretBtn.addEventListener("click", ()=>{
  finalSurprise.classList.remove("hidden");
  secretBtn.style.display = "none";
  launchConfetti();
  launchHearts();
  launchSparkles();
  
  // Afficher les messages l'un après l'autre
  const surpriseBox = document.getElementById("surpriseMessage");
  let messageIndex = 0;
  
  const showNextMessage = () => {
    if (messageIndex < surpriseMessages.length) {
      const msg = document.createElement("p");
      msg.textContent = surpriseMessages[messageIndex];
      msg.style.animation = "messageAppear 1s ease-in-out";
      surpriseBox.appendChild(msg);
      messageIndex++;
      setTimeout(showNextMessage, 1500);
    }
  };
  
  showNextMessage();
});
// ==================== INTERACTION GALERIE DES SENTIMENTS ====================
const feelingCards = document.querySelectorAll(".feeling-card");
feelingCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    launchConfetti();
    addHeart();
    
    // Animation de vibration
    card.style.animation = "none";
    setTimeout(() => {
      card.style.animation = "heartBeat 0.6s ease-in-out";
    }, 10);
  });
});

// ==================== INTERACTION SECTION RAISONS ====================
const reasonItems = document.querySelectorAll(".reason-item");
reasonItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    addHeart();
    
    // Animation de mise en évidence
    const originalBg = item.style.background;
    item.style.background = "linear-gradient(135deg, rgba(255, 77, 109, 0.1), rgba(255, 125, 179, 0.1))";
    
    setTimeout(() => {
      item.style.background = originalBg;
  
// ==================== INTERACTION GALERIE DES SENTIMENTS ====================
co"moconst feelingCards = document.querySelectorAll(".feeling-card");
feelingCards.;
feelingCards.forEach((card, index) => {
  card.addEventListener.s  card.addEventListener("click", () =>;
    launchConfetti();
    addHeart();
PPLÉMENTAIRES ==========    
    // AnAj   er    card.style.animation = "tI    setTimeout(() => {
    andom()       card.style.animpa    }, 10);
  });
});

// ==================== INTERACTIOte  }) "✨";
});
sparkleconste.position = "fixed";
    sparkle.style.left = Math.random() * 100 +reasonItems.forEach((item, index) => {
  item.addEventListene    item.addEventListener("click";
    sp    addHeart();
    
    // Animation dstyle.animation =    in    const originalBg = item.style.baar    item.style.background   sparkle.style.poin    
    setTimeout(() => {
      item.style.background = originalBg;
  
// =========kle.remove(), 2000);
   
}     0);
