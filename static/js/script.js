// =========================================================================
// PROYECTO NEUROMUNDO — LÓGICA DE TRADUCCIÓN DEEPL & CARRUSEL UNIFICADA
// =========================================================================

const traducciones = {
    // ==========================================
    // BARRA SUPERIOR Y MODO SENSORIAL
    // ==========================================
'topbar-secure-txt': {
        es: 'Espacio Seguro • Protocolo Pseudónimo y Accesibilidad Neuroinclusiva',
        en: 'Safe Space • Pseudonymous Protocol & Neuroinclusive Accessibility'
    },
    'topbar-sensory-lbl': { es: 'Modo Sensorial:', en: 'Sensory Mode:' },
    'btn-sensory-std': { es: 'Estándar', en: 'Standard' },
    'btn-sensory-hc': { es: 'Contraste', en: 'High Contrast' },

    // NAVEGACIÓN
    'nav-logo-title': { es: 'NeuroMundo', en: 'NeuroMundo' },
    'nav-logo-sub': { es: 'Plataforma Comunitaria', en: 'Community Platform' },
    'nav-link-ficha': { es: 'Ficha e Indicadores', en: 'Project & Key Metrics' },
    'nav-link-ods': { es: 'ODS & Problemática', en: 'SDGs & Problem Statement' },
    'nav-link-tech': { es: 'Tecnologías', en: 'Tech Stack' },
    'nav-link-faq': { es: 'Preguntas Frecuentes', en: 'FAQ' },
    'nav-link-team': { es: 'Equipo', en: 'Team' },
    'lbl-idioma-btn': { es: 'ESP', en: 'ENG' },

    // ==========================================
    // BIENVENIDA / HERO
    // ==========================================
    'hero-badge': { 
        es: '<i class="bi bi-sparkles"></i> BIENVENIDOS: UN ESPACIO DISEÑADO PARA TI', 
        en: '<i class="bi bi-sparkles"></i> WELCOME: A SPACE TAILORED FOR YOU' 
    },
    'hero-title': { es: 'Amar, Respetar e Incluir', en: 'Love, Respect & Include' },
    'hero-subtitle': { 
        es: 'AMAR, RESPETAR E INCLUIR • UN ENFOQUE HUMANO Y TECNOLÓGICO', 
        en: 'LOVE, RESPECT & INCLUDE • A HUMAN & TECHNOLOGICAL APPROACH' 
    },
    'hero-description': {
        es: 'NeuroMundo es un ecosistema digital e inmersivo orientado a acompañar a familias de personas neurodivergentes. Combina contención comunitaria, tecnología predictiva y experiencias de simulador para reducir el colapso, el estigma y la sobrecarga emocional.',
        en: 'NeuroMundo is an immersive digital ecosystem designed to support families of neurodivergent individuals. It combines community support, predictive technology, and simulation experiences to mitigate sensory overload, social stigma, and emotional burnout.'
    },
    'btn-hero-ficha': { es: 'Ver Ficha Técnica', en: 'View Technical Specs' },
    'btn-hero-impacto': { es: 'Medidas de Impacto', en: 'Impact Metrics' },

    // TARJETA ECOSISTEMA CONECTADO
    'ecosystem-title': { es: 'Ecosistema Conectado', en: 'Connected Ecosystem' },
    'ecosystem-subtitle': { es: 'Web Pseudónima + VR/IoT', en: 'Pseudonymous Web + VR/IoT' },
    'ecosystem-feat-1': { es: 'Reducción de crisis y colapsos', en: 'Reduction of sensory crises and meltdowns' },
    'ecosystem-feat-2': { es: 'Soporte a cuidadores 24/7', en: '24/7 Caregiver Support' },
    'ecosystem-feat-3': { es: 'Traductor empático con IA', en: 'AI-Powered Empathetic Translator' },
    'ecosystem-author': { es: 'Desarrollado por Neu Industries', en: 'Developed by Neu Industries' },

    // ==========================================
    // FICHA TÉCNICA Y MÉTRICAS
    // ==========================================
    'ficha-badge': { es: 'INFORMACIÓN DE LA APP Y FICHA DEL PROYECTO', en: 'APPLICATION OVERVIEW & TECHNICAL SPECIFICATIONS' },
    'ficha-titulo': { es: 'Ficha Técnica e Indicadores Clave', en: 'Technical Specifications & Key Performance Indicators' },
    'metric-pages-val': { es: '4 Páginas', en: '4 Pages' },
    'metric-subtitle': { es: 'Métricas validadas con impacto medible', en: 'Validated metrics with measurable impact' },

    'stat1-lbl': { es: 'Reducción del Estrés Familiar', en: 'Family Stress Reduction' },
    'stat2-lbl': { es: 'Subdiagnóstico Identificado', en: 'Identified Underdiagnosis Rate' },
    'stat3-lbl': { es: 'Atención a la Ansiedad del Cuidador', en: 'Caregiver Anxiety Relief' },
    'stat4-lbl': { es: 'Ecosistema Integrado Web/VR', en: 'Integrated Web/VR Ecosystem' },

    'ficha-lbl-nombre': { es: 'Nombre del Proyecto', en: 'Project Title' },
    'ficha-val-nombre': { es: 'NeuroMundo — Ecosistema Digital e Inmersivo para Neurodivergencias', en: 'NeuroMundo — Digital & Immersive Ecosystem for Neurodivergence' },
    'ficha-lbl-org': { es: 'Organización / Desarrollador', en: 'Organization / Developer' },
    'ficha-val-org': { es: '<i class="bi bi-building me-1"></i> Neu Industries', en: '<i class="bi bi-building me-1"></i> Neu Industries' },
    'ficha-lbl-metodo': { es: 'Enfoque Metodológico', en: 'Methodological Framework' },
    'ficha-val-metodo': { es: 'Apoyo Comunitario Pseudónimo, Corregulación Sensorial, Simulación VR/IoT', en: 'Pseudonymous Community Support, Sensory Co-regulation, VR/IoT Simulation' },
    'ficha-lbl-poblacion': { es: 'Población Objetivo', en: 'Target Demographics' },
    'ficha-val-poblacion': { es: 'Familias, Cuidadores de Primer Diagnóstico, Docentes y Profesionales de Apoyo', en: 'Families, First-Diagnosis Caregivers, Educators & Support Specialists' },

    // ==========================================
    // SECCIÓN TECNOLOGÍAS
    // ==========================================
    'tech-title': { es: 'Tecnologías Utilizadas', en: 'Technologies Used' },
'tech-ai-title': { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    'tech-frontend-desc': { 
        es: 'JS / HTML5 / CSS3<br>Interfaz responsiva, accesible, semántica y dinámicamente adaptada.', 
        en: 'JS / HTML5 / CSS3<br>Responsive, accessible, semantic, and dynamically adapted interface.' 
    },
    'tech-ai-desc': { 
        es: 'Inteligencia Artificial<br>Modelos entrenados para sugerir respuestas empáticas y validadas por profesionales.', 
        en: 'Artificial Intelligence<br>Models trained to suggest empathetic and professionally validated responses.' 
    },

    // ==========================================
    // EQUIPO Y FOOTER
    // ==========================================
    'team-role-1': { es: 'Líder de Proyecto', en: 'Project Lead' },
    'team-desc-1': { es: 'Liderazgo general y vocera principal.', en: 'Overall project direction and primary spokesperson.' },
    'team-role-2': { es: 'Sub-Líder & Dev', en: 'Co-Lead & Developer' },
    'team-desc-2': { es: 'Co-coordinación y lógica JavaScript.', en: 'Technical co-direction and core JavaScript engineering.' },
    'team-role-3': { es: 'Dev & Contenidos', en: 'Developer & Content Strategist' },
    'team-desc-3': { es: 'Estructuración, maquetación y dinámica de web.', en: 'Information architecture, layout design and web dynamics.' },
    'team-role-4': { es: 'UI/UX & Guiones', en: 'UI/UX Lead & Technical Writer' },
    'team-desc-4': { es: 'Diseño visual y guion técnico.', en: 'Visual experience design and technical storytelling.' },
    'team-role-5': { es: 'Dev & Copiloto IA', en: 'AI Engineer & Copilot Lead' },
    'team-desc-5': { es: 'Integración de herramientas e IA.', en: 'Deployment of AI models and interactive tools.' },

    'footer-org': { es: 'Neu Industries', en: 'Neu Industries' },
    'footer-desc': { 
        es: 'Ficha del Proyecto e Información de la App • Ecosistema NeuroMundo', 
        en: 'Project Specifications & Application Data • NeuroMundo Ecosystem' 
    },
    'footer-accessibility-tag': { 
        es: '<i class="bi bi-universal-access me-1 text-accent"></i> Diseñado con principios de accesibilidad universal y empatía', 
        en: '<i class="bi bi-universal-access me-1 text-accent"></i> Designed according to universal accessibility and empathetic UX principles' 
    },
    'footer-copyright': { 
        es: '© 2026 Neu Industries. Todos los derechos reservados.', 
        en: '© 2026 Neu Industries. All rights reserved.' 
    }
};

/**
 * Aplica el idioma seleccionado globalmente
 */
function aplicarIdioma(lang) {
    idiomaActual = (lang === 'es' || lang === 'en') ? lang : 'es';

    document.body.setAttribute('data-lang', idiomaActual);
    document.documentElement.setAttribute('lang', idiomaActual);

    Object.keys(traducciones).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento && traducciones[id][idiomaActual]) {
            elemento.innerHTML = traducciones[id][idiomaActual];
        }
    });

    localStorage.setItem('neu_idioma_preferido', idiomaActual);
}

