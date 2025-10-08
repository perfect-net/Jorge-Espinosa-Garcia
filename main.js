document.addEventListener('DOMContentLoaded', () => {
    // ==== FLIP AUTOMÁTICO DE AVATAR ====
    const avatarImg = document.getElementById("avatar-img");
    if (avatarImg) {
        let showingFront = true;
        const img1 = "Multimedia/avatar.png";       // Avatar inicial
        const img2 = "Multimedia/avatar-real.png";  // Foto real

        // Función para el flip automático
        const flipAvatar = () => {
            avatarImg.classList.add("flip");
            // Cambia la imagen justo en la "mitad" de la animación
            setTimeout(() => {
                avatarImg.src = showingFront ? img2 : img1;
                showingFront = !showingFront;
            }, 580); // justo en el frame 49%-51% de la animación
            setTimeout(() => {
                avatarImg.classList.remove("flip");
            }, 1200); // cuando acaba la animación completa
        };

        // Iniciar el intervalo cada 7 segundos
        setInterval(flipAvatar, 5000);
    }

    // ==== FORMULARIO DE CONTACTO ====
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animación del botón
            const button = form.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Enviando...';
            button.style.background = 'linear-gradient(135deg, #37398a, #775fe7)';
            
            // Simular envío
            setTimeout(() => {
                alert("¡Gracias por tu mensaje! Pronto te responderé.");
                form.reset();
                button.textContent = originalText;
                button.style.background = '';
            }, 1500);
        });
    }

    // ==== SMOOTH SCROLLING PARA NAVEGACIÓN ====
    const navLinks = document.querySelectorAll('.nav-btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Añadir efecto visual al botón clickeado
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });

    // ==== ANIMACIÓN DE ESCRITURA PARA EL HERO ====
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        const phrases = [
            'SOC Analyst & Cybersecurity Specialist',
            'Malware Analysis Expert',
            'Threat Hunter & Incident Response',
            'Cybersecurity Content Creator'
        ];
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;

        function typeEffect() {
            const current = phrases[currentPhrase];
            
            if (isDeleting) {
                typedTextElement.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typedTextElement.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && currentChar === current.length) {
                typeSpeed = 2000; // pausa al final
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typeSpeed = 500; // pausa antes de empezar la siguiente
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Iniciar el efecto de escritura después de un pequeño delay
        setTimeout(typeEffect, 1000);
    }

    // ==== EFECTO PARALLAX SUTIL EN EL SCROLL ====
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, section');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.02);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Activar parallax solo en pantallas grandes
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', requestParallaxUpdate);
    }

    // ==== ANIMACIÓN DE ENTRADA PARA LAS CARDS ====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las cards
    const cards = document.querySelectorAll('.card, .writeup-card');
    cards.forEach((card, index) => {
        // Configuración inicial para la animación
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });

    // ==== MEJORA DE LA NAVEGACIÓN EN MÓVILES ====
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Asegurar que el header sea visible al inicio
    header.style.transition = 'transform 0.3s ease';

    // ==== EFECTO HOVER MEJORADO PARA BOTONES ====
    const buttons = document.querySelectorAll('.nav-btn, .hero-btn, .writeup-btn, .card-link-btn, .writeup-link-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    console.log('🛡️ Perfect Net - Todos los scripts cargados correctamente');
});
