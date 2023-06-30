import "./styles.css";
import "vanilla-colorful";
import "@material/web/switch/switch.js";
import "@material/web/icon/icon.js";
import "@material/web/chips/assist-chip.js";
import "@material/web/chips/suggestion-chip.js";
import "@material/web/chips/filter-chip.js";
import "@material/web/chips/input-chip.js";
import "@material/web/button/elevated-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/button/tonal-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/fab/fab.js";
import "@material/web/iconbutton/filled-icon-button.js";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import "@material/web/iconbutton/outlined-icon-button.js";
import "@material/web/iconbutton/standard-icon-button.js";
import "@material/web/list/list.js";
import "@material/web/list/list-item.js";
import "@material/web/radio/radio.js";

import {
  themeFromSourceColor,
  argbFromHex,
  applyTheme
} from "@material/material-color-utilities";

let color = "#008dd7";
const theme = themeFromSourceColor(argbFromHex(color));
applyTheme(theme, {
  target: document.querySelector(":root"),
  dark: window.matchMedia("(prefers-color-scheme: dark)").matches
});
document.getElementById("app").innerHTML = `
  <div id="popup" class="popup" style="display:none;">
    <div class="popup_header"><button id="popup_hide" >x</button></div>
    <hex-color-picker color=${color}></hex-color-picker>
  </div>
  <button id="popup_show">Show</button>
`;

const popup = document.getElementById("popup");
const popup_show = document.getElementById("popup_show");
const popup_show_evt = (e) => {
  popup.setAttribute("style", "display:flex");
  popup_show.setAttribute("style", `display:none;`);
};
popup_show.addEventListener("click", popup_show_evt);

const popup_hide = document.getElementById("popup_hide");
const popup_hide_event = (e) => {
  popup.setAttribute("style", "display:none");
  popup_show.setAttribute("style", `display:inline;`);
};
popup_hide.addEventListener("click", popup_hide_event);

document
  .querySelector("hex-color-picker")
  .addEventListener("color-changed", (event) => {
    color = event.detail.value;
    const theme = themeFromSourceColor(argbFromHex(color));
    applyTheme(theme, {
      target: document.querySelector(":root"),
      dark: window.matchMedia("(prefers-color-scheme: dark)").matches
    });
  });

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    if (matches) {
      applyTheme(themeFromSourceColor(argbFromHex(color)), {
        target: document.querySelector(":root"),
        dark: true
      });
    } else {
      applyTheme(themeFromSourceColor(argbFromHex(color)), {
        target: document.querySelector(":root"),
        dark: false
      });
    }
  });
