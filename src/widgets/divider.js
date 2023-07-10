import {html, css, LitElement} from 'lit';

export class Divider extends LitElement {
    static styles = css`:host {
      flex: 1 0 100%;
      display: block;
      height: 28px;
    }`;
    constructor() {
        super();
    }

    render() {
        return html``;
    }
}
customElements.define('md-divider', Divider);