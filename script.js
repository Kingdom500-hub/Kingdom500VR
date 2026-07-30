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
    const button = document.querySelector(".applyButton");

  small.classList.add("showSmall");

setTimeout(() => {

    title.classList.add("showTitle");

}, 1500);

setTimeout(() => {

    subtitle.classList.add("showSubtitle");

}, 3000);

setTimeout(() => {

    button.classList.add("showButton");

}, 3600);

});