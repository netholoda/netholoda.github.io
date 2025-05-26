customElements.define(
  "ul-article",
  class extends HTMLElement {
    constructor() {
      super();

      /**
       *
       * @type {HTMLTemplateElement}
       */
      const template = document.getElementById("ul-article-template");
      const templateContent = template.content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      const child = templateContent.cloneNode(true);
      const titleText = this.getAttribute("titleText");
      const reasons = this.getAttribute("reasons") || "Reason 1";
      const reasonsArr = reasons.split(",");

      const ul = child.querySelector("ul");

      reasonsArr.forEach((reason) => {
        const li = document.createElement("li");
        ul?.appendChild(li);
        li.appendChild(document.createTextNode(reason));
      });

      child
        .querySelector("h4")
        .appendChild(document.createTextNode(titleText || "Title"));

      shadowRoot.appendChild(child);
    }

    connectedCallback() {
      console.log("Custom element added to page.");
    }

    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }

    connectedMoveCallback() {
      console.log("Custom element moved with moveBefore()");
    }

    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }

    static get observedAttributes() {
      return ["titleText", "reasons"];
    }
  }
);
