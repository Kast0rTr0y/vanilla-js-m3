import {html, css, LitElement} from 'lit';

export class Divider extends LitElement {
    static styles = css`:host { 
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