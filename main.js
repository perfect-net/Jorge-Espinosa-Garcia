document.addEventListener('DOMContentLoaded', () => {
    // Avatar flip
    const avatarImg = document.getElementById("avatar-img");
    const avatarPhoto = document.getElementById("avatar-photo");
    let flipped = false;

    avatarPhoto.addEventListener("click", () => {
        if (!flipped) {
            avatarImg.classList.add("flip");
            setTimeout(() => {
                avatarImg.src = "Multimedia/avatar-real.png";
                avatarImg.classList.remove("flip");
                flipped = true;
            }, 1000); // igual duración animación
        }
    });

    // Contact form ficticio
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("¡Gracias por tu mensaje! Pronto te responderé.");
            form.reset();
        });
    }
});
