  //OJO CAMBIAR JUEGO DE FIGURAS USO DE MEMORIA ALTO
  // JUEGO DE OBSTACULOS SE PUEDE INCLUIR EN RATO LIBRE
  //REDUCIR RESOLUCION DE IMAGENES PARA MEJORAR RENDIMIENTO
  //BUSCAR JUEGO  

  let currentGame = null;

  // Base de datos central
  const juegos = {
    vocales: {
      titulo: "Juego de Vocales",
      descripcion: "Aprende y reconoce las vocales.",
      imagen: "img/juegovocales.webp",
      seccion: "vocalGame"
    },
    colores: {
      titulo: "Juego de Colores",
      descripcion: "Identifica y combina colores.",
      imagen: "img/colores.webp",
      seccion: "colorGame"
    },
    juego1: {
      titulo: "Juego 1",
      descripcion: "Experiencia personalizada.",
      imagen: "img/juego1.webp",
      seccion: "vocalGame"
    },
    figuras: {
      titulo: "Juego de Figuras",
      descripcion: "Reconoce diferentes figuras.",
      imagen: "img/JuegoFiguras.webp",
      seccion: "figureGame"
    },
    ratolibre: {
      titulo: "Rato Libre",
      descripcion: "Controla libremente a Wall-e.",
      imagen: "img/ratolibre.webp",
      seccion: "freetimeGame"
    },
    numeros: {
      titulo: "Juego de Números",
      descripcion: "Resuelve operaciones matemáticas.",
      imagen: "img/numeros.webp",
      seccion: "numberGame"
    },
    frutas: {
      titulo: "Juego de Frutas",
      descripcion: "Identifica diferentes frutas.",
      imagen: "img/frutas.webp",
      seccion: "fruitGame"
    }
    
  };

  // Oculta todas las secciones
function ocultarTodo() {
  const secciones = [
    "home",
    "info",
    "vocalGame",
    "colorGame",
    "freetimeGame",
    "numberGame",
    "figureGame",
    "fruitGame"
  ];

  secciones.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = "none";
    }
  });
}

  // Volver al inicio
  function goHome() {
    ocultarTodo();
    document.getElementById("home").style.display = "block";
  }

  // Click en tarjetas
  document.querySelectorAll(".game").forEach(card => {
    card.addEventListener("click", () => {
      const tipo = card.dataset.game;
      mostrarInfo(tipo);
    });
  });

  // Mostrar info del juego
  function mostrarInfo(tipo) {
    currentGame = tipo;

    const juego = juegos[tipo];

    document.getElementById("tituloJuego").innerText = juego.titulo;
    document.getElementById("descJuego").innerText = juego.descripcion;
    document.getElementById("imagenJuego").src = juego.imagen;

    ocultarTodo();
    document.getElementById("info").style.display = "flex";
  }

  // Iniciar juego
  function initExp() {
    ocultarTodo();

    const seccion = juegos[currentGame].seccion;
    document.getElementById(seccion).style.display = "block";
  }

  const vocalPreguntas = [
    { emoji: "🐝", palabra: "abeja",    vocalPos: 0 },
    { emoji: "🦆", palabra: "pato",      vocalPos: 0 },
    { emoji: "🐘", palabra: "elefante", vocalPos: 0 },
    { emoji: "🦋", palabra: "mariposa",      vocalPos: 0 },
    { emoji: "🎈", palabra: "globo",      vocalPos: 0 },
    { emoji: "🍎", palabra: "manzana",  vocalPos: 1 },
    { emoji: "🌙", palabra: "luna",     vocalPos: 1 },
    { emoji: "🐱", palabra: "gato",     vocalPos: 1 },
    { emoji: "🌹", palabra: "rosa",     vocalPos: 1 },
    { emoji: "🐦", palabra: "pajaro",     vocalPos: 1 },
    { emoji: "🍋", palabra: "limon",    vocalPos: 1 },
    { emoji: "🐸", palabra: "rana",     vocalPos: 1 },
    { emoji: "☀️", palabra: "sol",      vocalPos: 0 },
    { emoji: "🏠", palabra: "casa",     vocalPos: 1 },
    { emoji: "🐮", palabra: "vaca",     vocalPos: 1 },
    { emoji: "🍌", palabra: "platano",  vocalPos: 2 },
    { emoji: "🐧", palabra: "pinguino", vocalPos: 1 },
    { emoji: "🐟", palabra: "pez",      vocalPos: 0 },
    { emoji: "🎸", palabra: "guitarra", vocalPos: 2 },
    { emoji: "🐻", palabra: "oso",      vocalPos: 0 },
  ];

  const VOCALES = ["A","E","I","O","U"];
  let vocalCola = [];
  let vocalCorrectas = 0;
  let vocalTotal = 0;
  let vocalRespuesta = "";
  let vocalRespondido = false;

  function vocalMezclar(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function vocalGetVocal(palabra, pos) {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
      if ("aeiou".includes(palabra[i])) indices.push(i);
    }
    const idx = indices[pos] !== undefined ? indices[pos] : indices[0];
    return { idx, letra: palabra[idx].toUpperCase() };
  }

  function vocalBuildPista(palabra, idx) {
    return palabra.split("").map((c, i) => i === idx ? "_" : c.toUpperCase()).join(" ");
  }

  function vocalSiguiente() {
    if (vocalCola.length === 0) vocalCola = vocalMezclar(vocalPreguntas);
    const q = vocalCola.pop();
    const { idx, letra } = vocalGetVocal(q.palabra, q.vocalPos);
    vocalRespuesta = letra;
    vocalRespondido = false;

    document.getElementById("vocalEmoji").textContent = q.emoji;
    document.getElementById("vocalPista").textContent = vocalBuildPista(q.palabra, idx);
    document.getElementById("vocalFeedback").textContent = "";
    document.getElementById("vocalHint").textContent = "¿Qué vocal falta?";

    const btn = document.getElementById("vocalNext");
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";

    const incorrectas = vocalMezclar(VOCALES.filter(v => v !== letra)).slice(0, 2);
    const ops = vocalMezclar([letra, ...incorrectas]);

    const cont = document.getElementById("vocalOpciones");
    cont.innerHTML = "";
    ops.forEach(v => {
      const b = document.createElement("button");
      b.className = "vocal-opcion-btn";
      b.textContent = v;
      b.onclick = () => vocalResponder(v, b);
      cont.appendChild(b);
    });
  }

  function vocalResponder(vocal, btn) {
    if (vocalRespondido) return;
    vocalRespondido = true;
    vocalTotal++;

    if (vocal === vocalRespuesta) {
      btn.classList.add("correcto");
      document.getElementById("vocalFeedback").textContent = "¡Muy bien! 🎉";
      vocalCorrectas++;
    } else {
      btn.classList.add("incorrecto");
      document.getElementById("vocalFeedback").textContent = `Era la "${vocalRespuesta}" 😊`;
      document.querySelectorAll(".vocal-opcion-btn").forEach(b => {
        if (b.textContent === vocalRespuesta) b.classList.add("correcto");
      });
    }

    document.getElementById("vocalScore").textContent = `⭐ ${vocalCorrectas} de ${vocalTotal} correctas`;
    const next = document.getElementById("vocalNext");
    next.style.opacity = "1";
    next.style.pointerEvents = "all";
  }

  // Arrancar vocales al entrar al juego
  const _origInitExp = initExp;
  window.initExp = function() {
    _origInitExp();
    if (juegos[currentGame].seccion === "vocalGame") {
      vocalCola = [];
      vocalCorrectas = 0;
      vocalTotal = 0;
      vocalSiguiente();
    }
  };
