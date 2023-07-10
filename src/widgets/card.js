import {html, css, LitElement} from 'lit';

export class Card extends LitElement {
    static styles = css`
      :host{
        padding:10px;
        flex: 0 0 200px;
      }
      .surface {         
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 10px;
        height: 176px;
        width: 200px;
        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
        box-sizing: border-box;
      }
      .surface:hover {
        --md-elevation-level: 3;
      }
      .sub {
        display: flex;
      }
      .icons {
        display: flex;
        flex-direction: column;
      }
      .body-medium {
        font-size: var(--md-sys-typescale-body-medium-font-size);
        line-height: var(--md-sys-typescale-body-medium-line-height);
      }
      .body-small {
        font-size: var(--md-sys-typescale-body-small-font-size);
        line-height: var(--md-sys-typescale-body-small-line-height);
      }
    `;
    static properties = {
        header:{type:String},
        icon1:{type:String},
        iconText1:{type:String},
        iconSubText1:{type:String},
        icon2:{type:String},
        iconText2:{type:String},
        iconSubText2:{type:String}
    };

    constructor() {
        super();
    }

    render() {
        return html`<div class="surface">
            <md-elevation></md-elevation>
            <md-ripple></md-ripple>
            <div class="body-small">${this.header}</div>
            <slot></slot>
            <div class="sub">
                <md-icon>${this.icon1}</md-icon>
                <div class="icons">
                    <div class="body-medium">${this.iconText1}</div>
                    <div class="body-small">${this.iconSubText1}</div>
                </div>
            </div>
            <div class="sub">
                <md-icon>${this.icon2}</md-icon>
                <div class="icons">
                    <div class="body-medium">${this.iconText2}</div>
                    <div class="body-small">${this.iconSubText2}</div>
                </div>
            </div>
        </div>`;
    }
}
customElements.define('md-card', Card);