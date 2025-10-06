document.addEventListener('DOMContentLoaded', () => {
    const avatarImg = document.getElementById("avatar-img");
    let showingFront = true;
    const img1 = "Multimedia/avatar.png";
    const img2 = "Multimedia/avatar-real.png";

    setInterval(() => {
        avatarImg.classList.add("flip");
        // Cambia la imagen justo en la "mitad" de la animación
        setTimeout(() => {
            avatarImg.src = showingFront ? img2 : img1;
            showingFront = !showingFront;
        }, 580); // justo en el frame 49%-51%
        setTimeout(() => {
            avatarImg.classList.remove("flip");
        }, 1200); // cuando acaba animación
    }, 7000);
});
