import {html, css, LitElement} from 'lit';

export class Documents extends LitElement {
    static styles = css`
        :host {
          display: flex;
          flex-direction: column;
          padding: 10px;
          background-color: var(--md-sys-color-background);
          border-radius: 10px;
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
        if(this.cards.length) return html`<slot name="header"></slot>
        <div class="container">
            <slot></slot>
        </div>`;
        return html`<span>Loading...</span>`;
    }
}
customElements.define('md-documents', Documents);