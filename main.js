// Animación simple para el título principal
window.onload = function () {
    const nameTitle = document.querySelector('.intro h1');
    if (nameTitle) {
        nameTitle.style.opacity = '0';
        setTimeout(() => {
            nameTitle.style.transition = 'opacity 1.2s';
            nameTitle.style.opacity = '1';
        }, 200);
    }
};
