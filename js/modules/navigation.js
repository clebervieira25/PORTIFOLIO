const NavigationModule = (function() {
    let currentSection = 'home';
    
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        if (current !== currentSection) {
            currentSection = current;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            // Fechar menu mobile se estiver aberto
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.getElementById('hamburger');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    function initHamburger() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                // Prevenir scroll quando menu está aberto
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            });
        }
    }
    
    function init() {
        // Scroll suave para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                smoothScroll(this.getAttribute('href'));
            });
        });
        
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
        
        // Inicializar menu hambúrguer
        initHamburger();
    }
    
    return { init };
})();