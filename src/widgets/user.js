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
      background-color: var(--md-sys-color-primary-container);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
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
            <div class="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--md-sys-color-on-primary-container)" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            </div>
            <div class="login">
                <div>Валерий Красноперов</div>
                <div class="body-small">Партнер</div>
            </div>
        </div>`;
    }
}
customElements.define('md-user', User);