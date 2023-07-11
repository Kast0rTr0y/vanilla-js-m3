import {html, css, LitElement} from 'lit';

export class Contact extends LitElement {
    static styles = css`
      :host{
        padding:8px;
        flex: 0 0 200px;
      }
      :host slot {
        display: block;
        font-size: var(--md-sys-typescale-body-large-font-size);
        line-height: var(--md-sys-typescale-body-large-line-height);
        //letter-spacing: var(--md-sys-typescale-body-large-letter-spacing);
        letter-spacing: 0.1px;
      }
      .surface {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 10px;
        height: 176px;
        width: 350px;
        background-color: var(--md-sys-color-background);
        color: var(--md-sys-color-on-primary-container);
        box-sizing: border-box;
      }
      .surface:hover {
        --md-elevation-level: 3;
      }
      .sub {
        padding-top: 16px;
        display: flex;
        align-items: center;
      }
      .sub>md-icon{
        padding: 4px 12px 4px 4px;
        opacity: .6
      }
      .icons {
        display: flex;
        flex-direction: column;
      }
      .body-medium {
        font-size: var(--md-sys-typescale-body-medium-font-size);
        line-height: var(--md-sys-typescale-body-medium-line-height);
        letter-spacing: var(--md-sys-typescale-body-medium-letter-spacing);
      }
      .body-small {
        font-size: var(--md-sys-typescale-body-small-font-size);
        line-height: var(--md-sys-typescale-body-small-line-height);
        letter-spacing: var(--md-sys-typescale-body-small-letter-spacing);
        opacity: .6
      }
    `;
    static properties = {
        icon1:{type:String},
        iconText1:{type:String},
        iconSubText1:{type:String},
        icon2:{type:String},
        iconText2:{type:String},
        iconSubText2:{type:String},
        icon3:{type:String},
        iconText3:{type:String},
        iconSubText3:{type:String}
    };

    constructor() {
        super();
    }

    render() {
        return html`<div class="surface">
            <md-elevation></md-elevation>
            <md-ripple></md-ripple>
            <div class="sub">
                ${this.icon1 ? html`<md-icon>${this.icon1}</md-icon>`:``}
                <div class="icons">
                    <div class="body-medium">${this.iconText1}</div>
                    <div class="body-small">${this.iconSubText1}</div>
                </div>
            </div>
            <div class="sub">
                ${this.icon2 ? html`<md-icon>${this.icon2}</md-icon>`:``}
                <div class="icons">
                    <div class="body-medium">${this.iconText2}</div>
                    <div class="body-small">${this.iconSubText2}</div>
                </div>
            </div>
            <div class="sub">
                ${this.icon1 ? html`<md-icon>${this.icon3}</md-icon>`:``}
                <div class="icons">
                    <div class="body-medium">${this.iconText3}</div>
                    <div class="body-small">${this.iconSubText3}</div>
                </div>
            </div>
        </div>`;
    }
}
customElements.define('md-contact', Contact);