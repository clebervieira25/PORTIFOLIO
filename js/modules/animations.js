const AnimationsModule = (function() {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;
    
    function typeEffect() {
        const typingElement = document.getElementById('typingText');
        if (!typingElement) return;
        
        const currentText = typingPhrases[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingTimeout = setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingPhrases.length;
            typingTimeout = setTimeout(typeEffect, 500);
            return;
        }
        
        const speed = isDeleting ? 100 : 200;
        typingTimeout = setTimeout(typeEffect, speed);
    }
    
    function observeElements() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
    
    function init() {
        typeEffect();
        observeElements();
    }
    
    function cleanup() {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
    }
    
    return { init, cleanup };
})();