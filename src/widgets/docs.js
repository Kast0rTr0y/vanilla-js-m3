import {html, css, LitElement} from 'lit';

export class Documents extends LitElement {
    static styles = css`
      :host {
        flex: 1 0 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 12px;
        background-color: var(--md-sys-color-background);
        box-sizing: border-box;
        overflow: hidden;
      }
      .container {
        display: flex;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .container::-webkit-scrollbar {
        display: none;
      }
    `;
    static properties = {
        cards:{type:Array}
    };

    constructor() {
        super();
        this.cards = [];
    }

    render() {
        return html`<slot name="header"></slot>
        <div class="container">
            <slot></slot>
        </div>`;
    }
}
customElements.define('md-documents', Documents);