// =========================================================================
// PROYECTO NEUROMUNDO — LÓGICA DE IDIOMA Y MODO SENSORIAL UNIFICADA
// =========================================================================

// State global del idioma ('es' o 'en')
let idiomaActual = 'es';

// Diccionario de traducción para elementos que usan IDs específicos
const traducciones = {
'topbar-secure-txt': {
        es: 'Espacio Seguro • Protocolo Pseudónimo y Accesibilidad Neuroinclusiva',
        en: 'Safe Space • Pseudonymous Protocol & Neuroinclusive Accessibility'
    },
    'topbar-sensory-lbl': { es: 'Modo Sensorial:', en: 'Sensory Mode:' },
    'btn-sensory-std': { es: 'Estándar', en: 'Standard' },
    'btn-sensory-hc': { es: 'Contraste', en: 'Contrast' },

    'nav-logo-title': { es: 'NeuroMundo', en: 'NeuroMundo' },
    'nav-logo-sub': { es: 'Plataforma Comunitaria', en: 'Community Platform' },
    
    // Enlaces de navegación
    'nav-link-welcome': { es: '<i class="bi bi-sparkles me-1 text-accent"></i> Bienvenida', en: '<i class="bi bi-sparkles me-1 text-accent"></i> Welcome' },
    'nav-link-ficha': { es: '<i class="bi bi-card-heading me-1 text-accent"></i> Ficha del Proyecto', en: '<i class="bi bi-card-heading me-1 text-accent"></i> Project Overview' },
    'nav-link-metrics': { es: '<i class="bi bi-graph-up-arrow me-1 text-accent"></i> Indicadores Clave', en: '<i class="bi bi-graph-up-arrow me-1 text-accent"></i> Key Metrics' },
    'nav-link-tech': { es: '<i class="bi bi-cpu me-1 text-accent"></i> Tecnologías', en: '<i class="bi bi-cpu me-1 text-accent"></i> Tech Stack' },
    'nav-link-team': { es: '<i class="bi bi-people me-1 text-accent"></i> Equipo', en: '<i class="bi bi-people me-1 text-accent"></i> Our Team' },
    'lbl-idioma-btn': { es: 'ESP', en: 'ENG' },

    // --- HERO / BIENVENIDA ---
    'hero-badge': { 
        es: '<i class="bi bi-sparkles"></i> BIENVENIDOS: UN ESPACIO DISEÑADO PARA TI', 
        en: '<i class="bi bi-sparkles"></i> WELCOME: A SPACE DESIGNED FOR YOU' 
    },
    'hero-title': { es: 'Amar, Respetar e Incluir', en: 'Love, Respect and Include' },
    'hero-subtitle': { 
        es: 'AMAR, RESPETAR E INCLUIR • UN ENFOQUE HUMANO Y TECNOLÓGICO', 
        en: 'LOVE, RESPECT AND INCLUDE • A HUMAN & TECHNOLOGICAL APPROACH' 
    },
    'hero-description': {
        es: 'NeuroMundo es un ecosistema digital e inmersivo orientado a acompañar a familias de personas neurodivergentes. Combina contención comunitaria, tecnología predictiva y experiencias de simulador para reducir el colapso, el estigma y la sobrecarga emocional.',
        en: 'NeuroMundo is a digital and immersive ecosystem designed to support families of neurodivergent individuals. It combines community support, predictive technology, and simulation experiences to reduce burnout, stigma, and emotional overload.'
    },
    'btn-hero-ficha': { 
        es: '<i class="bi bi-compass me-2"></i> Ver Ficha Técnica', 
        en: '<i class="bi bi-compass me-2"></i> View Technical Sheet' 
    },
    'btn-hero-metrics': { 
        es: '<i class="bi bi-activity me-2"></i> Métricas de Impacto', 
        en: '<i class="bi bi-activity me-2"></i> Impact Metrics' 
    },
// --- TARJETA LATERAL HERO ---
    'hero-card-title': { es: 'Ecosistema Conectado', en: 'Connected Ecosystem' },
    'hero-card-sub': { es: 'Web Pseudónima + VR/IoT', en: 'Pseudonymous Web + VR/IoT' },
    'hero-card-feature1': { es: 'Reducción de crisis y colapsos', en: 'Crisis & meltdown reduction' },
    'hero-card-feature2': { es: 'Soporte a cuidadores 24/7', en: '24/7 caregiver support' },
    'hero-card-feature3': { es: 'Traductor empático con IA', en: 'AI-powered empathetic translator' },
    'hero-card-tag': { es: 'Desarrollado por Neu Industries', en: 'Developed by Neu Industries' },

    // --- FICHA TÉCNICA E INDICADORES ---
    'ficha-badge': { es: 'INFORMACIÓN DE LA APP Y FICHA DEL PROYECTO', en: 'APP SPECIFICATIONS & PROJECT OVERVIEW' },
    'ficha-titulo': { es: 'Ficha Técnica e Indicadores Clave', en: 'Technical Data & Key Indicators' },
    'ficha-validated-metrics': { es: '<i class="bi bi-activity text-accent me-1"></i> Métricas validadas con impacto medible', en: '<i class="bi bi-activity text-accent me-1"></i> Validated metrics with measurable impact' },
    'stat1-val': { es: '40%', en: '40%' },
    'stat1-lbl': { es: 'Reducción del Estrés Familiar', en: 'Family Stress Reduction' },
    'stat2-val': { es: '25%', en: '25%' },
    'stat2-lbl': { es: 'Subdiagnóstico Identificado', en: 'Identified Underdiagnosis' },
    'stat3-val': { es: '80.2%', en: '80.2%' },
    'stat3-lbl': { es: 'Atención a la Ansiedad del Cuidador', en: 'Caregiver Anxiety Support' },
    'stat4-val': { es: '4 Páginas', en: '4 Pages' },
    'stat4-lbl': { es: 'Ecosistema Integrado Web/VR', en: 'Integrated Web/VR Ecosystem' },

    'ficha-lbl-nombre': { es: 'Nombre del Proyecto', en: 'Project Name' },
    'ficha-val-nombre': { es: 'NeuroMundo — Ecosistema Digital e Inmersivo para Neurodivergencias', en: 'NeuroMundo — Digital & Immersive Ecosystem for Neurodivergence' },
    'ficha-lbl-org': { es: 'Organización / Desarrollador', en: 'Organization / Developer' },
    'ficha-val-org': { es: '<i class="bi bi-building me-1"></i> Neu Industries', en: '<i class="bi bi-building me-1"></i> Neu Industries' },
    'ficha-lbl-metodo': { es: 'Enfoque Metodológico', en: 'Methodological Approach' },
    'ficha-val-metodo': { es: 'Apoyo Comunitario Pseudónimo, Corregulación Sensorial, Simulación VR/IoT', en: 'Pseudonymous Community Support, Sensory Co-regulation, VR/IoT Simulation' },
    'ficha-lbl-poblacion': { es: 'Población Objetivo', en: 'Target Audience' },
    'ficha-val-poblacion': { es: 'Familias, Cuidadores de Primer Diagnóstico, Docentes y Profesionales de Apoyo', en: 'Families, First-Diagnosis Caregivers, Educators, and Support Professionals' },

    // --- STACK TECNOLÓGICO (SECCIÓN 5) ---
    'tech-js-desc': {
        es: 'Interfaz responsiva, accesible, semántica y dinámicamente adaptada.',
        en: 'Responsive, accessible, semantic, and dynamically adaptive user interface.'
    },
    'tech-ai-desc': {
        es: 'Modelos entrenados para sugerir respuestas empáticas y validadas por profesionales.',
        en: 'Trained models providing empathetic, professionally validated recommendations.'
    },

    // --- GALERÍA (SECCIÓN 8) ---
    'gallery-cap1': { es: 'Tablero AAC de Comunicación', en: 'AAC Communication Board' },
    'gallery-cap2': { es: 'Copiloto IA Adaptativo', en: 'Adaptive AI Copilot' },

    // --- EQUIPO DE TRABAJO (SECCIÓN 10) ---
    'team-role-1': { es: 'Líder de Proyecto', en: 'Project Lead' },
    'team-desc-1': { es: 'Liderazgo general y vocera principal.', en: 'Overall project leadership and primary spokesperson.' },
    'team-role-2': { es: 'Sub-Líder & Dev', en: 'Co-Lead & Developer' },
    'team-desc-2': { es: 'Co-coordinación y lógica JavaScript.', en: 'Technical co-direction and JavaScript core logic.' },
    'team-role-3': { es: 'Dev & Contenidos', en: 'Dev & Content Strategist' },
    'team-desc-3': { es: 'Estructuración y maquetación web.', en: 'Web architecture and frontend layout design.' },
    'team-role-4': { es: 'UI/UX & Guiones', en: 'UI/UX & Technical Writer' },
    'team-desc-4': { es: 'Diseño visual y guion técnico.', en: 'User experience design and technical narrative.' },
    'team-role-5': { es: 'Dev & Copiloto IA', en: 'Dev & AI Integration' },
    'team-desc-5': { es: 'Integración de herramientas e IA.', en: 'AI deployment and interactive tool integration.' },

    // --- FOOTER ---
'footer-org': { es: 'Neu Industries', en: 'Neu Industries' },
    'footer-desc': { 
        es: 'Ecosistema digital e inmersivo para el acompañamiento y apoyo integral a la neurodivergencia.', 
        en: 'Digital and immersive ecosystem for neurodivergence support and community care.' 
    },
    
    // Títulos de columnas del footer
    'footer-title-navigation': { es: 'Navegación Rápida', en: 'Quick Navigation' },
    'footer-title-legal': { es: 'Privacidad y Protocolos', en: 'Privacy & Protocols' },
    'footer-title-contact': { es: 'Contacto y Soporte', en: 'Contact & Support' },

    // Enlaces dentro de las columnas
    'footer-link-home': { es: 'Inicio / Bienvenida', en: 'Home / Welcome' },
    'footer-link-ficha': { es: 'Ficha Técnica', en: 'Technical Specifications' },
    'footer-link-metrics': { es: 'Métricas de Impacto', en: 'Impact Metrics' },
    'footer-link-tech': { es: 'Tecnologías y Enfoque', en: 'Technologies & Approach' },
    'footer-link-team': { es: 'Equipo de Desarrollo', en: 'Development Team' },

    // Enlaces legales y de protocolo
    'footer-link-privacy': { es: 'Política de Pseudonimato', en: 'Pseudonymity Policy' },
    'footer-link-terms': { es: 'Términos de Servicio', en: 'Terms of Service' },
    'footer-link-sensory-guide': { es: 'Guía de Corregulación', en: 'Co-regulation Guide' },
    'footer-link-accessibility-statement': { es: 'Declaración de Accesibilidad', en: 'Accessibility Statement' },

    // Etiquetas y copyright
    'footer-accessibility-tag': { 
        es: '<i class="bi bi-universal-access me-1 text-accent"></i> Diseñado bajo principios de accesibilidad universal y empatía digital', 
        en: '<i class="bi bi-universal-access me-1 text-accent"></i> Designed following universal accessibility principles and digital empathy' 
    },
    'footer-copyright': { 
        es: '© 2026 Neu Industries. Todos los derechos reservados.', 
        en: '© 2026 Neu Industries. All rights reserved.' 
    }
};

