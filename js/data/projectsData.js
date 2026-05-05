// Dados do Portfolio - Cleber Vieira
const projectsData = {
    // Habilidades do desenvolvedor com cores
    skills: [
        { name: "HTML5", icon: "fab fa-html5", color: "#E44D26" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#264DE4" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "React", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node", color: "#339933" },
        { name: "Java", icon: "fab fa-java", color: "#007396" },
        { name: "Flutter", icon: "fab fa-flutter", color: "#02569B" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
        { name: "Dart", icon: "fab fa-codiepie", color: "#00A8E8" }
    ],

    projects: [
        {
            id: 1,
            title: "FinTrack - Controle de Financas Pessoais",
            description: "Sistema desktop completo para gerenciamento de financas pessoais, desenvolvido com Java e JavaFX. Permite cadastrar receitas/despesas, visualizar saldo, gerar relatorios graficos e persistir dados com SQLite.",
            techs: ["Java", "JavaFX", "SQLite", "POO", "JUnit"],
            githubUrl: "https://github.com/clebervieira25/FinTrack",
            category: "backend",
            icon: "fas fa-coins",
            iconColor: "#FFD700"
        },
        {
            id: 2,
            title: "Carrinho Inteligente - Frontend",
            description: "Aplicativo mobile desenvolvido com Flutter que permite ler codigos de barras de produtos, adicionar ao carrinho e visualizar valor total em tempo real.",
            techs: ["Flutter", "Dart", "Provider", "Mobile Scanner", "HTTP"],
            githubUrl: "https://github.com/clebervieira25/carrinho-inteligente-frontend",
            category: "frontend",
            icon: "fas fa-shopping-cart",
            iconColor: "#FF6B35"
        },
        {
            id: 3,
            title: "Carrinho Inteligente - Backend",
            description: "API REST que serve como ponte entre o app Flutter e o banco de dados PostgreSQL. Gerencia operacoes de produtos do supermercado.",
            techs: ["Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
            githubUrl: "https://github.com/clebervieira25/carrinho-inteligente-back-end",
            category: "backend",
            icon: "fas fa-server",
            iconColor: "#00D4FF"
        },
        {
            id: 4,
            title: "TJ iPhones",
            description: "Landing page estatica para loja de venda, conserto e assistencia tecnica de celulares, com visual tecnologico, vitrine de produtos e chamadas para WhatsApp.",
            techs: ["HTML5", "CSS3", "JavaScript", "Landing Page"],
            githubUrl: "https://github.com/clebervieira25/tj-IPHONES",
            liveUrl: "https://clebervieira25.github.io/tj-IPHONES/",
            category: "landing",
            icon: "fas fa-mobile-screen-button",
            iconColor: "#00D4FF"
        },
        {
            id: 5,
            title: "Centro de Beleza",
            description: "Landing page para profissional da area da beleza, com apresentacao de servicos, resultados, referencias visuais e botao de agendamento pelo WhatsApp.",
            techs: ["HTML5", "Tailwind CSS", "JavaScript", "Responsivo"],
            githubUrl: "https://github.com/clebervieira25/landing-page-centro-de-beleza",
            liveUrl: "https://clebervieira25.github.io/landing-page-centro-de-beleza/",
            category: "landing",
            icon: "fas fa-wand-magic-sparkles",
            iconColor: "#E85D9E"
        },
        {
            id: 6,
            title: "Maria Fernanda Makeup Artist",
            description: "Landing page responsiva para maquiadora profissional, com visual luxuoso, portfolio, depoimentos e chamadas para agendamento pelo WhatsApp.",
            techs: ["HTML5", "CSS3", "JavaScript", "UX/UI"],
            githubUrl: "https://github.com/clebervieira25/Maria-Fernanda",
            liveUrl: "https://clebervieira25.github.io/Maria-Fernanda/",
            category: "landing",
            icon: "fas fa-brush",
            iconColor: "#D4AF37"
        },
        {
            id: 7,
            title: "Leticia Lorrane Lash Designer",
            description: "Landing page para lash designer, criada para apresentar servicos de extensao de cilios, fortalecer presenca digital e facilitar contatos comerciais.",
            techs: ["HTML5", "CSS3", "JavaScript", "Landing Page"],
            githubUrl: "https://github.com/clebervieira25/Leticia-Lorrane",
            liveUrl: "https://clebervieira25.github.io/Leticia-Lorrane/",
            category: "landing",
            icon: "fas fa-eye",
            iconColor: "#B86AD9"
        },
        {
            id: 8,
            title: "DOMMUS Dedetizacao",
            description: "Landing page para empresa de controle de pragas, com mensagem comercial direta, prova de servico e chamada de orcamento via WhatsApp.",
            techs: ["HTML5", "CSS3", "JavaScript", "Conversao"],
            githubUrl: "https://github.com/clebervieira25/Dommus",
            liveUrl: "https://clebervieira25.github.io/Dommus/",
            category: "landing",
            icon: "fas fa-shield-halved",
            iconColor: "#39B54A"
        },
        {
            id: 9,
            title: "Leandro Alef Personal Trainer",
            description: "Landing page fitness para personal trainer, com hero de impacto, apresentacao de servicos e caminho rapido para contato e contratacao.",
            techs: ["HTML5", "CSS3", "JavaScript", "Responsivo"],
            githubUrl: "https://github.com/clebervieira25/Leandro-Alef",
            liveUrl: "https://clebervieira25.github.io/Leandro-Alef/",
            category: "landing",
            icon: "fas fa-dumbbell",
            iconColor: "#FF6B35"
        },
        {
            id: 10,
            title: "Mauri Leonardo Barbearia",
            description: "Landing page premium para barbearia, com identidade visual elegante, apresentacao de servicos e foco em agendamento pelo WhatsApp.",
            techs: ["HTML5", "CSS3", "JavaScript", "Landing Page"],
            githubUrl: "https://github.com/clebervieira25/Mauri-Leonardo-barbearia",
            liveUrl: "https://clebervieira25.github.io/Mauri-Leonardo-barbearia/",
            category: "landing",
            icon: "fas fa-scissors",
            iconColor: "#C9A227"
        },
        {
            id: 11,
            title: "Miglow Nail",
            description: "Landing page para design de unhas, com visual sofisticado, apresentacao da marca e foco em captar clientes para agendamento.",
            techs: ["HTML5", "CSS3", "JavaScript", "Branding"],
            localUrl: "../projeto-miglow/index.html",
            localLabel: "Abrir local",
            category: "landing",
            icon: "fas fa-hand-sparkles",
            iconColor: "#FF7AB6"
        },
        {
            id: 12,
            title: "Thienda Silva Hair Design",
            description: "Landing page luxuosa para salao de beleza, com secoes para servicos, portfolio visual, redes sociais e chamada para atendimento.",
            techs: ["HTML5", "CSS3", "JavaScript", "Responsivo"],
            githubUrl: "https://github.com/clebervieira25/thiendasilvahairdesign",
            liveUrl: "https://clebervieira25.github.io/thiendasilvahairdesign/",
            category: "landing",
            icon: "fas fa-gem",
            iconColor: "#C084FC"
        }
    ],

    contacts: [
        {
            type: "email",
            label: "Email",
            value: "clebervieira1993@gmail.com",
            link: "mailto:clebervieira1993@gmail.com",
            icon: "fas fa-envelope",
            color: "#EA4335"
        },
        {
            type: "whatsapp",
            label: "WhatsApp",
            value: "(88) 99330-1847",
            link: "https://wa.me/5588993301847",
            icon: "fab fa-whatsapp",
            color: "#25D366"
        },
        {
            type: "github",
            label: "GitHub",
            value: "github.com/clebervieira25",
            link: "https://github.com/clebervieira25",
            icon: "fab fa-github",
            color: "#ffffff"
        },
        {
            type: "linkedin",
            label: "LinkedIn",
            value: "Cleber Vieira",
            link: "https://www.linkedin.com/in/cl%C3%A9ber-vieira-5527412bb/",
            icon: "fab fa-linkedin",
            color: "#0077B5"
        }
    ]
};

// Categorias para filtro dos projetos
const projectCategories = [
    { id: "all", name: "Todos" },
    { id: "landing", name: "Landing Pages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" }
];

// Frases para animacao de digitacao
const typingPhrases = [
    "Desenvolvedor Front-end & Back-end",
    "Java | React | Flutter",
    "Landing pages responsivas",
    "Em busca da primeira oportunidade"
];
