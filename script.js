const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

const flakes = [];

const layers = [
    {count:220,size:[0.8,1.5],speed:[0.15,0.30],opacity:[0.15,0.30]},
    {count:140,size:[1.5,3],speed:[0.35,0.60],opacity:[0.25,0.50]},
    {count:70,size:[3,6],speed:[0.8,1.4],opacity:[0.45,0.75]},
    {count:18,size:[8,14],speed:[1.8,3],opacity:[0.75,1]}
];

function random(min,max){
    return Math.random()*(max-min)+min;
}

layers.forEach((layer,index)=>{

    for(let i=0;i<layer.count;i++){

        flakes.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            radius:random(layer.size[0],layer.size[1]),

            speed:random(layer.speed[0],layer.speed[1]),

            opacity:random(layer.opacity[0],layer.opacity[1]),

            layer:index,

            offset:Math.random()*1000

        });

    }

});

let time=0;

function draw(){

    time+=0.005;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    flakes.forEach(f=>{

        const wind =
        Math.sin(time+f.offset)*0.6*(f.layer+1);

        f.y+=f.speed;

        f.x+=wind*0.3;

        if(f.y>canvas.height+20){

            f.y=-20;
            f.x=Math.random()*canvas.width;

        }

        if(f.x>canvas.width+20)f.x=-20;
        if(f.x<-20)f.x=canvas.width+20;

        if(f.layer===3){

            ctx.filter="blur(2px)";

        }else{

            ctx.filter="none";

        }

        const g=ctx.createRadialGradient(

            f.x,
            f.y,
            0,

            f.x,
            f.y,
            f.radius

        );

        g.addColorStop(0,`rgba(255,255,255,${f.opacity})`);
        g.addColorStop(.5,`rgba(255,255,255,${f.opacity*0.4})`);
        g.addColorStop(1,"rgba(255,255,255,0)");

        ctx.fillStyle=g;

        ctx.beginPath();

        ctx.arc(

            f.x,
            f.y,
            f.radius,
            0,
            Math.PI*2

        );

        ctx.fill();

    });

    requestAnimationFrame(draw);

}

draw();