/**
 * Función principal para aplicar el idioma seleccionado en todo el HTML
 * @param {string} lang - Idioma a aplicar ('es' o 'en')
 */
function aplicarIdioma(lang) {
    idiomaActual = (lang === 'es' || lang === 'en') ? lang : 'es';

    // 1. Activar el atributo 'data-lang' en <body> (Aplica reglas CSS para clases .lang-es / .lang-en)
    document.body.setAttribute('data-lang', idiomaActual);
    document.documentElement.setAttribute('lang', idiomaActual);

    // 2. Recorrer el diccionario para traducir los elementos dinámicos por ID
    Object.keys(traducciones).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento && traducciones[id][idiomaActual]) {
            elemento.innerHTML = traducciones[id][idiomaActual];
        }
    });

    // 3. Guardar la preferencia del usuario en localStorage
    localStorage.setItem('neu_idioma_preferido', idiomaActual);
}

/**
 * Alterna el idioma entre Español e Inglés al hacer clic en el botón
 */
function alternarIdioma() {
    const nuevoIdioma = (idiomaActual === 'es') ? 'en' : 'es';
    aplicarIdioma(nuevoIdioma);
}

/**
 * Control del Modo Sensorial (Estándar / Alto Contraste)
 * @param {string} modo - 'estandar' o 'high-contrast'
 */
