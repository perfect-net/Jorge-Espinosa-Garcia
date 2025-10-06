document.addEventListener('DOMContentLoaded', () => {
    // Flip automático de avatar cada 10 segundos entre dos imágenes
    const avatarImg = document.getElementById("avatar-img");
    let showingFront = true;
    const img1 = "Multimedia/avatar.png";       // Avatar inicial
    const img2 = "Multimedia/avatar-real.png";  // Foto real

    setInterval(() => {
        avatarImg.classList.add("flip");
        setTimeout(() => {
            avatarImg.src = showingFront ? img2 : img1;
            showingFront = !showingFront;
            avatarImg.classList.remove("flip");
        }, 1000); // Igual a la duración del keyframe (1s)
    }, 10000); // 10 segundos
});
