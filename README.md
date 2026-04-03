# 🤖 Wally — Sistema Interactivo de Aprendizaje

<div align="center">

![Wall-E Educativo Banner](https://img.shields.io/badge/Wall--E-Educativo-FFD700?style=for-the-badge&logo=robot&logoColor=black)
![ESP32](https://img.shields.io/badge/ESP32-Access%20Point-E7352C?style=for-the-badge&logo=espressif&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Un sistema educativo físico-digital que integra tecnología al aula usando a Wall-E como protagonista.**

</div>

---

## 📖 ¿Qué es Wally?

Wally Educativo es un sistema híbrido de **hardware y software** diseñado para acercar la tecnología al espacio educativo infantil de una forma lúdica y memorable.

El sistema consiste en una **réplica física impresa en 3D de Wall-E** (el icónico personaje de la película) equipada con sensores y módulos electrónicos. Los niños interactúan con Wall-E acercando **tarjetas NFC** con diferentes diseños para responder preguntas que se presentan en un **portal web** alojado directamente en el dispositivo.

---

## ✨ ¿Cómo funciona?

```
[ Portal Web ]  ←→  [ ESP32 (Access Point) ]  ←→  [ Wall-E Físico ]
   Pregunta              WiFi / WebSocket              Lector NFC
   en pantalla                                         Tarjetas NFC
                                                       Parlante
                                                       Sensores
```

1. El niño se conecta al WiFi generado por el ESP32.
2. Accede al **portal web** desde su dispositivo.
3. El portal muestra una pregunta de la experiencia activa.
4. El niño acerca la **tarjeta NFC** con la respuesta correcta al lector.
5. Wall-E reacciona con **sonidos** a través del parlante integrado.

---

## 🎮 Experiencias / Juegos disponibles

| # | Nombre | Descripción |
|---|--------|-------------|
| 1 | 🔤 **Identificación de Vocales** | Reconocer y seleccionar vocales mediante tarjetas NFC |
| 2 | 🔢 **Operaciones Básicas** | Suma, resta y operaciones numéricas simples |
| 3 | 🍎 **Preguntas de Frutas** | Identificar frutas con imágenes y tarjetas |
| 4 | 🕹️ **Rato Libre** | Controlar y manejar a Wall-E libremente desde el portal |
| 5 | 🎨 **Suma de Colores** | Mezcla y combinación de colores primarios |
| 6 | 🔷 **Identificación de Figuras** | Reconocer figuras geométricas básicas |

---

## 🛠️ Hardware

- **Microcontrolador:** ESP32 (actúa como Access Point y servidor web)
- **Estructura:** Modelo de Wall-E impreso en 3D
- **Módulo NFC:** Lector de tarjetas NFC con diferentes diseños por respuesta
- **Audio:** Parlante integrado para retroalimentación sonora
- **Tarjetas NFC:** Diseñadas temáticamente según cada experiencia

---

## 💻 Software

### Tecnologías utilizadas

| Capa | Tecnología | Función |
|------|-----------|---------|
| Firmware | **C++** (Arduino/ESP32) | Control del hardware, servidor web, lector NFC |
| Frontend | **HTML + CSS + JS** | Portal web de experiencias educativas |
| Comunicación | **WiFi (Access Point)** | Conexión directa ESP32 ↔ dispositivo del niño |

### Arquitectura

```
main/
  └── main.ino          # Código principal C++ (AP + NFC + audio)
  └── data/
    ├── index.html          
    ├── style.css
    ├── app.js           
    └── img/
         └──{img}.webp
```

---

## 🚀 Puesta en marcha

### Requisitos

- Placa **ESP32**
- **Arduino IDE** (con soporte para ESP32)
- Librerías: `WiFi.h`, `WebServer.h`, librería NFC compatible con tu módulo
- Impresora 3D (para la estructura de Wall-E)
- Tarjetas NFC en blanco + diseños impresos

### Pasos

1. **Carga el firmware** en la ESP32 desde la carpeta `esp32/firmware/`.
2. **Sube los archivos web** a la memoria SPIFFS/LittleFS de la ESP32.
3. **Conecta los módulos** (NFC, parlante) según el esquema de pines del firmware.
4. **Enciende la ESP32** — generará automáticamente una red WiFi.
5. Conecta tu dispositivo a esa red y abre el navegador en `192.168.4.1`.
6. ¡Listo para aprender con Wall-E! 🤖

---

## 🎯 Público objetivo

Niños en etapa de educación inicial y primaria (3–8 años), integrando el aprendizaje de conceptos básicos con tecnología tangible e interactiva.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres agregar nuevas experiencias, mejorar el diseño del portal o ajustar el hardware, abre un **issue** o un **pull request**.

---

<div align="center">

Hecho con ❤️ para llevar tecnología al aula

*"Wally, encuentra el tesoro en el aula" 🌱*

</div>
