import { fridge, master } from "./const.js";

customElements.define(
  "ul-image",
  class extends HTMLElement {
    constructor() {
      super();

      // Initial background image setting
      this._updateBackgroundImage();
    }

    /**
     * Updates the background image based on the imageName attribute.
     */
    _updateBackgroundImage() {
      const imageName = this.getAttribute("imageName"); // Read the current attribute value
      this.style.backgroundImage = `url(${
        imageName === "fridge" ? fridge : master
      })`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "imageName" && oldValue !== newValue) {
        console.log(
          `Attribute '${name}' changed from '${oldValue}' to '${newValue}'.`
        );
        this._updateBackgroundImage(); // Update the background when imageName changes
      }
    }

    static get observedAttributes() {
      return ["imageName"];
    }
  }
);
