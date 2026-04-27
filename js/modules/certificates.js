// Módulo de Certificados - Cleber Vieira
const CertificatesModule = (function() {
    // Dados dos certificados
    const certificates = [
        {
            id: 1,
            title: "GFT Start #6 - Lógica de Programação",
            institution: "Digital Innovation One (DIO)",
            description: "Bootcamp completo de Lógica de Programação com 47 horas de duração. Fundamentos de algoritmos, estruturas de decisão e resolução de problemas.",
            date: "Concluído em: 20 de Maio de 2025",
            workload: "47 horas",
            icon: "fas fa-code",
            link: "assets/certificados/certificado1.pdf",
            linkText: "Abrir Certificado PDF",
            status: "concluido"
        },
        {
            id: 2,
            title: "Consumindo APIs com Javascript",
            institution: "Digital Innovation One (DIO)",
            description: "Módulo especializado em consumo de APIs utilizando JavaScript. Requisições HTTP, manipulação de dados assíncronos e integração com serviços externos.",
            date: "Concluído em: 27 de Julho de 2025",
            workload: "8 horas",
            icon: "fab fa-js",
            link: "assets/certificados/certificado2.pdf",
            linkText: "Abrir Certificado PDF",
            status: "concluido"
        },
        {
            id: 3,
            title: "Ri Happy - Front-end do Zero",
            institution: "Digital Innovation One (DIO)",
            description: "Bootcamp completo de Front-end com 75 horas de duração. Desenvolvimento web moderno, HTML5, CSS3, JavaScript, React e práticas de mercado.",
            date: "Concluído em: 27 de Julho de 2025",
            workload: "75 horas",
            icon: "fab fa-react",
            link: "assets/certificados/certificado3.pdf",
            linkText: "Abrir Certificado PDF",
            status: "concluido"
        },
        {
            id: 4,
            title: "Desenvolvimento Java",
            institution: "IREDE Capacita",
            description: "Curso completo de Desenvolvimento Java com duração de 12 meses. Abordando desde fundamentos da linguagem até tópicos avançados como Spring Boot e microsserviços.",
            date: "Início: 24 de Novembro de 2025 | Previsão: Novembro 2026",
            workload: "12 meses (Em andamento)",
            icon: "fab fa-java",
            link: "#",
            linkText: "Em andamento",
            status: "andamento"
        }
    ];
    
    function renderCertificates() {
        const certificatesGrid = document.getElementById('certificatesGrid');
        if (!certificatesGrid) return;
        
        certificatesGrid.innerHTML = certificates.map(cert => `
            <div class="certificate-card ${cert.status === 'andamento' ? 'in-progress' : ''}">
                <div class="certificate-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <div class="certificate-info">
                    <h3>${cert.title}</h3>
                    <p><strong>${cert.institution}</strong></p>
                    <p>${cert.description}</p>
                    <div class="cert-meta">
                        <span class="cert-date">
                            <i class="far fa-calendar-alt"></i> ${cert.date}
                        </span>
                        <span class="cert-hours">
                            <i class="far fa-clock"></i> ${cert.workload}
                        </span>
                    </div>
                    <a href="${cert.link}" class="certificate-link" target="_blank" ${cert.status === 'andamento' ? 'style="pointer-events: none; opacity: 0.6;"' : ''}>
                        ${cert.linkText} ${cert.status === 'concluido' ? '<i class="fas fa-file-pdf"></i>' : '<i class="fas fa-spinner fa-pulse"></i>'}
                    </a>
                </div>
            </div>
        `).join('');
    }
    
    function init() {
        renderCertificates();
        console.log("✅ Certificados carregados! Total:", certificates.filter(c => c.status === 'concluido').length, "concluídos");
    }
    
    return { init };
})();