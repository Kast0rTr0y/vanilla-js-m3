import {html, css, unsafeCSS, LitElement} from 'lit';
import { changeTheme } from '../theme/theme';

export class Picker extends LitElement {
    static styles = css`
      .popup{
        position: fixed;
        top:10px;
        right: 5px;
        flex-direction: column;
        z-index: 110;
        padding: 0px;
        background-color: var(--md-sys-color-background);
        border-radius: 10px;
        box-shadow: 0 0 5px 1px var(--md-sys-color-shadow);
      }
      .popup_header {
        display: flex;
        flex-direction: row-reverse;
        padding-top: 5px;
      }
      .popup_header > button {
        background: none;
        border: none;
        outline: none;
      }
      #popup_show {
        border: 2px solid var(--md-sys-color-outline);
        outline: none;
        border-radius: 50px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        background-color: var(--button-color);
      }
      hex-color-picker {
        margin: 18px;
      }
    `;

    static properties = {
        name: {type: String},
        color: {type: String}
    };

    constructor() {
        super();
    }

    firstUpdated(changed) {
        this.color = window.localStorage.getItem(`${this.name}Color`) || this.color
    }

    render() {
        return html`<style>
            :host {
                --button-color: ${this.color}
            }
            </style>
            <div id="popup" class="popup" style="display:none;">
            <div class="popup_header"><button @click="${this.hide}"><md-icon>close</md-icon></button></div>
            <hex-color-picker color=${this.color}></hex-color-picker>
        </div>
        <button id="popup_show" @click="${this.show}"></button>`;
    }
    show() {
        this.renderRoot.querySelector("#popup_show").setAttribute("style", `display:none;`);
        this.renderRoot.querySelector("#popup").setAttribute("style", `display:flex;`);
        this.renderRoot.querySelector("hex-color-picker")
            .addEventListener("color-changed", (event) => {
                window.localStorage.setItem(`${this.name}Color`, event.detail.value);
                this.color = event.detail.value;
                changeTheme();
            });
    }
    hide() {
        this.renderRoot.querySelector("#popup").setAttribute("style", `display:none`);
        this.renderRoot.querySelector("#popup_show").setAttribute("style", `display:inline;`);
    }
}
customElements.define('md-color-picker', Picker);