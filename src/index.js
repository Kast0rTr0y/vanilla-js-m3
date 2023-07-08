import "./styles.css";
import "vanilla-colorful";
import "@material/web/focus/focus-ring.js";
import '@material/web/ripple/ripple.js';
import '@material/web/labs/badge/badge.js';
import '@material/web/labs/navigationtab/navigation-tab.js';
import '@material/web/labs/navigationdrawer/navigation-drawer.js';
import '@material/web/labs/navigationdrawer/navigation-drawer-modal.js';
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
import "@material/web/button/text-button.js";
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
import './simple.js';

import "./header.js";

document.addEventListener("DOMContentLoaded",()=> {
    Array.from(document.getElementsByClassName("md3-navigation-tab")).forEach(element=>element.addEventListener("click", (event) => {
        element.classList.add("md3-navigation-tab--active");
        Array.from(document.getElementsByClassName("md3-navigation-tab")).forEach(el=>element!=el && el.classList.remove("md3-navigation-tab--active"));
    }))
})