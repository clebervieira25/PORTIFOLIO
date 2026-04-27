const ParticlesModule = (function() {
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        return particle;
    }
    
    function init() {
        const container = document.getElementById('particles-container');
        if (!container) return;
        container.classList.add('particles');
        for (let i = 0; i < 50; i++) {
            container.appendChild(createParticle());
        }
    }
    
    return { init };
})();