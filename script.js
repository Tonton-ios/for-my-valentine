// ==================== PRENOM DYNAMIQUE ====================
const params = new URLSearchParams(window.location.search);
const girlName = params.get("name");
if(girlName){
  document.getElementById("name").textContent = girlName;
}

// SYSTÈME DE CŒURS 
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
const page4 = document.querySelector(".page4");
const page6 = document.querySelector(".page6");
const page7 = document.querySelector(".page7");

startBtn.addEventListener("click", ()=>{
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

//BOUTON OUI / NON 
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
  response.textContent = "Merci Flory";
  response.style.opacity = 1;

  launchHearts();
  launchSparkles();

  setTimeout(()=>{
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    animateText(longText, 50, ()=>{
      // afficher bouton suivant quand tout le texte est affiché
      document.getElementById('nextFromTextBtn').classList.remove('hidden');
      launchConfetti();
    });
  },1050);
});

//  LONG TEXTE ROMANTIQUE 
const longText = `Aujourd’hui, c’est la Saint-Valentin.

Ce jour où l’on parle d’amour avec des fleurs, des promesses et des mots parfois trop légers. Mais moi, je ne veux pas t’écrire quelque chose de léger. Je veux t’écrire quelque chose de vrai.

Nous ne sommes plus ensemble. Nous avons changé. Nous avons laissé des choses en suspens. Nous n’avons jamais vraiment posé les mots qu’il fallait, au moment où il fallait. Et avec le recul, je comprends que le silence peut parfois faire plus de dégâts que les disputes.

Mais malgré tout cela… ce que j’ai ressenti pour toi n’a jamais été superficiel.

Je t’ai aimée d’un amour conscient. Pas parfait. Pas toujours bien exprimé. Mais sincère.

Un amour qui ne cherchait pas seulement à posséder, mais à comprendre. Un amour qui voulait construire, même quand il ne savait pas toujours comment faire. Un amour qui m’a transformé.

On dit que la Saint-Valentin célèbre les couples. Moi, je crois qu’elle célèbre surtout la vérité des sentiments. Et la vérité, c’est que même si nos chemins se sont séparés, même si nos réalités ont évolué… ce que j’ai éprouvé pour toi reste une des choses les plus authentiques que j’ai vécues.

Je ne t’écris pas pour rouvrir des blessures. Je ne t’écris pas pour te mettre une pression. Je t’écris parce qu’un amour vrai mérite d’être reconnu, même quand il ne prend pas la forme qu’on imaginait.

Tu as été importante. Tu l’es encore d’une manière différente, plus silencieuse, plus mature.

Si nous avons échoué à clarifier certaines choses, je prends ma part. J’aurais pu être plus direct, plus transparent, plus courageux dans certaines conversations. Aimer demande de la maturité émotionnelle, et on apprend parfois trop tard ce que cela implique réellement.

Aujourd’hui, je ne suis plus le même. Et je sais que toi non plus. Mais je garde pour toi un respect profond, et une affection qui ne se résume pas au passé.

En ce jour de Saint-Valentin, je voulais simplement te dire ceci : je ne regrette pas de t’avoir aimée. Je ne renie rien. Parce que cet amour m’a élevé. Il m’a appris. Il m’a construit.

Je te souhaite un amour clair. Stable. Assumé. Un amour où les mots ne restent pas coincés dans le silence.

Et quoi qu’il arrive, je te remercie d’avoir été une partie réelle de mon histoire.

Bonne Saint-Valentin, Flory.`;

//  ANIMATION LETTRE PAR LETTRE 
const romanticTextEl = document.getElementById("romanticText");
const romanticTitleEl = document.getElementById("romanticTitle");
romanticTitleEl.textContent = "Flory ❤️";

