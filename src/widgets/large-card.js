import {html, css, LitElement} from 'lit';
import '@material/web/button/filled-button'

export class LargeCard extends LitElement {
    static styles = css`
      :host{
        padding:8px;
        flex: 1 0 300px;
      }
      :host slot {
        font-size: var(--md-sys-typescale-body-large-font-size);
        line-height: var(--md-sys-typescale-body-large-line-height);
        letter-spacing: var(--md-sys-typescale-body-large-letter-spacing);
      }
      .surface {         
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 16px 16px 8px 16px;
        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
      }
      .surface:hover {
        --md-elevation-level: 3;
      }
      .sub {
        display: flex;
        padding: 12px 0px;
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
      .comment {
        display: flex;
        flex-direction: column;
        padding-top: 8px;
        gap:4px;
      }
      .comment-body {
        opacity: .5;
        background-color: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        border-radius: 10px;
        padding: 10px;
      }
      .status {
        display: flex;
        height: 48px;
        padding: 8px 0px;
        box-sizing: border-box;
      }
      .state {
        background-color: var(--md-custom-color-red-container);
        color: var(--md-custom-color-red-on-container);
        border-radius: 8px;
        flex: 1;
        padding: 6px 6px;
      }
      .time {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        font-size: var(--md-sys-typescale-label-small-font-size);
        line-height: var(--md-sys-typescale-label-small-line-height);
        letter-spacing: var(--md-sys-typescale-label-small-letter-spacing);
        color: var(--md-sys-color-on-surface);
        align-items: center;
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
        state:{type:String},
        stateTime:{type:Number},
        button:{type:Boolean}
    };

    constructor() {
        super();
    }

    render() {
        return html`<div class="surface">
            ${!this.button?html`<md-elevation></md-elevation>`:''}
            ${!this.button?html`<md-ripple></md-ripple>`:''}
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
                ${this.stateTime && html`
                    <div class="time">
                        ${this.stateTime > 0 ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="var(--md-custom-color-red)" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM253-253l227-227v-320q-134 0-227 93t-93 227q0 64 24 123t69 104Z"/></svg>`:
                        html`<svg xmlns="http://www.w3.org/2000/svg" fill="var(--md-custom-color-green)" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-64-24-123t-69-104L480-480v-320q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>`}
                        ${Math.abs(this.stateTime)} минут
                    </div>`}
            </div>
            ${this.button && html`<md-filled-button style="">
                <md-icon slot="icon">edit</md-icon>
                Подписать
            </md-filled-button>`}
        </div>`;
    }
}
customElements.define('md-large-card', LargeCard);