function alternarIdioma() {
    const nuevoIdioma = (idiomaActual === 'es') ? 'en' : 'es';
    aplicarIdioma(nuevoIdioma);

    // Quita el foco inmediatamente para eliminar el efecto hover/glow
    if (document.activeElement) {
        document.activeElement.blur();
    }
}

function cambiarModoSensorial(modo) {
    document.body.setAttribute('data-sensory', modo);
    localStorage.setItem('neu_modo_sensorial', modo);

    // Gestor de hoja de estilo externa para Alto Contraste
    let sensoryStylesheet = document.getElementById('sensory-contrast-link');

    if (modo === 'high-contrast') {
        // Carga la hoja de CSS si no existe en el DOM
        if (!sensoryStylesheet) {
            sensoryStylesheet = document.createElement('link');
            sensoryStylesheet.id = 'sensory-contrast-link';
            sensoryStylesheet.rel = 'stylesheet';
            sensoryStylesheet.href = 'static/css/high-contrast.css';
            document.head.appendChild(sensoryStylesheet);
        }
    } else {
        // Remueve la hoja de CSS para volver al estándar
        if (sensoryStylesheet) {
            sensoryStylesheet.remove();
        }
    }

    // Actualización del estado visual de los botones
    const btnStd = document.getElementById('btn-sensory-std');
    const btnHC = document.getElementById('btn-sensory-hc');

    if (btnStd) btnStd.classList.toggle('active', modo === 'estandar');
    if (btnHC) btnHC.classList.toggle('active', modo === 'high-contrast');
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('neu_idioma_preferido');
    const idiomaNavegador = (navigator.language || navigator.userLanguage || '').startsWith('es') ? 'es' : 'en';
    aplicarIdioma(idiomaGuardado || idiomaNavegador);

    const modoGuardado = localStorage.getItem('neu_modo_sensorial') || 'estandar';
    cambiarModoSensorial(modoGuardado);

});

// Manejo de desplazamiento suave con cálculo dinámico del header
document.querySelectorAll('.navbar-nav .nav-link-custom').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Ejecutar solo si es un enlace de ancla interno
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Obtiene la altura real del header en el momento del clic
                const headerNavbar = document.querySelector('.header-navbar');
                const headerHeight = headerNavbar ? headerNavbar.offsetHeight : 100;

                const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight - 15; // 15px adicionales de margen visual

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('demo-video');

    // Creamos el "observador"
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                video.play(); // Reproducir si se ve en pantalla
            } else {
                video.pause(); // Pausar si ya no se ve
            }
        });
    }, { 
        threshold: 0.5 // Se activa cuando al menos la mitad (50%) del video es visible
    });

    // Le decimos al observador que vigile nuestro video
    if (video) {
        observer.observe(video);
    }
});