function animateText(text, speed, cb){
  romanticTextEl.textContent = "";
  let i = 0;
  const interval = setInterval(()=>{
    romanticTextEl.textContent += text[i];
    i++;
    if(i >= text.length){
      clearInterval(interval);
      if(typeof cb === 'function') cb();
    }
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

//  ANIMATION PAILLETTES 
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

// Confettis 
function launchConfetti(){
  const confettiEmojis = [ "❤️"];
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

//  ANIMATIONS CSS SUPPLÉMENTAIRES 
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

//  BOUTON RESTART
const restartBtn = document.getElementById("restartBtn");
if(restartBtn) {
  restartBtn.addEventListener("click", () => {
    location.reload();
  });
}

// Apparition du bouton secret
const totalTime = longText.length * 50 + 500; // même vitesse que animateText
setTimeout(()=>{
  secretBtn.classList.remove("hidden");
  launchConfetti();
}, totalTime);

//  CONTENU DES CADEAUX 
const giftContents = [
  {
    icon: "💌",
    title: "Message d'amour",
    content: "Flory,Même si nos chemins ont changé, mon cœur ne ment pas. Je t’ai aimée sincèrement. Pas parfaitement. Mais profondément. Et ce que j’ai ressenti pour toi reste une des vérités les plus fortes de ma vie."
  },
  {
    icon: "🌹",
    title: "Une rose pour toi",
    content: "Cette rose représente ce que je n’ai pas toujours su exprimer. L’amour demande du courage, et parfois j’ai manqué de mots. Mais jamais de sentiments. Tu as été une douceur réelle dans mon histoire."
  },
  {
    icon: "💎",
    title: "Mon joyau",
    content: " Tu as été un joyau dans ma vie. Pas parce que tout était parfait,mais parce que c’était rare, authentique, marquant.Certaines personnes laissent un souvenir.Toi, tu as laissé une empreinte."
  },
  {
    icon: "🎵",
    title: "Une mélodie",
    content: "S’il y avait une musique pour nous elle ne serait pas triste. Elle serait intense, profonde, imparfaite… mais vraie.Comme ce que j’ai ressenti pour toi.Et cette mélodie-là, je ne l’oublierai jamais."
  }
];

// ==================== ÉVÉNEMENTS CADEAUX ====================
const giftBoxes = document.querySelectorAll(".gift-box");
const giftContent = document.getElementById("giftContent");

// TRACKER: quand tous les cadeaux ont été ouverts, afficher bouton suivant
let revealedGifts = new Set();
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
    
    // tracker ce cadeau comme ouvert
    revealedGifts.add(index);
    if(revealedGifts.size === giftBoxes.length){
      document.getElementById('nextFromGiftsBtn').classList.remove('hidden');
    }
  });
});

// ==================== MESSAGE SURPRISE ====================
const surpriseMessages = [
  "Parce que tu es vraie.",
  "Parce que tu as marqué ma vie.",
  "Parce que tu m’as fait grandir.",
  "Parce que ta douceur cache une force.",
  "Parce que même nos imperfections avaient du sens.",
  "Parce que tu as une lumière particulière.",
  "Parce que tu m’as inspiré à devenir meilleur.",
  "Parce que nos moments avaient une profondeur rare.",
  "Parce que malgré le temps et les changements, le respect est intact. Et le respect est la base de tout amour mature.",
  "Parce que mon cœur ne sait pas mentir.", 
  "Je t'aime avec tout mon cœur."
];

// Boutons Suivant
const nextFromTextBtn = document.getElementById('nextFromTextBtn');
const nextFromGiftsBtn = document.getElementById('nextFromGiftsBtn');
const nextFromReasonsBtn = document.getElementById('nextFromReasonsBtn');

// Navigation boutons "Suivant"
nextFromTextBtn.addEventListener('click', () => {
  page3.classList.add('hidden');
  page4.classList.remove('hidden');
  nextFromTextBtn.classList.add('hidden');
});

nextFromGiftsBtn.addEventListener('click', () => {
  page4.classList.add('hidden');
  page6.classList.remove('hidden');
  nextFromGiftsBtn.classList.add('hidden');
  
  // Démarrer l'animation des raisons
  animateReasons();
});

// ==================== ANIMATION RAISONS L'UNE APRÈS L'AUTRE ====================
function animateReasons() {
  const reasonItems = document.querySelectorAll('.reason-item');
  
  reasonItems.forEach((item, index) => {
    // Masquer initialement tous les éléments
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    
    // Afficher l'un après l'autre avec délai
    setTimeout(() => {
      item.style.transition = 'all 0.8s ease-out';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
      launchConfetti();
      addHeart();
    }, index * 800); // 800ms entre chaque raison
  });
  
  // Après toutes les raisons, passer à la surprise finale
  const totalTime = reasonItems.length * 800 + 1000;
  setTimeout(() => {
    page6.classList.add('hidden');
    page7.classList.remove('hidden');
    nextFromReasonsBtn.classList.add('hidden');
    launchConfetti();
    launchHearts();
    launchSparkles();
    createNameHeart();
    startFallingPetals();
  }, totalTime);
}

