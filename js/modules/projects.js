const ProjectsModule = (function() {
    let currentFilter = 'all';
    
    function renderSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;
        
        skillsGrid.innerHTML = projectsData.skills.map(skill => `
            <div class="skill-card">
                <i class="${skill.icon}" style="color: ${skill.color}"></i>
                <h3>${skill.name}</h3>
            </div>
        `).join('');
    }
    
    function renderFilters() {
        const filterContainer = document.getElementById('projectsFilter');
        if (!filterContainer) return;
        
        filterContainer.innerHTML = projectCategories.map(category => `
            <button class="filter-btn ${category.id === currentFilter ? 'active' : ''}" data-filter="${category.id}">
                ${category.name}
            </button>
        `).join('');
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                renderProjects();
                renderFilters();
            });
        });
    }
    
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        const canOpenLocalFiles = window.location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(window.location.hostname);
        
        let filteredProjects = projectsData.projects;
        if (currentFilter !== 'all') {
            filteredProjects = projectsData.projects.filter(p => p.category === currentFilter);
        }
        
        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = '<p style="text-align: center; padding: 40px;">Nenhum projeto encontrado nesta categoria.</p>';
            return;
        }
        
        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card">
                <div class="project-img">
                    <i class="${project.icon}" style="color: ${project.iconColor}; font-size: 64px;"></i>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.techs.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-arrow-up-right-from-square"></i> ${project.liveLabel || 'Ver site'}
                            </a>
                        ` : ''}
                        ${project.localUrl && canOpenLocalFiles ? `
                            <a href="${project.localUrl}" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-folder-open"></i> ${project.localLabel || 'Abrir local'}
                            </a>
                        ` : ''}
                        ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function init() {
        renderSkills();
        renderFilters();
        renderProjects();
    }
    
    return { init };
})();
