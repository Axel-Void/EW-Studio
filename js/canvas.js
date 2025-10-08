// js/canvas.js
export function initCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let mouse = { x: undefined, y: undefined, radius: 0 };

    class Particle {
        constructor(x, y, dX, dY, size) { this.x = x; this.y = y; this.directionX = dX; this.directionY = dY; this.size = size; }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.8)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0.2)');
            ctx.fillStyle = gradient; ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            if (mouse.x !== undefined) {
                let dx = mouse.x - this.x, dy = mouse.y - this.y, dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
                    if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
                    if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
                }
            }
            this.x += this.directionX; this.y += this.directionY; this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numParticles = (canvas.height * canvas.width) / 10000;
        if (numParticles > 150) numParticles = 150;
        for (let i = 0; i < numParticles; i++) {
            let size = Math.random() * 2.5 + 1.5;
            let x = Math.random() * (canvas.width - size * 2) + size * 2;
            let y = Math.random() * (canvas.height - size * 2) + size * 2;
            particlesArray.push(new Particle(x, y, Math.random()*0.4-0.2, Math.random()*0.4-0.2, size));
        }
    }

    function connectParticles() {
        const maxDist = 120;
        for (let a=0; a < particlesArray.length; a++) {
            for (let b=a+1; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < maxDist) {
                    ctx.strokeStyle = `rgba(34, 211, 238, ${ (1 - dist/maxDist) * 0.7 })`;
                    ctx.lineWidth = 0.5; ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particlesArray.forEach(p => p.update());
        connectParticles();
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 120) * (canvas.width / 120);
        initParticles();
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });

    // initial
    resizeCanvas();
    animate();
}
