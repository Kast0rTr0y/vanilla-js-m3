import {
    themeFromSourceColor,
    argbFromHex,
    applyTheme
} from "@material/material-color-utilities";

const color = window.localStorage.getItem("color") || "#008dd7"
  
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
    window.localStorage.setItem("color", event.detail.value);
    const theme = themeFromSourceColor(argbFromHex(event.detail.value));
    applyTheme(theme, {
      target: document.querySelector(":root"),
      dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
      paletteTones: [],
      brightnessSuffix: false
    });
  });