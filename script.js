// ==================== PRENOM DYNAMIQUE ====================
const params = new URLSearchParams(window.location.search);
const girlName = params.get("name");
if(girlName){
  document.getElementById("name").textContent = girlName;
}

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

  setTimeout(()=>{
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    animateText(longText, 50); // lettre par lettre
  },1500);
});

// ==================== LONG TEXTE ROMANTIQUE ====================
const longText = `Depuis que tu es entrée dans ma vie, chaque jour est plus lumineux. 
Ton sourire, ta voix, et même la façon dont tu ris me rendent meilleur.
Je veux que chaque instant que nous partageons soit un souvenir précieux.
Je promets d’être là pour toi dans les rires, les larmes, et chaque folie que la vie nous offrira.
Merci d’être toi, et de me laisser t’aimer à ma façon.
Tu es ma personne préférée dans ce monde et dans tous les mondes possibles.
Je t’aime plus que les mots, plus que les étoiles, et bien au-delà du code et des rêves. ❤️`;

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
  for(let i=0;i<35;i++){
    const heart = document.createElement("div");
    heart.textContent = "";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random()*20+20+"px";
    heart.style.animation = "floatUp 4s linear forwards";
    heart.style.zIndex = 999;
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),4000);
  }

  const secretBtn = document.getElementById("secretBtn");
const finalSurprise = document.getElementById("finalSurprise");

// ==================== Confettis ====================
function launchConfetti(){
  for(let i=0;i<50;i++){
    const conf = document.createElement("div");
    conf.textContent = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random()*100 + "vw";
    conf.style.top = "-10vh";
    conf.style.fontSize = Math.random()*24+16 + "px";
    conf.style.animation = "confettiFall 5s linear forwards";
    conf.style.zIndex = 1000;
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),5000);
  }
}

// Animation confettis CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity:1; }
  100% { transform: translateY(110vh) rotate(360deg); opacity:0; }
}`;
document.head.appendChild(style);

// ==================== Apparition du bouton secret ====================
// On montre le bouton après que le texte soit complètement affiché
const totalTime = longText.length * 50 + 500; // même vitesse que animateText
setTimeout(()=>{
  secretBtn.classList.remove("hidden");
  launchConfetti();
}, totalTime);

// ==================== Action bouton secret ====================
secretBtn.addEventListener("click", ()=>{
  finalSurprise.classList.remove("hidden");
  secretBtn.style.display = "none";
  launchConfetti(); // encore un peu de magie
});
}