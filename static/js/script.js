function alternarIdioma() {
    // 1. Alternar la variable global del idioma
    idiomaActual = (idiomaActual === "es") ? "en" : "es";

    // 2. Cambiar el texto del botón (Muestra 'EN' si está en español, 'ES' si está en inglés)
    const btnIdioma = document.getElementById("btn-idioma");

    // --- VISTA 1: INDEX ---
    if (document.getElementById("titulo-principal")) {
        const t = traducciones.paginaIndex[idiomaActual];
        if (btnIdioma) btnIdioma.textContent = t.btn;
        
        document.getElementById("titulo-principal").textContent = t.welcomeTitle;
        if (document.getElementById("desc-intro")) {
            document.getElementById("desc-intro").textContent = t.welcomeSubtitle;
        }
    }

    // --- VISTA 2: PROBLEMÁTICA ---
    if (document.getElementById("titulo-solucion")) {
        const t = traducciones.paginaProblematica[idiomaActual];
        if (btnIdioma) btnIdioma.textContent = t.btn;

        document.getElementById("titulo-solucion").textContent = t.titulo;
        if (document.getElementById("desc-intro")) document.getElementById("desc-intro").textContent = t.intro;
        if (document.getElementById("sub-realidad")) document.getElementById("sub-realidad").textContent = t.subRealidad;
        if (document.getElementById("lista-realidad")) document.getElementById("lista-realidad").innerHTML = t.listaRealidad;
        if (document.getElementById("sub-costo")) document.getElementById("sub-costo").textContent = t.subCosto;
        if (document.getElementById("lista-costo")) document.getElementById("lista-costo").innerHTML = t.listaCosto;
        if (document.getElementById("titulo-ods")) document.getElementById("titulo-ods").textContent = t.tituloOds;
        if (document.getElementById("lista-ods")) document.getElementById("lista-ods").innerHTML = t.listaOds;
    }

    // --- VISTA 3: FORO ---
    if (document.getElementById("titulo-comunidad")) {
        const t = traducciones.paginaForo[idiomaActual];
        if (btnIdioma) btnIdioma.textContent = t.btn;

        document.getElementById("titulo-comunidad").textContent = t.titulo;
        if (document.getElementById("lbl-cuidador1")) document.getElementById("lbl-cuidador1").textContent = t.lblCuidador;
        if (document.getElementById("lbl-respuesta1")) document.getElementById("lbl-respuesta1").textContent = t.lblRespuesta;
        if (document.getElementById("msg-cuidador1")) document.getElementById("msg-cuidador1").textContent = t.msgCuidador1;
        if (document.getElementById("msg-respuesta1")) document.getElementById("msg-respuesta1").textContent = t.msgRespuesta1;
        if (document.getElementById("lbl-cuidador2")) document.getElementById("lbl-cuidador2").textContent = t.lblCuidador;
        if (document.getElementById("lbl-respuesta2")) document.getElementById("lbl-respuesta2").textContent = t.lblRespuesta;
        if (document.getElementById("msg-cuidador2")) document.getElementById("msg-cuidador2").textContent = t.msgCuidador2;
        if (document.getElementById("msg-respuesta2")) document.getElementById("msg-respuesta2").textContent = t.msgRespuesta2;
    }

    // --- VISTA 4: PROYECTO ---
    if (document.getElementById("txt-anuncio")) {
        const t = traducciones.paginaProyecto[idiomaActual];
        if (btnIdioma) btnIdioma.textContent = t.btn;

        document.getElementById("txt-anuncio").textContent = t.anuncio;
        if (document.getElementById("search-input")) document.getElementById("search-input").placeholder = t.placeholderBusqueda;
        if (document.getElementById("nav-inicio")) document.getElementById("nav-inicio").textContent = t.navInicio;
        if (document.getElementById("nav-foro")) document.getElementById("nav-foro").textContent = t.navForo;
        if (document.getElementById("nav-soporte")) document.getElementById("nav-soporte").textContent = t.navSoporte;
        if (document.getElementById("nav-registro")) document.getElementById("nav-registro").textContent = t.navRegistro;
        if (document.getElementById("banner-titulo")) document.getElementById("banner-titulo").textContent = t.bannerTitulo;
        if (document.getElementById("banner-sub1")) document.getElementById("banner-sub1").textContent = t.bannerSub1;
        if (document.getElementById("banner-sub2")) document.getElementById("banner-sub2").textContent = t.bannerSub2;
        if (document.getElementById("btn-comprar")) document.getElementById("btn-comprar").textContent = t.btnComprar;

        for (let i = 1; i <= 6; i++) {
            const el = document.getElementById(`lbl-resenas-${i}`);
            if (el) el.textContent = t.resenas;
        }

        if (document.getElementById("ft-comunidad")) document.getElementById("ft-comunidad").textContent = t.ftComunidad;
        if (document.getElementById("ft-contacto")) document.getElementById("ft-contacto").textContent = t.ftContacto;
        if (document.getElementById("ft-horario-semana")) document.getElementById("ft-horario-semana").textContent = t.ftHorarioSemana;
        if (document.getElementById("ft-horario-finde")) document.getElementById("ft-horario-finde").textContent = t.ftHorarioFinde;
        if (document.getElementById("ft-titulo-links")) document.getElementById("ft-titulo-links").textContent = t.ftTituloLinks;
        if (document.getElementById("ft-link-comunidad")) document.getElementById("ft-link-comunidad").textContent = t.ftLinkComunidad;
        if (document.getElementById("ft-titulo-sub")) document.getElementById("ft-titulo-sub").textContent = t.ftTituloSub;
        if (document.getElementById("ft-sub-desc")) document.getElementById("ft-sub-desc").textContent = t.ftSubDesc;
        if (document.getElementById("ft-lbl-correo")) document.getElementById("ft-lbl-correo").textContent = t.ftLblCorreo;
    }

    // --- VISTA 5: METODOLOGÍA ---
    if (document.getElementById("p1-hero-titulo")) {
        const t = traducciones.paginaMetodologia[idiomaActual];
        if (btnIdioma) btnIdioma.textContent = t.btn;

        if (document.getElementById("nav-p1")) document.getElementById("nav-p1").textContent = t.navPag1;
        if (document.getElementById("nav-p2")) document.getElementById("nav-p2").textContent = t.navPag2;
        if (document.getElementById("nav-p3")) document.getElementById("nav-p3").textContent = t.navPag3;
        if (document.getElementById("nav-p4")) document.getElementById("nav-p4").textContent = t.navPag4;

        document.getElementById("p1-hero-titulo").textContent = t.p1HeroTitulo;
        if (document.getElementById("p1-hero-desc")) document.getElementById("p1-hero-desc").textContent = t.p1HeroDesc;
        if (document.getElementById("p1-card1-titulo")) document.getElementById("p1-card1-titulo").textContent = t.p1Card1Titulo;
        if (document.getElementById("p1-card1-desc")) document.getElementById("p1-card1-desc").textContent = t.p1Card1Desc;
        if (document.getElementById("p1-card2-titulo")) document.getElementById("p1-card2-titulo").textContent = t.p1Card2Titulo;
        if (document.getElementById("p1-card2-desc")) document.getElementById("p1-card2-desc").textContent = t.p1Card2Desc;
        if (document.getElementById("p1-card3-titulo")) document.getElementById("p1-card3-titulo").textContent = t.p1Card3Titulo;
        if (document.getElementById("p1-card3-desc")) document.getElementById("p1-card3-desc").textContent = t.p1Card3Desc;

        if (document.getElementById("p2-titulo")) document.getElementById("p2-titulo").textContent = t.p2Titulo;
        if (document.getElementById("p2-desc")) document.getElementById("p2-desc").textContent = t.p2Desc;
        if (document.getElementById("p2-search-input")) document.getElementById("p2-search-input").placeholder = t.p2SearchInput;
        if (document.getElementById("p2-copiloto-txt")) document.getElementById("p2-copiloto-txt").textContent = t.p2CopilotoTxt;

        if (document.getElementById("p3-titulo")) document.getElementById("p3-titulo").textContent = t.p3Titulo;
        if (document.getElementById("p3-desc")) document.getElementById("p3-desc").textContent = t.p3Desc;
        if (document.getElementById("p3-sub1")) document.getElementById("p3-sub1").textContent = t.p3Sub1;
        if (document.getElementById("p3-desc1")) document.getElementById("p3-desc1").textContent = t.p3Desc1;
        if (document.getElementById("btn-demo-vr")) document.getElementById("btn-demo-vr").textContent = t.btnDemoVr;
        if (document.getElementById("p3-sub2")) document.getElementById("p3-sub2").textContent = t.p3Sub2;
        if (document.getElementById("p3-desc2")) document.getElementById("p3-desc2").textContent = t.p3Desc2;
        if (document.getElementById("btn-descarga")) document.getElementById("btn-descarga").textContent = t.btnDescarga;

        if (document.getElementById("p4-titulo")) document.getElementById("p4-titulo").textContent = t.p4Titulo;
        if (document.getElementById("p4-desc")) document.getElementById("p4-desc").textContent = t.p4Desc;
        if (document.getElementById("ods3-desc")) document.getElementById("ods3-desc").textContent = t.ods3Desc;
        if (document.getElementById("ods4-desc")) document.getElementById("ods4-desc").textContent = t.ods4Desc;
        if (document.getElementById("ods10-desc")) document.getElementById("ods10-desc").textContent = t.ods10Desc;
        if (document.getElementById("ods8-desc")) document.getElementById("ods8-desc").textContent = t.ods8Desc;
    }
}
