var scriptTag = document.querySelector("script[data-icon-url]");
var airplaneImageUrl = scriptTag ? scriptTag.getAttribute("data-icon-url") : "";
var planeSize = 60;

function setMapIcon(latlon, heading) {
  if (typeof SkyVector === "undefined" || !latlon) return;

  var lat = (latlon[0] * 180) / Math.PI;
  var lon = (latlon[1] * 180) / Math.PI;

  // --- CONVERSIÓN DE HEADING (Radianes a Grados) ---
  var headingGrados = (heading * 180) / Math.PI;
  console.log("Rumbo en grados:", headingGrados);

  var img = document.getElementById("movingAirplane");
  if (!img) {
    img = document.createElement("img");
    img.id = "movingAirplane";
    img.src = airplaneImageUrl;
    img.style.height = planeSize + "px";
    img.style.width = planeSize + "px";
    img.style.zIndex = "1000";
    img.style.position = "absolute";
    var el = document.getElementById("sv_svgLayer");
    if (el) el.parentNode.insertBefore(img, el.nextSibling);
  }

  var point = SkyVector.ll2xy(lat, lon);
  if (point && img) {
    img.style.top =
      Math.round(point.y - SkyVector.data.slideroffsety - planeSize / 2) + "px";
    img.style.left =
      Math.round(point.x - SkyVector.data.slideroffsetx - planeSize / 2) + "px";
    img.style.visibility = "visible";

    // USAMOS LA VARIABLE CONVERTIDA
    if (typeof headingGrados === "number") {
      img.style.transform = "rotate(" + headingGrados + "deg)";
    }
  }
}

// RECEPTOR DE MENSAJES
window.addEventListener("message", function (event) {
  if (event.source !== window) return;
  if (event.data.type === "FROM_CONTENT") {
    // Asegúrate de que moving-map-content.js envíe 'coords' y 'heading'
    setMapIcon(event.data.coords, event.data.heading);
  }
});
