import dayjs from "https://esm.sh/dayjs";
import utc from "https://esm.sh/dayjs/plugin/utc";
import timezone from "https://esm.sh/dayjs/plugin/timezone";
import MicroModal from "https://esm.sh/micromodal";

MicroModal.init();

// Extender los plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const timeZoneEl = document.querySelector(".timezone");
const currentTimeEl = document.querySelector(".current-time");
const dayEl = document.querySelector(".current-date");
const buttonEditTimezone = document.querySelector(".edit-timezone");
const buttonDetectLocation = document.querySelector(".detect-location");
const applyTimezone = document.querySelector(".applyTimezone");
const timezoneSelect = document.getElementById("timezone-select");

let userZone = dayjs.tz.guess();

// Función para limpiar el nombre (Ej: "America/New_York" -> "America / New York")
const formatZoneName = (zone) => {
  return zone.replace(/_/g, " ").replace(/\//g, " / ");
};

function updateClock() {
  const now = dayjs().tz(userZone);
  currentTimeEl.textContent = now.format("HH:mm:ss");
  dayEl.textContent = now.format("dddd, D MMMM, YYYY");
  timeZoneEl.textContent = formatZoneName(userZone);
}

buttonEditTimezone.addEventListener("click", () => {
  MicroModal.show("modal-1");
});

buttonDetectLocation.addEventListener("click", () => {
  userZone = dayjs.tz.guess(); // Detectar zona del sistema
  timezoneSelect.value = ""; // Resetear el select del modal
  updateClock(); // Actualizar reloj
});

applyTimezone.addEventListener("click", () => {
  const selected = timezoneSelect.value;
  if (!selected) return;
  userZone = selected;
  timeZoneEl.textContent = userZone;
  updateClock();

  MicroModal.close("modal-1");
});

timeZoneEl.textContent = userZone;

setInterval(updateClock, 1000);
updateClock();

// === LÓGICA DARK/LIGHT MODE ===
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// 1. Cargar preferencia guardada
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}

// 2. Evento Click
themeToggleBtn.addEventListener("click", () => {
  // Comprobamos si actualmente es oscuro (ya sea por sistema o por clase)
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const hasDarkClass = body.classList.contains("dark");
  const hasLightClass = body.classList.contains("light");

  let isDark = false;

  if (hasDarkClass) {
    isDark = true;
  } else if (hasLightClass) {
    isDark = false;
  } else {
    isDark = isSystemDark;
  }

  // Cambiar estado
  if (isDark) {
    // Cambiar a claro
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    // Cambiar a oscuro
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
