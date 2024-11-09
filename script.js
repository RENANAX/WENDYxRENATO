function createHeart() {
    const heart = document.querySelector('.heart');
    const numParticles = 100;
    const radius = 150;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Ecuación paramétrica del corazón
        const t = (i / numParticles) * 2 * Math.PI;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
        
        // Normalizar y escalar
        const scale = radius / 16;
        const posX = x * scale;
        const posY = y * scale;

        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.left = `${posX + 200}px`;
        particle.style.top = `${posY + 200}px`;
        
        // Animación aleatoria
        const moveX = (Math.random() - 0.5) * 20;
        const moveY = (Math.random() - 0.5) * 20;
        particle.style.setProperty('--moveX', `${moveX}px`);
        particle.style.setProperty('--moveY', `${moveY}px`);
        
        heart.appendChild(particle);
    }
}

function updateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const moveX = (Math.random() - 0.5) * 20;
        const moveY = (Math.random() - 0.5) * 20;
        particle.style.setProperty('--moveX', `${moveX}px`);
        particle.style.setProperty('--moveY', `${moveY}px`);
    });
}

// Animación de texto
const messages = ['Te Quiero', 'Te Amo', '❤️'];
let currentIndex = 0;

setInterval(() => {
    const textElement = document.querySelector('.text-animation');
    textElement.style.opacity = 0;
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.textContent = messages[currentIndex];
        textElement.style.opacity = 1;
    }, 1000);
}, 3000);

// Inicializar y actualizar partículas
document.addEventListener('DOMContentLoaded', () => {
    createHeart();
    setInterval(updateParticles, 2000);
});