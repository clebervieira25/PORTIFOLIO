const ThemeModule = (function() {
    let isLightTheme = false;
    
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            enableLightTheme();
        }
    }
    
    function enableLightTheme() {
        document.body.classList.add('light-theme');
        isLightTheme = true;
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
    
    function enableDarkTheme() {
        document.body.classList.remove('light-theme');
        isLightTheme = false;
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
    
    function updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            if (theme === 'light') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    function toggleTheme() {
        if (isLightTheme) {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    }
    
    function init() {
        loadTheme();
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', toggleTheme);
        }
    }
    
    return { init, toggleTheme };
})();