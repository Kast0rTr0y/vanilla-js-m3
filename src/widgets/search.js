import {html, css, LitElement} from 'lit';

export class Search extends LitElement {
    static styles = css`:host { 
      width: 30vw;
    }
    div {
      height: 48px;
      background-color: var(--md-sys-color-background);
      display: flex;
      align-items: center;
      padding: 12px 16px;
      box-sizing: border-box;
      border-radius: 9999px;
    }
    input {
      border: none;
      outline: none;
      background-color: var(--md-sys-color-background);
      width: 400px;
    }
    md-icon{
      padding: 12px;
      opacity: .6;
    }
    @media (max-width: 800px) {
      :host {
        width: 48px;
      }
      div {
        background-color: transparent;
        padding: 0px;
        display: flex;
        justify-content: center;
      }
      input {
        display: none;
      }
      md-icon {
        padding: 0px;
      }
    }`;

    static properties = {
        name: {type: String},
    };

    constructor() {
        super();
        this.name = 'Somebody';
    }

    render() {
        return html`<div><md-icon>search</md-icon><input type="text"/></div>`;
    }
}
customElements.define('md-search', Search);