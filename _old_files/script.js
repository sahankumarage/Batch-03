document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const heroBox = document.getElementById('hero-box');

    // Theme Toggle Logic
    let isLightMode = false;

    themeToggle.addEventListener('click', () => {
        isLightMode = !isLightMode;
        if (isLightMode) {
            root.setAttribute('data-theme', 'light');
            themeToggle.textContent = 'Dark Mode';
        } else {
            root.removeAttribute('data-theme');
            themeToggle.textContent = 'Light Mode';
        }
    });

    // 3D Tilt Effect on mousemove over hero-box area
    document.addEventListener('mousemove', (e) => {
        if (!heroBox) return;
        
        // Calculate the mouse position relative to the center of the screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        // Apply the transform to create a 3D effect
        heroBox.style.transform = `translateY(0) perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset transform on mouse leave from document
    document.addEventListener('mouseleave', () => {
        if (!heroBox) return;
        heroBox.style.transform = `translateY(0) perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        heroBox.style.transition = 'transform 0.5s ease';
    });

    // Remove transition when mouse starts moving to avoid laggy animation
    document.addEventListener('mouseenter', () => {
        if (!heroBox) return;
        heroBox.style.transition = 'transform 0.1s ease-out';
    });
});
