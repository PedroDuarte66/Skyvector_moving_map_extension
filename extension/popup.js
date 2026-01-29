document.getElementById("saveBtn").addEventListener("click", () => {
  const port = document.getElementById("portNumber").value;
  chrome.storage.sync.set({ portNumber: port }, () => {
    alert("Puerto guardado: " + port);
  });
});

document.getElementById("toggleBtn").addEventListener("click", () => {
  chrome.storage.sync.get({ trackingEnabled: false }, (data) => {
    const newState = !data.trackingEnabled;

    // 1. Guardamos el nuevo estado
    chrome.storage.sync.set({ trackingEnabled: newState }, () => {
      // 2. ACTUALIZACIÓN INSTANTÁNEA:
      // Cambiamos el texto del botón
      document.getElementById("toggleBtn").textContent = newState
        ? "Desactivar Tracking"
        : "Activar Tracking";

      // 3. Llamamos a la función para que cambie el color del cuadro de estado
      updateStatus(newState);
    });
  });
});

// Esto se ejecuta al abrir el popup para cargar el estado guardado
chrome.storage.sync.get(["trackingEnabled", "portNumber"], (data) => {
  const isEnabled = data.trackingEnabled || false;

  document.getElementById("toggleBtn").textContent = isEnabled
    ? "Desactivar Tracking"
    : "Activar Tracking";

  document.getElementById("portNumber").value = data.portNumber || "8001";

  // Actualizar el cuadro de estado al abrir
  updateStatus(isEnabled);
});

// Esta es la función que cambia los colores y el texto del cuadro inferior
function updateStatus(enabled) {
  const status = document.getElementById("status");
  if (enabled) {
    status.className = "connected"; // Pone el fondo verde
    status.textContent = "✅ Tracking Activo";
  } else {
    status.className = "disconnected"; // Pone el fondo rojo
    status.textContent = "❌ Tracking Inactivo";
  }
}

// se avia añadido un botor para activar y desactivar el servidor pero no hace falta
// ya que el servidor se inicia desde su propi archivo y se detiene desde la bandeja del systema.
// document.getElementById("exitBtn").addEventListener("click", () => {
//   if (
//     confirm("¿Estás seguro de que quieres cerrar el servidor por completo?")
//   ) {
//     fetch("http://localhost:8001/exit")
//       .then(() => {
//         alert("Servidor cerrado.");
//         window.close(); // Cierra el popup
//       })
//       .catch((err) => alert("El servidor ya estaba cerrado o no responde."));
//   }
// });