nextFromReasonsBtn.addEventListener('click', () => {
  page6.classList.add('hidden');
  page7.classList.remove('hidden');
  nextFromReasonsBtn.classList.add('hidden');
  launchConfetti();
  launchHearts();
  launchSparkles();
  createNameHeart();
  startFallingPetals();
});

// ==================== NAME HEART ANIMATION ====================
function createNameHeart() {
  const container = document.querySelector('.name-heart');
  if (!container) return;
  container.innerHTML = ''; // Clear previous content
  const name = 'FLORY';
  const particles = 200; // More particles for a fuller heart
  // Use parentElement.offsetWidth to get size even if the element itself hasn't been rendered yet
  const containerSize = container.parentElement.offsetWidth;

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('span');
    particle.classList.add('name-particle');
    particle.textContent = name;

    // Generate a point inside a heart shape using a cardioid equation
    const theta = Math.random() * 2 * Math.PI;
    const scale = containerSize / 2.3; // Adjust scale of the heart to fill the container
    
    // Cardioid equation r = a(1 - sin(theta))
    const r_edge = scale * (1 - Math.sin(theta));
    const r_rand = Math.sqrt(Math.random()) * r_edge; // Use sqrt for a more uniform distribution

    // Convert polar to cartesian
    let x = r_rand * Math.cos(theta);
    let y = -r_rand * Math.sin(theta); // Y is inverted for screen coordinates

    // Center the heart in the container
    const posX = (containerSize / 2) + x;
    const posY = (containerSize / 2.2) + y; // Adjust vertical centering to be more attractive

    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.fontSize = `${Math.random() * 10 + 8}px`; // 8px to 18px
    particle.style.animationDelay = `${Math.random() * 4}s`;
    
    container.appendChild(particle);
  }
}
// ==================== PETAL FALL ANIMATION ====================
function startFallingPetals() {
  const petalEmojis = ['🌸', '🌺', '🌷', '💖'];
  const container = document.querySelector('.page7');
  if (!container) return;

  setInterval(() => {
    const petal = document.createElement('div');
    petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
    petal.classList.add('falling-petal');
    
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.fontSize = `${Math.random() * 15 + 15}px`;
    petal.style.animationDuration = `${Math.random() * 8 + 7}s`; // 7-15 seconds
    petal.style.animationDelay = `${Math.random() * 2}s`;
    
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 15000);
  }, 250);
}
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
    }, 500);
  });
  
  // Animation au survol avec rotation
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(15px) rotateZ(1deg)";
  });
  
  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0)";
  });
});

