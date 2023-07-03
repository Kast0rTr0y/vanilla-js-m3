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

import "./header.js";

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    const color = window.localStorage.getItem("color") || "#008dd7";
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
