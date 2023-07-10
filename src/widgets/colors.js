import {html, css, LitElement} from 'lit';

export class Colors extends LitElement {
    static styles = css`
      :host>div{
        position: absolute;
        right: 0px;
        z-index: 500;
        display: flex;
      }
      .colors{
        display: none;
      } 
      .open{
        display: flex;
        align-items: center;
        outline: none;
        border: 1px solid transparent;
        background: transparent;
        cursor: pointer;
        padding: 0;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
      }
      .container{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        height: 40px;
      }
      .container:hover {
        background-color: var(--md-sys-color-surface-variant);
        box-shadow: 0 0 5px 1px var(--md-sys-color-shadow);
      }
      .container.opened {
        background-color: var(--md-sys-color-surface-variant);
        box-shadow: 0 0 5px 1px var(--md-sys-color-shadow);
      }
    `;

    static properties = {
    };

    constructor() {
        super();
    }

    render() {
        return html`<div class="container">
            <button @click=${this.open} class="open"><md-icon class="opening" style="--md-icon-size:18px">chevron_left</md-icon></button>
            <div id="colors" style="display: none">
                <md-color-picker name="primary" color="#6750A4"></md-color-picker>
                <md-color-picker name="secondary" color="#958DA5"></md-color-picker>
                <md-color-picker name="tertiary" color="#B58392"></md-color-picker>
                <md-color-picker name="error" color="#E46962"></md-color-picker>
                <md-color-picker name="neutral" color="#938F96"></md-color-picker>
                <md-color-picker name="neutralVariant" color="#938F99"></md-color-picker>
            </div>
        </div>`;
    }
    open() {
        if(this.opend) {
            this.opend = false;
            this.renderRoot.querySelector("#colors").setAttribute("style", `display:none;`);
            this.renderRoot.querySelector("md-icon").innerHTML = "chevron_left";
            this.renderRoot.querySelector(".container").classList.remove("opened");
        } else {
            this.opend = true;
            this.renderRoot.querySelector("#colors").setAttribute("style", `display:flex;`);
            this.renderRoot.querySelector("md-icon").innerHTML = "chevron_right";
            this.renderRoot.querySelector(".container").classList.add("opened");
        }
    }
}
customElements.define('m3-colors', Colors);