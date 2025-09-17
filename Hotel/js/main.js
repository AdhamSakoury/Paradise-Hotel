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
