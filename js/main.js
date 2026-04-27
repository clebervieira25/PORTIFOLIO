// Arquivo principal de inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos os módulos na ordem correta
    ParticlesModule.init();
    ThemeModule.init();
    NavigationModule.init();
    ProjectsModule.init();
    ContactsModule.init();
    AnimationsModule.init();
    CertificatesModule.init();  // NOVO
    
    console.log('🚀 Portfólio de Cleber Vieira carregado com sucesso!');
});

// Limpar animações ao descarregar
window.addEventListener('beforeunload', () => {
    AnimationsModule.cleanup();
});