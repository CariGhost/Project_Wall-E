#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>              // ← nuevo

const char* AP_SSID     = "Wall-E";
const char* AP_PASSWORD = "walle1234";

AsyncWebServer server(80);

void setup() {
  Serial.begin(115200);

  // ── Iniciar SPIFFS ──────────────────────────────────────────
  if (!SPIFFS.begin(true)) {
    Serial.println("ERROR: SPIFFS no pudo montarse");
    return;
  }
  Serial.println("SPIFFS montado OK");

  // ── Access Point ────────────────────────────────────────────
  WiFi.mode(WIFI_AP);
  WiFi.softAP(AP_SSID, AP_PASSWORD);
  Serial.print("IP: ");
  Serial.println(WiFi.softAPIP());  // → 192.168.4.1

  // ── Servir archivos desde SPIFFS automáticamente ────────────
  // Sirve cualquier archivo que esté en /data
  // ej: /img/walle1.webp → busca ese archivo en SPIFFS
  server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

  // Redirigir rutas no encontradas al inicio
  server.onNotFound([](AsyncWebServerRequest* req) {
    req->redirect("http://192.168.4.1/");
  });

  server.begin();
  Serial.println("Servidor listo → http://192.168.4.1");
}

void loop() {
  // Aquí irá la lógica de sensores y motores más adelante
}