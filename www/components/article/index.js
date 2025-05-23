customElements.define(
  "ul-article",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("ul-article-template");
      const templateContent = template.content;
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
);
