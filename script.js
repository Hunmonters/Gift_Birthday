const correctPass = "0706";
let enteredPass = "";
const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key[data-value]");
const deleteKey = document.getElementById("key-del");
const passwordScreen = document.getElementById("password-screen");
const passwordContent = document.querySelector(".password-content");
const mainExperience = document.getElementById("main-experience");

function updateDots() {
  dots.forEach((dot, index) => {
    if (index < enteredPass.length) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function checkPass() {
  if (enteredPass === correctPass) {
    passwordScreen.style.opacity = "0";
    passwordScreen.style.visibility = "hidden";
    setTimeout(() => {
      passwordScreen.style.display = "none";
      mainExperience.style.display = "block";
      updateInstruction("Nhấn vào bánh để thắp nến");
    }, 500);
  } else {
    passwordContent.classList.add("shake-content");
    setTimeout(() => {
      passwordContent.classList.remove("shake-content");
      enteredPass = "";
      updateDots();
    }, 500);
  }
}

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.stopPropagation();

    popSound.currentTime = 0;
    popSound.play().catch((e) => console.log("Pop sound deferred"));

    if (bgMusic.paused) {
      bgMusic.play().catch((e) => console.log("Music waiting for interaction"));
    }

    if (enteredPass.length < 4) {
      enteredPass += key.getAttribute("data-value");
      updateDots();
      if (enteredPass.length === 4) {
        setTimeout(checkPass, 300);
      }
    }
  });
});

deleteKey.addEventListener("click", (e) => {
  e.stopPropagation();

  popSound.currentTime = 0;
  popSound.play().catch((e) => console.log("Pop sound deferred"));

  if (enteredPass.length > 0) {
    enteredPass = enteredPass.slice(0, -1);
    updateDots();
  }
});

const cake = document.getElementById("cake-clickable");
const candle = document.getElementById("candle-img");
const instruction = document.getElementById("instruction-text");
const popSound = document.getElementById("pop-sound");
const candleSound = document.getElementById("candle-sound");
const bgMusic = document.getElementById("bg-music");

let state = "initial";

document.addEventListener("click", (e) => {
  if (e.target.id === "candle-img" && state === "lit") return;
  if (e.target.classList.contains("key")) return;

  popSound.currentTime = 0;
  popSound.play().catch((e) => console.log("Audio play deferred"));
});

function updateInstruction(text) {
  if (!instruction) return;
  instruction.classList.remove("bounce-up");
  void instruction.offsetWidth;

  instruction.innerText = text;
  instruction.classList.add("bounce-up");
}

cake.addEventListener("click", (e) => {
  if (state === "initial") {
    candle.classList.add("candle-appearing");
    updateInstruction("Nhấn vào nến để thổi nến");
    state = "lit";
  }
});

const balloons = [
  "asset/balloon/balloon (1).png",
  "asset/balloon/balloon (2).png",
  "asset/balloon/balloon (3).png",
  "asset/balloon/balloon (4).png",
];
const emojis = [
  "❤️",
  "🎂",
  "🥰",
  "💗",
  "✨",
  "🎉",
  "🎁",
  "🎈",
  "💖",
  "⭐",
  "🌈",
  "🍭",
];
const container = document.getElementById("floating-elements");

function spawnCelebration() {
  const burstCount = Math.floor(Math.random() * 2) + 1;

  for (let i = 0; i < burstCount; i++) {
    const isBalloon = Math.random() > 0.4;

    if (isBalloon) {
      const balloon = document.createElement("img");
      balloon.src = balloons[Math.floor(Math.random() * balloons.length)];
      balloon.className = "celebration-item";
      balloon.style.left = Math.random() * 90 + "vw";
      balloon.style.width = Math.random() * 60 + 40 + "px";
      balloon.style.animationDuration = Math.random() * 4 + 6 + "s";
      balloon.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(balloon);

      setTimeout(() => balloon.remove(), 10000);
    } else {
      const emoji = document.createElement("div");
      emoji.className = "floating-emoji";
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 95 + "vw";
      emoji.style.fontSize = Math.random() * 1.5 + 1.5 + "rem";
      emoji.style.animationDuration = Math.random() * 3 + 5 + "s";
      emoji.style.animationDelay = Math.random() * 1 + "s";
      container.appendChild(emoji);

      setTimeout(() => emoji.remove(), 8000);
    }
  }
}

candle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (state === "lit") {
    candleSound.play().catch((e) => console.log("Candle sound deferred"));
    candle.src = "asset/candle_no_fire.png";
    updateInstruction("✨ HAPPY BIRTHDAY! ✨");
    state = "blown";

    for (let i = 0; i < 5; i++) {
      setTimeout(spawnCelebration, i * 200);
    }
    setInterval(spawnCelebration, 400);
    setTimeout(() => {
      // Thay vì chuyển trang, ta tạo iframe để giữ nhạc chạy liên tục ở trang gốc
      const iframe = document.createElement("iframe");
      iframe.src = "aqsa/index.html";
      iframe.style.position = "fixed";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.border = "none";
      iframe.style.zIndex = "9999";
      iframe.style.background = "transparent";
      document.body.appendChild(iframe);
      
      // Ẩn giao diện bánh sinh nhật cũ đi
      document.getElementById("main-experience").style.display = "none";
    }, 3000);
  }
});
