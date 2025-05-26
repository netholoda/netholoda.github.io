import { fridge, master } from "./const.js";

customElements.define(
  "ul-image",
  class extends HTMLElement {
    constructor() {
      super();

      const imageName = this.getAttribute("imageName");
      this.style.backgroundImage = `url(${
        imageName === "fridge" ? fridge : master
      })`;
    }

    static get observedAttributes() {
      return ["imageName"];
    }
  }
);
