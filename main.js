// Animación del título principal y texto mecanografiado tipo SOC
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in para el título
    const mainTitle = document.getElementById("main-title");
    mainTitle.style.opacity = "0";
    setTimeout(() => {
        mainTitle.style.transition = "opacity 1.7s";
        mainTitle.style.opacity = "1";
    }, 200);

    // Animación de texto estilo terminal
    const typedText = document.querySelector('.typed-text');
    const lines = [
        "Analista de SOC | Blue Team 💻",
        "Especialista en Análisis de Malware 🧬",
        "Creador de contenido técnico 📝",
        "Hack The Box · FortiGate · Python · Forense",
    ];
    let line = 0, char = 0;
    function typeLine() {
        if (line < lines.length) {
            if (char < lines[line].length) {
                typedText.textContent += lines[line][char];
                char++;
                setTimeout(typeLine, 36);
            } else {
                setTimeout(() => {
                    typedText.textContent = "";
                    char = 0; line++;
                    typeLine();
                }, 1600);
            }
        } else {
            line = 0; char = 0; setTimeout(typeLine, 800);
        }
    }
    typeLine();
    
    // Contact Form (ficticio: solo muestra alerta)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.");
        form.reset();
    });
});
//Flip avatar
document.addEventListener('DOMContentLoaded', () => {
    // ... otros códigos ...

    // Flip del avatar al hacer clic
    const avatarImg = document.getElementById("avatar-img");
    const avatarPhoto = document.getElementById("avatar-photo");
    let flipped = false;

    avatarPhoto.addEventListener("click", () => {
        if (!flipped) {
            avatarImg.classList.add("flip");
            setTimeout(() => {
                avatarImg.src = "Multimedia/avatar-real.png"; // cambia la ruta de tu foto real
                avatarImg.classList.remove("flip");
                flipped = true;
            }, 1000); // igual a la duración de la animación
        }
    });
});

