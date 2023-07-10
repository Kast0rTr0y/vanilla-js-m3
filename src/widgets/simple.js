import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
    static styles = css`:host { 
      
    }`;

    static properties = {
        name: {type: String},
    };

    constructor() {
        super();
        this.name = 'Somebody';
    }

    render() {
        return html`<p>Hello, ${this.name}!<slot name="text"></slot></p>`;
    }
}
customElements.define('simple-greeting', SimpleGreeting);