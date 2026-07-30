// ==========================================
// SNOW
// ==========================================

const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Snowflake {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 3 + 1;

        this.speedY = Math.random() * 1.8 + 0.5;
        this.speedX = Math.random() * 0.8 - 0.4;

        this.opacity = Math.random() * 0.6 + 0.2;

    }

    update() {

        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height + 10) {

            this.y = -10;
            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

        ctx.fill();

    }

}

for (let i = 0; i < 180; i++) {

    particles.push(new Snowflake());

}

function animateSnow() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(flake => {

        flake.update();
        flake.draw();

    });

    requestAnimationFrame(animateSnow);

}

animateSnow();


// ==========================================
// INTRO ANIMATION
// ==========================================

window.addEventListener("load", () => {

    const small = document.querySelector(".hero-small");
    const title = document.querySelector(".heroLogo");
    const subtitle = document.querySelector(".hero-subtitle");
    const applyButton = document.querySelector(".applyButton");

   small.classList.remove("showSmall");
title.classList.remove("showTitle");
subtitle.classList.remove("showSubtitle");
applyButton.classList.remove("showButton");

 


});
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicToggle");

let playing = false;

musicButton.addEventListener("click", () => {

    if (playing) {
        music.pause();
       musicButton.textContent = "🔇 Music";
    } else {
        music.play();
        musicButton.textContent = "🔊 Music";
    }

    playing = !playing;

});
const entryOverlay = document.getElementById("entryOverlay");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", async () => {

    try {
        await music.play();
        playing = true;
        musicButton.textContent = "🔊 Music";
    } catch (e) {
        console.log("Autoplay blocked:", e);
    }

    entryOverlay.classList.add("hide");

    const small = document.querySelector(".hero-small");
    const title = document.querySelector(".heroLogo");
    const subtitle = document.querySelector(".hero-subtitle");
    const applyButton = document.querySelector(".applyButton");

    setTimeout(() => {
        small.classList.add("showSmall");
    }, 300);

    setTimeout(() => {
        title.classList.add("showTitle");
    }, 1500);

    setTimeout(() => {
        subtitle.classList.add("showSubtitle");
    }, 2600);

    setTimeout(() => {
        applyButton.classList.add("showButton");
    }, 3200);

});