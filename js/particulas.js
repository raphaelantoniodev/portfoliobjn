function createParticles() {
    const container = document.getElementById('particles-js');
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho e posição aleatórios
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Animação
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s ${delay}s linear infinite`;
        
        // Estilo da animação
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                    opacity: ${Math.random() * 0.3 + 0.1};
                }
                50% {
                    opacity: ${Math.random() * 0.2 + 0.05};
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                    opacity: ${Math.random() * 0.3 + 0.1};
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        container.appendChild(particle);
    }
}

window.addEventListener('load', createParticles);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});