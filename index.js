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
const applyTimezone = document.querySelector(".applyTimezone");
const timezoneSelect = document.getElementById("timezone-select");

let userZone = dayjs.tz.guess();

function updateClock() {
  const now = dayjs().tz(userZone);
  currentTimeEl.textContent = now.format("HH:mm:ss");
  dayEl.textContent = now.format("dddd, D MMMM, YYYY");
}

buttonEditTimezone.addEventListener("click", () => {
  MicroModal.show("modal-1");
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
