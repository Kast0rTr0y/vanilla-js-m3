import {html, css, LitElement} from 'lit';

export class LargeCard extends LitElement {
    static styles = css`
      :host{
        padding:10px;
        flex: 1 0 300px;
      }
      .surface {         
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 10px;
        background-color: var(--md-sys-color-tertiary-container);
        color: var(--md-sys-color-on-tertiary-container);
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
      .comment {
        display: flex;
        flex-direction: column;
      }
      .comment-body {
        background-color: var(--md-sys-color-surface-variant);
        border-radius: 10px;
        padding: 10px;
      }
      .status {
        display: flex;
      }
      .state {
        background-color: var(--md-sys-color-error);
        color: var(--md-sys-color-on-error);
        border-radius: 10px;
        flex: 1;
        padding: 4px;
      }
    `;
    static properties = {
        header:{type:String},
        subHeader:{type:String},
        icon1:{type:String},
        iconText1:{type:String},
        iconSubText1:{type:String},
        icon2:{type:String},
        iconText2:{type:String},
        iconSubText2:{type:String},
        commentHeader:{type:String},
        commentCard:{type:String},
        state:{type:String}
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
            <div class="body-small">${this.subHeader}</div>
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
            <div class="comment">
                <div class="body-small">${this.commentHeader}</div>
                ${this.commentCard && html`<div class="comment-body body-medium">${this.commentCard}</div>`}
            </div>
            <div class="status">
                ${this.state && html`<div class="state body-medium">${this.state}</div>`}
            </div>
        </div>`;
    }
}
customElements.define('md-large-card', LargeCard);