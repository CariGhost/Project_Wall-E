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