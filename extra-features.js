// ==================== INTERACTION GALERIE DES SENTIMENTS ====================
document.addEventListener("DOMContentLoaded", () => {
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
});
