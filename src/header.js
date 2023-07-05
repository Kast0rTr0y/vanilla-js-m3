import {
    themeFromSourceColor,
    argbFromHex,
    applyTheme,
    CorePalette,
    Scheme
} from "@material/material-color-utilities";

const color = window.localStorage.getItem("color") || "#6750A4"
const secondaryColor = window.localStorage.getItem("secondaryColor") || "#958DA5"
const tertiaryColor = window.localStorage.getItem("tertiaryColor") || "#B58392"
const errorColor = window.localStorage.getItem("errorColor") || "#E46962"
const neutralColor = window.localStorage.getItem("neutralColor") || "#938F96"
const neutralVariantColor = window.localStorage.getItem("neutralVariantColor") || "#938F99"

const changeTheme = () => {
    // const theme = themeFromSourceColor(argbFromHex(window.localStorage.getItem('color') || "#6750A4"));
    const theme = getTheme();
    applyTheme(theme, {
        target: document.querySelector(":root"),
        dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
        paletteTones: [0,10,20,30,40,50,60,70,80,90,95,99,100],
        brightnessSuffix: true
    });
}
const getTheme = () => {
    const primaryColor = window.localStorage.getItem('color') || '#6750A4';
    const secondaryColor = window.localStorage.getItem('secondaryColor') || '#958DA5';
    const tertiaryColor = window.localStorage.getItem('tertiaryColor') || '#B58392';
    const errorColor = window.localStorage.getItem('errorColor') || '#E46962';
    const neutralColor = window.localStorage.getItem('neutralColor') || '#938F96';
    const neutralVariantColor = window.localStorage.getItem('neutralVariantColor') || '#938F99';
    const palette = CorePalette.fromColors({
        primary:argbFromHex(primaryColor),
        secondary:argbFromHex(secondaryColor),
        tertiary:argbFromHex(tertiaryColor),
        error:argbFromHex(errorColor),
        neutral:argbFromHex(neutralColor),
        neutralVariant:argbFromHex(neutralVariantColor)
    });
    return {
        source:argbFromHex(primaryColor),
        schemes: {
            light: Scheme.lightFromCorePalette(palette),
            dark: Scheme.darkFromCorePalette(palette),
        },
        palettes: {
            primary: palette.a1,
            secondary: palette.a2,
            tertiary: palette.a3,
            neutral: palette.n1,
            neutralVariant: palette.n2,
            error: palette.error,
        },
        customColors: []
    };
}

changeTheme();

document.getElementById("app").innerHTML = `
    <div id="popup6" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide6" >x</button></div>
      <hex-color-picker id="color-picker6" color=${neutralVariantColor}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show6" style="background-color: ${neutralVariantColor}"></button>
    <div id="popup5" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide5" >x</button></div>
      <hex-color-picker id="color-picker5" color=${neutralColor}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show5" style="background-color: ${neutralColor}"></button>
    <div id="popup4" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide4" >x</button></div>
      <hex-color-picker id="color-picker4" color=${errorColor}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show4" style="background-color: ${errorColor}"></button>
    <div id="popup3" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide3" >x</button></div>
      <hex-color-picker id="color-picker3" color=${tertiaryColor}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show3" style="background-color: ${tertiaryColor}"></button>
    <div id="popup2" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide2" >x</button></div>
      <hex-color-picker id="color-picker2" color=${secondaryColor}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show2" style="background-color: ${secondaryColor}"></button>
    <div id="popup1" class="popup" style="display:none;">
      <div class="popup_header"><button id="popup_hide1" >x</button></div>
      <hex-color-picker id="color-picker1" color=${color}></hex-color-picker>
    </div>
    <button class="popup_show" id="popup_show1" style="background-color: ${color}"></button>
`;

const popup1 = document.getElementById("popup1");
const popup_show1 = document.getElementById("popup_show1");
const popup_show_evt1 = (e) => {
  popup1.setAttribute("style", `display:flex`);
  popup_show1.setAttribute("style", `display:none`);
};
popup_show1.addEventListener("click", popup_show_evt1);

const popup_hide1 = document.getElementById("popup_hide1");
const popup_hide_event1 = (e) => {
  const color = window.localStorage.getItem("color") || "#6750A4"
  popup1.setAttribute("style", `display:none`);
  popup_show1.setAttribute("style", `display:inline;background-color:${color}`);
};
popup_hide1.addEventListener("click", popup_hide_event1);

document
  .getElementById("color-picker1")
  .addEventListener("color-changed", (event) => {
    window.localStorage.setItem("color", event.detail.value);
    changeTheme()
  });
