console.log("Conexión con JS")
// Variable global para controlar el idioma actual ('es' o 'en')
let idioma = 'es';

// Diccionario de traducciones mapeado por ID de elemento
const traducciones = {
    // --- NAVEGACIÓN Y LOGO ---
    'nav-logo-title': { es: 'Red TEA', en: 'ASD Network' },
    'nav-logo-sub': { es: 'Plataforma Comunitaria', en: 'Community Platform' },
    'nav-link-problematica': { es: 'Problemática', en: 'Issues' },
    'nav-link-ods': { es: 'ODS', en: 'SDGs' },
    'nav-link-solucion': { es: 'Solución', en: 'Solution' },
    'btn-idioma': { es: 'Idioma: ESP', en: 'Language: ENG' },

    // --- BANNER PRINCIPAL ---
    'hero-badge': { es: 'BIENVENIDOS: UN ESPACIO DISEÑADO PARA TI', en: 'WELCOME: A SPACE DESIGNED FOR YOU' },
    'hero-title': { es: 'Love, Respect and Include', en: 'Love, Respect and Include' },
    'hero-subtitle': { es: 'AMAR, RESPETAR E INCLUIR • UN ENFOQUE HUMANO Y TECNOLÓGICO', en: 'LOVE, RESPECT AND INCLUDE • A HUMAN & TECHNOLOGICAL APPROACH' },
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
    'ficha-val-org': { es: 'Neu Industries', en: 'Neu Industries' },
    'ficha-lbl-metodo': { es: 'Enfoque Metodológico', en: 'Methodological Approach' },
    'ficha-val-metodo': { es: 'Apoyo Comunitario Pseudónimo, Corregulación Sensorial, Simulación VR/IoT', en: 'Pseudonymous Community Support, Sensory Co-regulation, VR/IoT Simulation' },
    'ficha-lbl-poblacion': { es: 'Población Objetivo', en: 'Target Population' },
    'ficha-val-poblacion': { es: 'Familias, Cuidadores de Primer Diagnóstico, Docentes y Profesionales de Apoyo', en: 'Families, First-Diagnosis Caregivers, Teachers, and Support Professionals' },

    // --- BLOQUE 1: PÁGINAS MAQUETA ---
    'arq-badge': { es: 'ARQUITECTURA DE NAVEGACIÓN', en: 'NAVIGATION ARCHITECTURE' },
    'arq-titulo': { es: '1. Maqueta de la Plataforma Web (4 Páginas Interactivas)', en: '1. Web Platform Mockup (4 Interactive Pages)' },

    // Página 1
    'p1-tag': { es: 'PÁGINA 1', en: 'PAGE 1' },
    'p1-title': { es: 'Diagnóstico e Invisibilidad — El Desafío Oculto del Autismo', en: 'Diagnosis and Invisibility — Autism\'s Hidden Challenge' },
    'p1-purpose': { es: '<strong>¿Por qué existe?</strong> Visibiliza la realidad del subdiagnóstico y rompe la barrera de la desinformación inicial (35%-40% de ideas erróneas). Ayuda a identificar señales tempranas sin caer en culpa o confusión con "rebeldía".', en: '<strong>Why does it exist?</strong> Highlights the reality of underdiagnosis and breaks the initial misinformation barrier (35%-40% misconceptions). Helps identify early signs without guilt or confusion with "rebellion".' },
    'p1-banner-tag': { es: 'HERO BANNER IMPACTANTE', en: 'IMPACTFUL HERO BANNER' },
    'p1-banner-title': { es: '"No es rebeldía, es neurodivergencia: Entendiendo las señales no vistas"', en: '"It is not rebellion, it is neurodivergence: Understanding unseen signs"' },
    'p1-card1-title': { es: '📊 Infografía Rutgers (Datos Casos)', en: '📊 Rutgers Infographic (Case Data)' },
    'p1-card1-text': { es: 'Tarjetas interactivas que destacan el 25% de casos no detectados en menores de 8 años y en la adolescencia (16 años).', en: 'Interactive cards highlighting 25% undetected cases under age 8 and in adolescence (age 16).' },
    'p1-card2-title': { es: '🗺️ Módulo de Brecha Social', en: '🗺️ Social Gap Module' },
    'p1-card2-text': { es: 'Gráfico comparativo que expone cómo la falta de acceso a especialistas afecta con mayor gravedad a comunidades vulnerables.', en: 'Comparative chart exposing how lack of specialist access severely impacts vulnerable communities.' },
    'p1-card3-title': { es: '🧩 Test de Orientación Sensorial y Conductual (No Clínico)', en: '🧩 Sensory & Behavioral Guidance Test (Non-Clinical)' },
    'p1-card3-text': { es: 'Cuestionario interactivo para ayudar a cuidadores a diferenciar entre un berrinche convencional y un colapso sensorial (meltdown).', en: 'Interactive quiz helping caregivers differentiate between a standard tantrum and a sensory meltdown.' },

    // Página 2
    'p2-tag': { es: 'PÁGINA 2', en: 'PAGE 2' },
    'p2-title': { es: 'Comunidad y Respuestas — Red Pseudónima de Apoyo (Estilo Reddit)', en: 'Community & Answers — Pseudonymous Support Network (Reddit-style)' },
    'p2-purpose': { es: '<strong>¿Por qué existe?</strong> Núcleo operativo del proyecto. Resuelve el soporte del día a día manteniendo la privacidad del menor y reduciendo el estigma social mediante perfiles basados en patrones conductuales.', en: '<strong>Why does it exist?</strong> Core operative unit. Solves daily support while preserving child privacy and reducing social stigma via profiles based on behavioral patterns.' },
    'p2-card1-title': { es: '🔍 Barra de Búsqueda y Filtros Conductuales', en: '🔍 Search Bar & Behavioral Filters' },
    'p2-card1-text': { es: 'Filtros por variables: Sensibilidad Sensorial, Nivel de Comunicación, Manejo de Crisis en Público y Rutinas de Sueño/Alimentación.', en: 'Filters by variables: Sensory Sensitivity, Communication Level, Public Meltdown Management, and Sleep/Eating Routines.' },
    'p2-card2-title': { es: '💬 Feed de Hilos con Sistema de Votación', en: '💬 Thread Feed with Voting System' },
    'p2-card2-text': { es: 'Visualización clara tipo foro con dudas reales y respuestas comunitarias validadas (las soluciones más efectivas quedan arriba).', en: 'Forum-style layout with real questions and validated community answers (most effective solutions stay on top).' },
    'p2-card3-title': { es: '🤖 Asistente "Copiloto Comunitario IA"', en: '🤖 "AI Community Copilot" Assistant' },
    'p2-card3-text': { es: 'Widget discreto e inteligente en el margen inferior. Sintetiza y resume las mejores soluciones del foro para preguntas rápidas del usuario.', en: 'Discreet intelligent bottom widget. Summarizes top forum solutions for fast user queries.' },

    // Página 3
    'p3-tag': { es: 'PÁGINA 3', en: 'PAGE 3' },
    'p3-title': { es: 'Empatía y Simulación — Experiencia Inmersiva VR e IoT', en: 'Empathy & Simulation — VR & IoT Immersive Experience' },
    'p3-purpose': { es: '<strong>¿Por qué existe?</strong> Traduce la teoría en una experiencia transformadora. Permite a los padres experimentar la hiper o hiposensibilidad sensorial para acelerar la adaptación del entorno en casa.', en: '<strong>Why does it exist?</strong> Translates theory into a transformative experience. Allows parents to experience hyper or hyposensitivity to adapt home environments faster.' },
    'p3-card1-title': { es: '🥽 Centro de Conexión VR', en: '🥽 VR Connection Center' },
    'p3-card1-text': { es: 'Vinculación de visores accesibles para ajustar parámetros de luz, ruido ambiental o texturas según el perfil del niño.', en: 'Pairing accessible headsets to adjust light, environmental noise, or texture settings matching the child profile.' },
    'p3-card2-title': { es: '🖥️ Simulador Web Interactivo', en: '🖥️ Interactive Web Simulator' },
    'p3-card2-text': { es: 'Muestra visual y auditiva de un supermercado o centro médico con sobrecarga sensorial, explicando el origen del aleteo.', en: 'Visual and auditory preview of a grocery store or medical clinic with sensory overload, explaining stimming root causes.' },
    'p3-card3-title': { es: '📥 Guías Visuales Descargables', en: '📥 Downloadable Visual Guides' },
    'p3-card3-text': { es: 'Plantillas con pictogramas para el refrigerador, secuencias visuales médicas y temporizadores de uso de pantallas.', en: 'Pictogram templates for fridge placement, medical visual steps, and screen time countdowns.' },

    // Página 4
    'p4-tag': { es: 'PÁGINA 4', en: 'PAGE 4' },
    'p4-title': { es: 'Impacto y Bienestar — Reducción del Estrés y Sostenibilidad', en: 'Impact & Well-being — Stress Reduction & Sustainability' },
    'p4-purpose': { es: '<strong>¿Por qué existe?</strong> Demuestra el valor social y la efectividad del modelo. Presenta los datos de salud mental de los cuidadores y los resultados del entrenamiento en corregulación.', en: '<strong>Why does it exist?</strong> Demonstrates social value and model efficacy. Displays caregiver mental health metrics and co-regulation training outcomes.' },
    'p4-card1-title': { es: '📈 Dashboard Familiar', en: '📈 Family Dashboard' },
    'p4-card1-text': { es: 'Gráficos que muestran la reducción del estrés en un 40% al aplicar corregulación en lugar de castigos.', en: 'Analytics illustrating 40% stress reduction by adopting co-regulation over punitive discipline.' },
    'p4-card2-title': { es: '💚 Salud Mental Cuidador', en: '💚 Caregiver Mental Health' },
    'p4-card2-text': { es: 'Recursos para validar y acompañar la ansiedad (80.2%) y depresión (72.5%) de las madres.', en: 'Tools to validate and manage maternal anxiety (80.2%) and depression (72.5%).' },
    'p4-card3-title': { es: '🌍 Panel ODS ONU', en: '🌍 UN SDG Dashboard' },
    'p4-card3-text': { es: 'Exposición clara del impacto alineado con las metas globales (ODS 3, 4, 8 y 10).', en: 'Clear breakdown of impact aligned with global goals (SDGs 3, 4, 8, and 10).' },

    // --- BLOQUE 2: ODS ---
    'ods-badge': { es: 'SOSTENIBILIDAD Y RESULTADOS', en: 'SUSTAINABILITY AND RESULTS' },
    'ods-titulo': { es: '2. Matriz Gráfica de Impacto ODS', en: '2. SDG Impact Matrix' },
    'ods-header-banner': { es: 'MATRIZ DE IMPACTO EN OBJETIVOS DE DESARROLLO SOSTENIBLE (ONU)', en: 'IMPACT MATRIX ON UN SUSTAINABLE DEVELOPMENT GOALS' },
    
    'ods3-title': { es: 'Salud y Bienestar', en: 'Good Health & Well-being' },
    'ods3-problem': { es: '<strong>Problema:</strong> 72.5% de madres presentan depresión y 80.2% ansiedad por agotamiento y sobrecarga.', en: '<strong>Problem:</strong> 72.5% of mothers face depression and 80.2% anxiety due to burnout.' },
    'ods3-impact': { es: '<strong>Impacto:</strong> Reducción del 40% del estrés familiar mediante corregulación e intervención preventiva en salud mental.', en: '<strong>Impact:</strong> 40% family stress reduction through co-regulation and preventive mental health intervention.' },

    'ods4-title': { es: 'Educación de Calidad', en: 'Quality Education' },
    'ods4-problem': { es: '<strong>Problema:</strong> 35%-40% de padres primerizos enfrentan el diagnóstico con desinformación o castigos.', en: '<strong>Problem:</strong> 35%-40% of first-time parents deal with diagnosis using misinformation or punishment.' },
    'ods4-impact': { es: '<strong>Impacto:</strong> Ecosistema no formal de educación continua con pictogramas, CAA y guías sin violencia.', en: '<strong>Impact:</strong> Non-formal continuous learning ecosystem with pictograms, AAC, and non-violent guides.' },

    'ods10-title': { es: 'Reducción de Desigualdades', en: 'Reduced Inequalities' },
    'ods10-problem': { es: '<strong>Problema:</strong> Falta de acceso especialista en sectores vulnerables o comunidades latinas/afro.', en: '<strong>Problem:</strong> Lack of specialist access in low-income or minority communities.' },
    'ods10-impact': { es: '<strong>Impacto:</strong> Democratización del conocimiento especializado a través de una web gratuita y ligera.', en: '<strong>Impact:</strong> Democratization of expert knowledge via a free and lightweight website.' },

    'ods8-title': { es: 'Trabajo Decente', en: 'Decent Work & Growth' },
    'ods8-problem': { es: '<strong>Problema:</strong> 25% a 45% de cuidadores deben reducir jornada o renunciar al empleo por desregulación.', en: '<strong>Problem:</strong> 25% to 45% of caregivers quit or cut working hours due to child dysregulation.' },
    'ods8-impact': { es: '<strong>Impacto:</strong> Estabilización del hogar, recuperación de autonomía de tiempo y sostenibilidad laboral.', en: '<strong>Impact:</strong> Home stabilization, recovery of time autonomy, and job sustainability.' },

    // --- BLOQUE 3: RESPALDOS TECNOLÓGICOS ---
    'respaldo-badge': { es: 'INNOVACIÓN Y TECNOLOGÍA', en: 'INNOVATION & TECHNOLOGY' },
    'respaldo-titulo': { es: '3. Componentes de Respaldo para Profundizar la Solución', en: '3. Supporting Components to Deepen Solution Impact' },

    'resp1-title': { es: 'A. Biblioteca de Patrones Sensoriales y Conductuales', en: 'A. Sensory & Behavioral Pattern Library' },
    'resp1-detail': { es: '<strong>Detalle:</strong> En lugar de grados rígidos, las fichas mapean desencadenantes (ruidos, texturas) y reguladores (aleteo, abrazos de compresión).', en: '<strong>Detail:</strong> Instead of rigid labels, profiles map triggers (noise, textures) and regulators (stimming, deep pressure).' },
    'resp1-why': { es: '<strong>Por qué respalda:</strong> Permite encontrar cuidadores con la combinación exacta de sensibilidad para compartir soluciones.', en: '<strong>Why it supports:</strong> Matches caregivers with exact sensory profiles to share target solutions.' },

    'resp2-title': { es: 'B. Algoritmo de Consenso Empático', en: 'B. Empathetic Consensus Algorithm' },
    'resp2-detail': { es: '<strong>Detalle:</strong> Sistema de votación que prioriza respuestas con el indicador "Esto funcionó en mi caso en [X] semanas".', en: '<strong>Detail:</strong> Voting system prioritizing answers tagged with "This worked for us in [X] weeks".' },
    'resp2-why': { es: '<strong>Por qué respalda:</strong> Posiciona soluciones por tasa real de éxito en la práctica cotidiana y no solo por popularidad.', en: '<strong>Why it supports:</strong> Ranks solutions by practical real-life success rate rather than popularity.' },

    'resp3-title': { es: 'C. Protocolo de "Traducción Sintomática" para Copiloto IA', en: 'C. "Symptom Translation" Protocol for AI Copilot' },
    'resp3-detail': { es: '<strong>Detalle:</strong> La IA actúa como traductor no verbal. Si un padre ingresa "se muerde la mano en la cocina", la IA sugiere causas probables según la comunidad.', en: '<strong>Detail:</strong> AI acts as non-verbal translator. If a parent types "bites hand in kitchen", AI suggests community-backed root causes.' },
    'resp3-why': { es: '<strong>Por qué respalda:</strong> Pasa del enojo o miedo a la empatía inmediata sugiriendo apoyos visuales antes de la crisis.', en: '<strong>Why it supports:</strong> Shifts anger/fear into immediate empathy by suggesting visual supports before meltdowns.' },

    'resp4-title': { es: 'D. Sesiones de "Descompresión Guiada" en VR (IoT)', en: 'D. Guided Decompression VR/IoT Sessions' },
    'resp4-detail': { es: '<strong>Detalle:</strong> Modo de contraste interactivo en VR donde el padre siente la sobrecarga del supermercado y luego aplica "filtros de regulación".', en: '<strong>Detail:</strong> Interactive VR contrast mode where parents feel grocery store sensory overload, then apply regulation filters.' },
    'resp4-why': { es: '<strong>Por qué respalda:</strong> Demuestra visual y auditivamente cómo un pequeño ajuste reduce la carga cognitiva del niño.', en: '<strong>Why it supports:</strong> Visually and audibly demonstrates how small adjustments lower cognitive load.' },

    // --- BLOQUE 4: FORO / CASOS ---
    'foro-badge': { es: 'INTERFAZ DE COMUNIDAD', en: 'COMMUNITY INTERFACE' },
    'foro-titulo': { es: '4. Banco de Casos Reales Integrados en la Plataforma', en: '4. Real Community Cases Integrated into Platform' },
    
    'cat1-title': { es: 'Categoría 1: Crisis e Sobrecarga Sensorial en Espacios Públicos', en: 'Category 1: Public Sensory Overload & Meltdowns' },
    'cat1-sub': { es: 'Casos relacionados con desregulación en supermercados y salas médicas', en: 'Cases related to dysregulation in grocery stores and medical waiting rooms' },

    'c1-user': { es: 'Cuidador Anon_8241', en: 'Caregiver Anon_8241' },
    'c1-tag': { es: 'Caso 1: El colapso en el supermercado', en: 'Case 1: Meltdown at the grocery store' },
    'c1-q': { es: '"Hola. Hoy fuimos al supermercado y mi hijo de 6 años se tiró al suelo a gritar y patear cerca de las cajas. Sentí muchísimo miedo y vergüenza por cómo nos miraba la gente. Pensé que me estaba haciendo un berrinche para que le comprara un dulce, así que me enojé, lo regañé y lo saqué a la fuerza. Llegamos a casa exhaustos y llorando los dos. No sé cómo quitarle esa maña."', en: '"Hi. Today at the supermarket my 6yo son threw himself on the floor screaming near checkout. I felt terrified and embarrassed by stares. Thought it was a tantrum for candy, got angry, scolded him, and dragged him out. We both ended up crying at home. How do I stop this habit?"' },
    'c1-badge': { es: 'Respuesta Validada por la Comunidad (+142 confirmaciones)', en: 'Community Validated Answer (+142 confirmations)' },
    'c1-a': { es: '"Uff, te entiendo perfectamente porque a mí me pasó exactamente lo mismo al principio y también sentí muchísima vergüenza, pero créeme que no es una maña ni un berrinche, sino que el pobre se saturó con tanta luz, ruido y gente. Lo que a mí me sirvió para que no me vuelva a pasar fue empezar a hacer compras cortas a horas donde no hay casi nadie y llevarlo siempre con sus audífonos para el ruido o su juguete favorito para distraerlo; pero si de verdad le da la crisis ahí mismo, lo mejor que puedes hacer es olvidarte de la gente que mira feo, no perder el control regañándolo porque en ese momento ni te escucha, y simplemente agarrarlo con amor, llevarlo al auto o a un sitio solo y quedarte a su lado abrazándolo o acompañándolo en silencio hasta que se le pase el colapso."', en: '"I completely feel you. I experienced the same shame early on. Trust me, it is not a tantrum; he was overwhelmed by lights, noise, and crowds. Short shopping trips during quiet hours with noise-canceling headphones helped us immensely. If a meltdown happens, ignore stares, stay calm, move to a quiet spot, and hold him lovingly until it passes."' },

    'c2-user': { es: 'Cuidador Anon_3190', en: 'Caregiver Anon_3190' },
    'c2-tag': { es: 'Caso 2: Regulación y aleteo en la sala de espera médica', en: 'Case 2: Stimming in the medical waiting room' },
    'c2-q': { es: '"Le tocó vacuna a mi hijo de 5 años. En la sala de espera empezó a caminar en círculos y a aletear muy fuerte con las manos. Me dio miedo que la gente pensara que está mal o que se saliera de control, así que le agarré las manos con fuerza y le dije que se quedara quieto. Se puso rígido, empezó a llorar desconsoladamente y no dejamos que el doctor lo revisara. ¿Cómo le quito esos movimientos tan raros?"', en: '"My 5yo had a vaccine appointment. In the waiting room he walked in circles and flapped his hands hard. Fearing judgment, I grabbed his hands firmly and told him to stop. He went rigid and cried hysterically. How do I stop these strange movements?"' },
    'c2-badge': { es: 'Respuesta Validada por la Comunidad (+98 confirmaciones)', en: 'Community Validated Answer (+98 confirmations)' },
    'c2-a': { es: '"Te entiendo el susto y la pena con los demás, pero agarrarle las manos es lo peor que podemos hacer porque ese aleteo es su forma de sacar todo el estrés y el miedo que siente de estar ahí. Lo que me enseñaron a mí para prevenir ese pánico antes de salir de casa es dibujarle en una hojita la secuencia de lo que va a pasar, tipo el auto, la sala de espera, el doctor y luego la casa, para que él ya sepa qué viene y no esté tan asustado; y ya estando en la sala de espera, de verdad no le frenes las manos ni te preocupes por lo que piense la gente, déjalo aletear tranquilo porque así es como su propio cuerpo se calma solo para poder entrar con el doctor."', en: '"Holding his hands back escalates panic—hand flapping is how his body self-regulates stress. Draw a simple visual schedule before leaving home (Car -> Waiting Room -> Doctor -> Home). In waiting rooms, let him stim freely; it calms his nervous system."' },

    'cat2-title': { es: 'Categoría 2: Comunicación No Verbal y Frustración', en: 'Category 2: Non-Verbal Communication & Frustration' },
    'cat2-sub': { es: 'Estrategias de comunicación alternativa y prevención de autoagresión', en: 'Alternative communication techniques and self-harm prevention' },

    'c3-user': { es: 'Cuidador Anon_1042', en: 'Caregiver Anon_1042' },
    'c3-tag': { es: 'Caso 3: Autoagresión por falta de comunicación', en: 'Case 3: Self-injurious behavior from communication gaps' },
    'c3-q': { es: '"Estoy desesperada. Mi hija de 4 años no habla y lleva toda la tarde mordiéndose la mano y empujándome hacia la cocina. Me da miedo que se haga daño o que esto se vuelva su forma de reaccionar siempre. Intenté adivinar qué quería dándole comida, pero se frustró más y me lanzó un vaso. Siento que no logro conectar con ella y me da pánico que nunca podamos comunicarnos."', en: '"Desperate mom here. Non-verbal 4yo has spent the afternoon biting her hand and pushing me towards the kitchen. I tried guessing with food, but she got frustrated and threw a cup. I panic thinking we will never communicate."' },
    'c3-badge': { es: 'Respuesta Validada por la Comunidad (+210 confirmaciones)', en: 'Community Validated Answer (+210 confirmations)' },
    'c3-a': { es: '"Sé lo feo que se siente esa desesperación y ver que se lastima, pero piensa que ella solo está desesperada por no poder decirte algo tan simple como que tiene sed. A mí me salvó la vida pegar fotos de la comida, el agua y la leche en la puerta del refrigerador a la altura de mi hijo para prevenir esos momentos, y lo que te recomiendo hacer hoy que pase de nuevo es no ponerte a adivinar como loca, sino llevarla de la mano hasta donde están las fotos, guiarle suavemente el dedito para que toque la imagen del agua, dársela enseguida y decirle \'mira, agua\', para que así vaya entendiendo que mostrándote la foto le vas a dar lo que necesita sin necesidad de morderse."', en: '"She is desperate because she cannot express a simple need. Taping pictures of water, milk, and snacks on the fridge saved us. Next time, guide her hand gently to point at the picture, reward her with the item instantly, and say the word clearly. She will replace biting with pointing."' },

    'cat3-title': { es: 'Categoría 3: Estrategias Sensoriales y Rutinas Diarias', en: 'Category 3: Sensory Strategies & Daily Routines' },
    'cat3-sub': { es: 'Avances graduales en alimentación, sueño y límites tecnológicos', en: 'Gradual progress in eating, sleep, and technology boundaries' },

    'c4-user': { es: 'Cuidador Anon_7512', en: 'Caregiver Anon_7512' },
    'c4-tag': { es: 'Caso 4: Selectividad alimentaria y avance gradual', en: 'Case 4: Selective eating and gradual progress' },
    'c4-q': { es: '"Hola a todos. Les cuento mi caso por si a alguien le sirve. Mi hijo tiene 8 años y su alimentación es súper limitada. Come pan, fideos, yogurt y manzana. Si intento darle algo nuevo hace arcadas y no hay caso. La nutricionista nos recomendó no forzarlo y trabajar primero la parte sensorial. Empezamos a \'jugar\' con la comida sin presión: tocar fideos crudos, oler verduras, pintar con yogurt. La idea era que se familiarizara. Llevamos un mes así. Ayer por primera vez probó una papa frita solo. No come variado aún, pero al menos ya no hay llanto en la mesa. Para nosotros eso ya es un avance enorme."', en: '"Sharing our win: 8yo son has a very selective diet (bread, pasta, yogurt, apples). New foods caused gagging. Nutritionist advised sensory play without pressure: touching raw pasta, smelling veggies, yogurt painting. After a month, he tried a french fry on his own! No more tears at dinner."' },
    'c4-badge': { es: 'Respuesta Validada por la Comunidad (+165 confirmaciones)', en: 'Community Validated Answer (+165 confirmations)' },
    'c4-a': { es: '"Gracias por compartir esto. Me hizo sentir tan acompañada. Pensé que solo me pasaba a mí y que era mala mamá por ceder. Saber que a otros también les cuesta me alivia un montón no estar sola en esto."', en: '"Thank you for sharing this! It made me feel so validated. I thought I was a bad mom for allowing restricted foods. Knowing others face this brings so much relief."' },

    // --- FOOTER ---
    'footer-org': { es: 'Neu Industries', en: 'Neu Industries' },
    'footer-desc': { es: 'Ficha del Proyecto e Información de la App • Ecosistema NeuroMundo', en: 'Project Data Sheet & App Specs • NeuroMundo Ecosystem' }
};

/**
 * Función principal para alternar entre idiomas (Español e Inglés)
 */
function alternarIdioma() {
    // Alternar la variable global
    idioma = (idioma === 'es') ? 'en' : 'es';

    // Actualizar los elementos en el DOM según el idioma actual
    actualizarTextosDOM();

    // Guardar preferencia en el almacenamiento local del navegador
    localStorage.setItem('neu_idioma_preferido', idioma);
}

/**
 * Recorre el objeto de traducciones y actualiza la interfaz
 */
function actualizarTextosDOM() {
    Object.keys(traducciones).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento && traducciones[id][idioma]) {
            // Si el texto incluye etiquetas HTML (como <strong> o 📊), usamos innerHTML
            elemento.innerHTML = traducciones[id][idioma];
        }
    });

    // Actualizar el atributo lang global de la página
    document.documentElement.lang = idioma;
}

// Inicialización cuando el documento está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Comprobar si hay un idioma guardado previamente
    const idiomaGuardado = localStorage.getItem('neu_idioma_preferido');
    
    if (idiomaGuardado && (idiomaGuardado === 'es' || idiomaGuardado === 'en')) {
        idioma = idiomaGuardado;
    }

    // Aplicar los textos iniciales correspondientes
    actualizarTextosDOM();
});