const ContactsModule = (function() {
    function renderContacts() {
        const contactInfo = document.getElementById('contactInfo');
        if (!contactInfo) return;
        
        contactInfo.innerHTML = projectsData.contacts.map(contact => `
            <a href="${contact.link}" class="contact-item" target="_blank" rel="noopener noreferrer">
                <i class="${contact.icon}" style="color: ${contact.color}"></i>
                <div>
                    <h3>${contact.label}</h3>
                    <p>${contact.value}</p>
                </div>
            </a>
        `).join('');
    }
    
    function initForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[placeholder="Seu Nome"]').value;
            const email = form.querySelector('input[placeholder="Seu Email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Criar mensagem para WhatsApp
            const whatsappMessage = `Olá Cleber! Meu nome é ${name} (${email})%0A%0AMensagem: ${message}`;
            const whatsappLink = `https://wa.me/5588993301847?text=${whatsappMessage}`;
            
            // Abrir WhatsApp
            window.open(whatsappLink, '_blank');
            
            // Mostrar mensagem de sucesso
            alert(`Obrigado ${name}! Você será redirecionado para o WhatsApp para conversarmos.`);
            form.reset();
        });
    }
    
    function init() {
        renderContacts();
        initForm();
    }
    
    return { init };
})();