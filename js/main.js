const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Dark Mode Functionality
(function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    function createThemeToggle() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        
        updateToggleIcon(toggleBtn, currentTheme);
        
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateToggleIcon(toggleBtn, isDark ? 'dark' : 'light');
            
            this.style.transform = 'scale(1.1) rotate(180deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        document.body.appendChild(toggleBtn);
    }
    
    function updateToggleIcon(btn, theme) {
        const icon = btn.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createThemeToggle);
    } else {
        createThemeToggle();
    }
})();

// Your existing navigation code below...

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const icon = toggler.querySelector("i");
    const navCollapse = document.getElementById("navbarNav");
    navCollapse.addEventListener("show.bs.collapse", () => {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    });
    navCollapse.addEventListener("hide.bs.collapse", () => {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