//
const popup2 = document.getElementById("popup2");
const popup_show2 = document.getElementById("popup_show2");
const popup_show_evt2 = (e) => {
    popup2.setAttribute("style", `display:flex`);
    popup_show2.setAttribute("style", `display:none`);
};
popup_show2.addEventListener("click", popup_show_evt2);

const popup_hide2 = document.getElementById("popup_hide2");
const popup_hide_event2 = (e) => {
    const secondaryColor = window.localStorage.getItem("secondaryColor") || "#958DA5"
    popup2.setAttribute("style", `display:none;`);
    popup_show2.setAttribute("style", `display:inline;;background-color:${secondaryColor}`);
};
popup_hide2.addEventListener("click", popup_hide_event2);

document
    .getElementById("color-picker2")
    .addEventListener("color-changed", (event) => {
        window.localStorage.setItem("secondaryColor", event.detail.value);
        changeTheme();
    });
//
const popup3 = document.getElementById("popup3");
const popup_show3 = document.getElementById("popup_show3");
const popup_show_evt3 = (e) => {
    popup3.setAttribute("style", "display:flex");
    popup_show3.setAttribute("style", `display:none;`);
};
popup_show3.addEventListener("click", popup_show_evt3);

const popup_hide3 = document.getElementById("popup_hide3");
const popup_hide_event3 = (e) => {
    const tertiaryColor = window.localStorage.getItem("tertiaryColor") || "#B58392"
    popup3.setAttribute("style", "display:none");
    popup_show3.setAttribute("style", `display:inline;;background-color:${tertiaryColor}`);
};
popup_hide3.addEventListener("click", popup_hide_event3);

document
    .getElementById("color-picker3")
    .addEventListener("color-changed", (event) => {
        window.localStorage.setItem("tertiaryColor", event.detail.value);
        changeTheme();
    });
//
const popup4 = document.getElementById("popup4");
const popup_show4 = document.getElementById("popup_show4");
const popup_show_evt4 = (e) => {
    popup4.setAttribute("style", "display:flex");
    popup_show4.setAttribute("style", `display:none;`);
};
popup_show4.addEventListener("click", popup_show_evt4);

const popup_hide4 = document.getElementById("popup_hide4");
const popup_hide_event4 = (e) => {
    const errorColor = window.localStorage.getItem("errorColor") || "#E46962"
    popup4.setAttribute("style", "display:none");
    popup_show4.setAttribute("style", `display:inline;background-color:${errorColor}`);
};
popup_hide4.addEventListener("click", popup_hide_event4);

document
    .getElementById("color-picker4")
    .addEventListener("color-changed", (event) => {
        window.localStorage.setItem("errorColor", event.detail.value);
        changeTheme();
    });
//
const popup5 = document.getElementById("popup5");
const popup_show5 = document.getElementById("popup_show5");
const popup_show_evt5 = (e) => {
    popup5.setAttribute("style", "display:flex");
    popup_show5.setAttribute("style", `display:none;`);
};
popup_show5.addEventListener("click", popup_show_evt5);

const popup_hide5 = document.getElementById("popup_hide5");
const popup_hide_event5 = (e) => {
    const neutralColor = window.localStorage.getItem("neutralColor") || "#938F96"
    popup5.setAttribute("style", "display:none");
    popup_show5.setAttribute("style", `display:inline;background-color:${neutralColor}`);
};
popup_hide5.addEventListener("click", popup_hide_event5);

document
    .getElementById("color-picker5")
    .addEventListener("color-changed", (event) => {
        window.localStorage.setItem("neutralColor", event.detail.value);
        changeTheme();
    });
//
const popup6 = document.getElementById("popup6");
const popup_show6 = document.getElementById("popup_show6");
const popup_show_evt6 = (e) => {
    popup6.setAttribute("style", "display:flex");
    popup_show6.setAttribute("style", `display:none;`);
};
popup_show6.addEventListener("click", popup_show_evt6);

const popup_hide6 = document.getElementById("popup_hide6");
const popup_hide_event6 = (e) => {
    const neutralVariantColor = window.localStorage.getItem("neutralVariantColor") || "#938F99"
    popup6.setAttribute("style", "display:none");
    popup_show6.setAttribute("style", `display:inline;background-color:${neutralVariantColor}`);
};
popup_hide6.addEventListener("click", popup_hide_event6);

document
    .getElementById("color-picker6")
    .addEventListener("color-changed", (event) => {
        window.localStorage.setItem("neutralVariantColor", event.detail.value);
        changeTheme();
    });

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
        if (matches) {
            changeTheme();
        } else {
            changeTheme();
        }
    });