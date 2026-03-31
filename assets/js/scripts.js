document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => observer.observe(el));
    
    // Add visual interaction on figures
    const figures = document.querySelectorAll(".paper-figure");
    figures.forEach(fig => {
        fig.style.cursor = "pointer";
        fig.title = "Nhấp để xem rõ hơn (mô phỏng)";
        fig.addEventListener("click", () => {
            // Optional: Implement a lightbox modal here if requested
            fig.style.transform = fig.style.transform === "scale(1.02)" ? "scale(1)" : "scale(1.02)";
            fig.style.transition = "transform 0.3s ease";
        });
    });
});
