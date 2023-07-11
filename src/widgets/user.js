import {html, css, LitElement} from 'lit';

export class User extends LitElement {
    static styles = css`:host {
    }
    .container{
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 9999px;
      cursor: pointer;
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    }
    .avatar {
      width: 40px;
      height: 40px;
      background-color: var(--md-sys-color-background);
      border-radius: 9999px;
    }
    .login{
      padding: 0px 12px;
      display: flex;
      flex-direction: column;
    } 
    .body-small{
      font-family: var(--md-sys-typescale-body-small-font-family-name);
      font-style: var(--md-sys-typescale-body-small-font-family-style);
      font-weight: var(--md-sys-typescale-body-small-font-weight);
      font-size: var(--md-sys-typescale-body-small-font-size);
      letter-spacing: var(--md-sys-typescale-body-small-tracking);
      line-height: var(--md-sys-typescale-body-small-height);
      text-transform: var(--md-sys-typescale-body-small-text-transform);
      text-decoration: var(--md-sys-typescale-body-small-text-decoration);
      opacity: .6;
    } 
    @media (max-width: 800px) {
      .login{
        display: none;
      }
    }`;

    static properties = {
    };

    constructor() {
        super();
    }

    render() {
        return html`<div class="container">
            <md-ripple></md-ripple>
            <div class="avatar"></div>
            <div class="login">
                <div>Валерий Красноперов</div>
                <div class="body-small">Партнер</div>
            </div>
        </div>`;
    }
}
customElements.define('md-user', User);