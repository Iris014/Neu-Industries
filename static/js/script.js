// =========================================================================
// PROYECTO NEUROMUNDO — LÓGICA DE IDIOMA Y MODO SENSORIAL UNIFICADA
// =========================================================================

// State global del idioma ('es' o 'en')
let idiomaActual = 'es';

// Diccionario de traducción para elementos que usan IDs específicos
const traducciones = {
    // --- NAVEGACIÓN Y LOGO ---
    'nav-logo-title': { es: 'NeuroMundo', en: 'NeuroMundo' },
    'nav-logo-sub': { es: 'Plataforma Comunitaria', en: 'Community Platform' },
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

    // --- FICHA TÉCNICA E INDICADORES ---
    'ficha-badge': { es: 'INFORMACIÓN DE LA APP Y FICHA DEL PROYECTO', en: 'APP INFORMATION AND PROJECT SPECIFICATIONS' },
    'ficha-titulo': { es: 'Ficha Técnica e Indicadores Clave', en: 'Technical Sheet and Key Indicators' },
    'stat1-val': { es: '40%', en: '40%' },
    'stat1-lbl': { es: 'Reducción del Estrés Familiar', en: 'Family Stress Reduction' },
    'stat2-val': { es: '25%', en: '25%' },
    'stat2-lbl': { es: 'Subdiagnóstico Identificado', en: 'Identified Underdiagnosis' },
    'stat3-val': { es: '80.2%', en: '80.2%' },
    'stat3-lbl': { es: 'Atención a la Ansiedad del Cuidador', en: 'Caregiver Anxiety Attention' },
    'stat4-val': { es: '4 Páginas', en: '4 Pages' },
    'stat4-lbl': { es: 'Ecosistema Integrado Web/VR', en: 'Integrated Web/VR Ecosystem' },

    'ficha-lbl-nombre': { es: 'Nombre del Proyecto', en: 'Project Name' },
    'ficha-val-nombre': { es: 'NeuroMundo — Ecosistema Digital e Inmersivo para Neurodivergencias', en: 'NeuroMundo — Digital & Immersive Ecosystem for Neurodivergence' },
    'ficha-lbl-org': { es: 'Organización / Desarrollador', en: 'Organization / Developer' },
    'ficha-val-org': { es: '<i class="bi bi-building me-1"></i> Neu Industries', en: '<i class="bi bi-building me-1"></i> Neu Industries' },
    'ficha-lbl-metodo': { es: 'Enfoque Metodológico', en: 'Methodological Approach' },
    'ficha-val-metodo': { es: 'Apoyo Comunitario Pseudónimo, Corregulación Sensorial, Simulación VR/IoT', en: 'Pseudonymous Community Support, Sensory Co-regulation, VR/IoT Simulation' },
    'ficha-lbl-poblacion': { es: 'Población Objetivo', en: 'Target Population' },
    'ficha-val-poblacion': { es: 'Familias, Cuidadores de Primer Diagnóstico, Docentes y Profesionales de Apoyo', en: 'Families, First-Diagnosis Caregivers, Teachers, and Support Professionals' },

    // --- FOOTER ---
    'footer-org': { es: 'Neu Industries', en: 'Neu Industries' },
    'footer-desc': { es: 'Ficha del Proyecto e Información de la App • Ecosistema NeuroMundo', en: 'Project Data Sheet & App Specs • NeuroMundo Ecosystem' }
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