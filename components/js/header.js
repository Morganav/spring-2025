class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


<!-- your common html goes here -->

            `;
    }
  }
  
  customElements.define('header-component', Header);