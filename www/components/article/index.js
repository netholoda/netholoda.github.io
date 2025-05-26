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

      if (!template) {
        console.error("Template with ID 'ul-article-template' not found.");
        return; // Or throw an error, or render fallback content
      }

      const shadowRoot = this.attachShadow({ mode: "open" });
      const child = templateContent.cloneNode(true);

      // Store references to the elements we'll update
      this._titleElement = child.querySelector("h4");
      this._reasonsListElement = child.querySelector("ul");

      // Initial render based on attributes
      this._updateContent();

      shadowRoot.appendChild(child);
    }

    /**
     * Updates the content of the custom element based on its attributes.
     * This method is called initially in the constructor and by attributeChangedCallback.
     */
    _updateContent() {
      const titleText = this.getAttribute("titleText") || "Title";
      const reasons = this.getAttribute("reasons");
      const reasonsArr = reasons
        ? reasons
            .split(",")
            .map((reason) => reason.trim())
            .filter((reason) => reason.length > 0)
        : ["Reason 1"];

      // Clear existing list items
      if (this._reasonsListElement) {
        this._reasonsListElement.innerHTML = "";
      }

      // Add new list items
      reasonsArr.forEach((reason) => {
        const li = document.createElement("li");
        this._reasonsListElement?.appendChild(li);
        li.textContent = reason; // Use textContent for safety and simplicity
      });

      // Update the title
      if (this._titleElement) {
        this._titleElement.textContent = titleText; // Use textContent for safety and simplicity
      }
    }

    // This is the standard callback for when attributes listed in observedAttributes change
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        console.log(
          `Attribute '${name}' changed from '${oldValue}' to '${newValue}'.`
        );
        // Re-render the content when relevant attributes change
        this._updateContent();
      }
    }

    static get observedAttributes() {
      return ["titleText", "reasons"];
    }
  }
);
