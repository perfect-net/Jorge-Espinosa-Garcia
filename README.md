# Jorge-Espinosa-Garcia


# Portfolio de Ciberseguridad - Guía de Instalación

## 📋 Descripción

Portfolio profesional para analistas SOC y profesionales de ciberseguridad. Incluye secciones para proyectos, certificaciones, habilidades y experiencia.

## 🚀 Instalación en GitHub Pages

### Opción 1: Repositorio Personal (Recomendado)

1. **Crear repositorio especial:**
   ```
   Nombre: tu-usuario.github.io
   Ejemplo: juan-garcia.github.io
   ```

2. **Subir archivos:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. **Activar GitHub Pages:**
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. **Acceder al sitio:**
   ```
   URL: https://tu-usuario.github.io
   ```

### Opción 2: Repositorio de Proyecto

1. **Crear repositorio:**
   ```
   Nombre: portfolio
   ```

2. **Subir archivos y activar Pages**

3. **Acceder al sitio:**
   ```
   URL: https://tu-usuario.github.io/portfolio
   ```

## ⚙️ Personalización

### Datos Personales (index.html)

```html
<!-- Cambiar información personal -->
<h1 class="hero-title">
    <span class="gradient-text">TU NOMBRE</span>
    <br>Especialista en Ciberseguridad
</h1>

<p class="hero-description">
    Tu experiencia y certificaciones aquí
</p>
```

### Proyectos

```html
<!-- Modificar proyectos en la sección projects -->
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-tu-icono"></i>
    </div>
    <h3>Nombre del Proyecto</h3>
    <p>Descripción del proyecto...</p>
    <div class="project-tech">
        <span class="tech-tag">Tecnología 1</span>
        <span class="tech-tag">Tecnología 2</span>
    </div>
    <a href="URL_PROYECTO" class="project-link">Ver Detalles</a>
</div>
```

### Certificaciones

```html
<!-- Actualizar en la sección certifications -->
<div class="cert-card">
    <div class="cert-logo">
        <i class="fas fa-certificate"></i>
    </div>
    <h3>Nombre Certificación</h3>
    <p>Descripción</p>
    <span class="cert-year">Año</span>
</div>
```

### Contacto

```html
<!-- Modificar información de contacto -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>tu-email@dominio.com</span>
</div>
```

### Enlaces Sociales

```html
<!-- Actualizar enlaces sociales -->
<div class="social-links">
    <a href="https://linkedin.com/in/tu-perfil" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/tu-usuario" class="social-link">
        <i class="fab fa-github"></i>
    </a>
</div>
```

## 🎨 Personalización de Colores (styles.css)

```css
:root {
    --primary-color: #0066cc;      /* Color principal */
    --secondary-color: #00ccff;    /* Color secundario */
    --accent-color: #ff3366;       /* Color de acento */
    --dark-bg: #0a0a0a;            /* Fondo oscuro */
    --card-bg: #1a1a1a;            /* Fondo de tarjetas */
    --text-primary: #ffffff;       /* Texto principal */
    --text-secondary: #cccccc;     /* Texto secundario */
}
```

## 📱 Características Incluidas

- ✅ **Responsive Design** - Se adapta a todos los dispositivos
- ✅ **Navegación Suave** - Scroll suave entre secciones
- ✅ **Animaciones CSS** - Efectos visuales modernos
- ✅ **Formulario de Contacto** - Con validación JavaScript
- ✅ **Tema Cyberpunk** - Diseño orientado a ciberseguridad
- ✅ **SEO Optimizado** - Meta tags incluidos
- ✅ **Font Awesome Icons** - Iconos profesionales
- ✅ **Google Fonts** - Tipografía moderna

## 🔧 Estructura de Archivos

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Documentación
└── assets/             # Carpeta para imágenes (opcional)
    ├── img/
    └── icons/
```

## 📝 Checklist de Personalización

- [ ] Cambiar nombre y título profesional
- [ ] Actualizar descripción personal
- [ ] Añadir tus proyectos reales
- [ ] Incluir certificaciones actuales
- [ ] Configurar información de contacto
- [ ] Añadir enlaces a redes sociales
- [ ] Subir foto profesional (opcional)
- [ ] Personalizar colores del tema
- [ ] Añadir enlaces a repositorios GitHub
- [ ] Configurar Google Analytics (opcional)

## 🚀 Mejoras Opcionales

### Añadir Imágenes de Proyectos

```html
<div class="project-image">
    <img src="assets/img/proyecto1.png" alt="Proyecto 1">
</div>
```

### Integrar Google Analytics

```html
<!-- Añadir antes del </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Añadir Blog Section

```html
<section class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <div class="blog-grid">
            <!-- Artículos del blog -->
        </div>
    </div>
</section>
```

## 💡 Tips Adicionales

1. **Optimización SEO:**
   - Cambiar título y descripción meta
   - Añadir palabras clave relevantes
   - Usar nombres de archivo descriptivos

2. **Performance:**
   - Optimizar imágenes (WebP, compresión)
   - Minimizar CSS y JS para producción
   - Usar CDN para librerías externas

3. **Accesibilidad:**
   - Añadir alt text a imágenes
   - Usar semantic HTML
   - Contraste de colores adecuado

4. **GitHub Pages:**
   - El sitio se actualiza automáticamente al hacer push
   - Puede tardar unos minutos en reflejarse
   - Usar nombres de archivo en minúsculas

## 🔗 Enlaces Útiles

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📞 Soporte

Si tienes problemas con la instalación o personalización, puedes:
1. Revisar la documentación de GitHub Pages
2. Verificar la consola del navegador para errores
3. Asegurarte de que todos los archivos estén en el repositorio

¡Tu portfolio estará listo para impresionar a empleadores y clientes! 🚀
