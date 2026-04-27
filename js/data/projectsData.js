// Dados do Portfólio - Cleber Vieira
const projectsData = {
    // Habilidades do desenvolvedor COM CORES
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
    
    // Projetos do GitHub COM ÍCONES COLORIDOS
    projects: [
        {
            id: 1,
            title: "💰 FinTrack - Controle de Finanças Pessoais",
            description: "Sistema desktop completo para gerenciamento de finanças pessoais, desenvolvido com Java e JavaFX. Permite cadastrar receitas/despesas, visualizar saldo, gerar relatórios gráficos e persistir dados com SQLite.",
            techs: ["Java", "JavaFX", "SQLite", "POO", "JUnit"],
            githubUrl: "https://github.com/clebervieira25/FinTrack",
            category: "backend",
            icon: "fas fa-coins",
            iconColor: "#FFD700"  // Dourado
        },
        {
            id: 2,
            title: "🛒 Carrinho Inteligente - Frontend",
            description: "Aplicativo móvel desenvolvido com Flutter que permite ler códigos de barras de produtos (via câmera ou manual), adicionar ao carrinho e visualizar valor total em tempo real.",
            techs: ["Flutter", "Dart", "Provider", "Mobile Scanner", "HTTP"],
            githubUrl: "https://github.com/clebervieira25/carrinho-inteligente-frontend",
            category: "frontend",
            icon: "fas fa-shopping-cart",
            iconColor: "#FF6B35"  // Laranja
        },
        {
            id: 3,
            title: "🛒 Carrinho Inteligente - Backend",
            description: "API REST robusta que serve como ponte entre o app Flutter e o banco de dados PostgreSQL. Gerencia operações de produtos do supermercado.",
            techs: ["Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
            githubUrl: "https://github.com/clebervieira25/carrinho-inteligente-backend",
            category: "backend",
            icon: "fas fa-server",
            iconColor: "#00D4FF"  // Ciano
        }
    ],
    
    // Contatos COM ÍCONES COLORIDOS (cores já estão no CSS)
    contacts: [
        {
            type: "email",
            label: "Email",
            value: "clebervieira1993@gmail.com",
            link: "mailto:clebervieira1993@gmail.com",
            icon: "fas fa-envelope",
            color: "#EA4335"  // Vermelho Gmail
        },
        {
            type: "whatsapp",
            label: "WhatsApp",
            value: "(88) 99330-1847",
            link: "https://wa.me/5588993301847",
            icon: "fab fa-whatsapp",
            color: "#25D366"  // Verde WhatsApp
        },
        {
            type: "github",
            label: "GitHub",
            value: "github.com/clebervieira25",
            link: "https://github.com/clebervieira25",
            icon: "fab fa-github",
            color: "#ffffff"  // Branco (preto no tema claro via CSS)
        },
        {
            type: "linkedin",
            label: "LinkedIn",
            value: "Cléber Vieira",
            link: "https://www.linkedin.com/in/cl%C3%A9ber-vieira-5527412bb/",
            icon: "fab fa-linkedin",
            color: "#0077B5"  // Azul LinkedIn
        }
    ]
};

// Categorias para filtro dos projetos
const projectCategories = [
    { id: "all", name: "Todos" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" }
];

// Frases para animação de digitação
const typingPhrases = [
    "Desenvolvedor Front-end & Back-end",
    "Java | React | Flutter",
    "Em busca da primeira oportunidade",
    "Apaixonado por tecnologia"
];