function cambiarModoSensorial(modo) {
    document.body.setAttribute('data-sensory', modo);
    localStorage.setItem('neu_modo_sensorial', modo);

    const btnStd = document.getElementById('btn-sensory-std');
    const btnHC = document.getElementById('btn-sensory-hc');

    if (btnStd) btnStd.classList.toggle('active', modo === 'estandar');
    if (btnHC) btnHC.classList.toggle('active', modo === 'high-contrast');
}

// =========================================================================
// INICIALIZACIÓN AL CARGAR EL DOM
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar preferencia de idioma guardada (o detectar idioma del navegador)
    const idiomaGuardado = localStorage.getItem('neu_idioma_preferido');
    const idiomaNavegador = (navigator.language || navigator.userLanguage || '').startsWith('es') ? 'es' : 'en';
    const idiomaInicial = idiomaGuardado || idiomaNavegador;

    aplicarIdioma(idiomaInicial);

    // Cargar preferencia de modo sensorial
    const modoGuardado = localStorage.getItem('neu_modo_sensorial') || 'estandar';
    cambiarModoSensorial(modoGuardado);

    // Listener para acordeones o botones desplegables del foro/respuestas
    const botonesToggle = document.querySelectorAll('.btn-toggle-respuesta');
    botonesToggle.forEach(boton => {
        boton.addEventListener('click', () => {
            const respuestaBox = boton.nextElementSibling;
            const textoBtn = boton.querySelector('.texto-btn');

            if (respuestaBox) {
                respuestaBox.classList.toggle('cerrado');
                const estaCerrado = respuestaBox.classList.contains('cerrado');
                if (textoBtn) {
                    textoBtn.textContent = estaCerrado
                        ? '✓ Ver respuesta validada (+142 confirmaciones)'
                        : '✓ Ocultar respuesta validada (+142 confirmaciones)';
                }
            }
        });
    });
});