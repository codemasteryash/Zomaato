// Input focus animation
const input = document.querySelector("main input");

input.addEventListener("focus", () => {
    input.style.boxShadow = "0 0 12px 4px rgba(255, 0, 0, 0.6)";
});

input.addEventListener("blur", () => {
    input.style.boxShadow = "0 4px 10px rgba(255, 0, 0, 0.4)";
});

// Fade-in animation for main
window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    main.style.opacity = 0;
    main.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        main.style.opacity = 1;
    }, 100);
});