// ==================== EFFETS SUPPLÉMENTAIRES ====================
// Ajouter des paillettes au hasard
setInterval(() => {
  if(Math.random() > 0.98) {
    const sparkle = document.createElement("div");
    sparkle.textContent = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = "1rem";
    sparkle.style.opacity = "0";
    sparkle.style.animation = "twinkle 2s ease-in-out forwards";
    sparkle.style.zIndex = 100;
    sparkle.style.pointerEvents = "none";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}, 3000);

// ==================== MINI-JEU: ATTRAPE LES CŒURS ====================
let gameActive = false;

// Créer des petits cœurs qui tombent pendant la musique
function startHeartRain() {
  gameActive = true;
  setInterval(() => {
    if(gameActive && isMusicOn) {
      const fallingHeart = document.createElement("div");
      fallingHeart.textContent = "💗";
      fallingHeart.style.position = "fixed";
      fallingHeart.style.left = Math.random() * 100 + "vw";
      fallingHeart.style.top = "-50px";
      fallingHeart.style.fontSize = "2rem";
      fallingHeart.style.cursor = "pointer";
      fallingHeart.style.animation = "heartFall 4s linear forwards";
      fallingHeart.style.zIndex = 200;
      
      fallingHeart.addEventListener("click", (e) => {
        e.stopPropagation();
        addHeart();
        launchConfetti();
        fallingHeart.remove();
      });
      
      document.body.appendChild(fallingHeart);
      setTimeout(() => fallingHeart.remove(), 4100);
    }
  }, 800);
}

// Ajouter l'animation heartFall au CSS
const extraStyle = document.createElement('style');
extraStyle.innerHTML = `
@keyframes heartFall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes infiniteSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glowPulse {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 77, 109, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 77, 109, 0.8), 0 0 60px rgba(255, 125, 179, 0.5);
  }
}

/* Animation pour les boutons */
.music-btn.active ~ .theme-btn, 
.music-btn.active ~ .share-btn {
  animation: wave 1s ease-in-out infinite;
}

/* Effet de glow sur le compteur */
.heart-counter.glowing {
  animation: glowPulse 1s ease-in-out infinite;
}
`;
document.head.appendChild(extraStyle);

// Activer le jeu quand la musique est ON
const originalMusicClick = musicBtn.onclick;
musicBtn.addEventListener("click", () => {
  if(isMusicOn) {
    startHeartRain();
    document.querySelector(".heart-counter").classList.add("glowing");
  } else {
    gameActive = false;
    document.querySelector(".heart-counter").classList.remove("glowing");
  }
});

// ==================== Easter EGG: KONAMI CODE ====================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if(e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if(konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  for(let i = 0; i < 100; i++) {
    setTimeout(() => {
      launchHearts();
      launchSparkles();
      launchConfetti();
    }, i * 100);
  }
}

// ==================== CURSOR SUIVEUR ====================
document.addEventListener('mousemove', (e) => {
  // Créer un petit cœur qui suit la souris occasionnellement
  if(Math.random() > 0.95) {
    const follower = document.createElement("div");
    follower.textContent = "💕";
    follower.style.position = "fixed";
    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
    follower.style.fontSize = "1.2rem";
    follower.style.pointerEvents = "none";
    follower.style.animation = "followerFade 0.8s ease-out forwards";
    follower.style.zIndex = 150;
    document.body.appendChild(follower);
    setTimeout(() => follower.remove(), 800);
  }
});

//  DOUBLE CLICK EFFECT
document.addEventListener('dblclick', (e) => {
  if(!e.target.closest("button")) {
    launchHearts();
    launchSparkles();
  }
});

// ANIMATIONS CSS SUPPLÉMENTAIRES 
const additionalStyles = document.createElement('style');
additionalStyles.innerHTML = `
@keyframes followerFade {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translateY(-30px);
  }
}

@keyframes textPopIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes buttonGrow {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Appliquer l'animation sur les boutons au hover */
button:active {
  animation: buttonGrow 0.3s ease-out;
}

/* Animation de texte au chargement */
h1, h2 {
  animation: textPopIn 0.8s ease-out 0.2s both;
}

/* Effet de profondeur sur la boîte de contenu */
.content {
  perspective: 1000px;
}

/* Animation d'apparition staggerée */
.gift-box:nth-child(1) { animation-delay: 0s; }
.gift-box:nth-child(2) { animation-delay: 0.1s; }
.gift-box:nth-child(3) { animation-delay: 0.2s; }
.gift-box:nth-child(4) { animation-delay: 0.3s; }
`;
document.head.appendChild(additionalStyles);

// ==================== THÈME SOMBRE ====================
const themeBtn = document.getElementById("themeBtn");
let isDarkMode = false;

themeBtn.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if(isDarkMode) {
    document.body.style.background = "linear-gradient(135deg, #2d1b2e 0%, #1a0d2e 50%, #1a0d3d 100%)";
    themeBtn.textContent = "☀️";
    document.body.classList.add("dark-mode");
  } else {
    document.body.style.background = "linear-gradient(135deg, #ffb3d9 0%, #ffcceb 50%, #ffe0f0 100%)";
    themeBtn.textContent = "🌙";
    document.body.classList.remove("dark-mode");
  }
});

// ==================== PARTAGE ====================
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", () => {
  const url = window.location.href;
  if(navigator.share) {
    navigator.share({
      title: "Pour ma Valentine 💖",
      text: "Découvre mon message d'amour spécial!",
      url: url
    });
  } else {
    const text = `${url}`;
    navigator.clipboard.writeText(text);
    alert("Lien copié! Tu peux le partager 💕");
  }
});
