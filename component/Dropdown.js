const template = document.createElement("template")
template.innerHTML = `
      <style>
        .fade {
          transition: opacity .5s;
        }
      </style>


      <div class="dropdown-container">
        <slot name="button"></slot>
        
        <slot name="menu"></slot>
      </div>
    `

class Dropdown extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.btn = this.querySelector("[slot=button]")
    this.menu = this.querySelector("[slot=menu]")

    this.btn.id = this.getAttribute("btnId") || ""

    this.btn.setAttribute("data-toggle", "dropdown")

    this.btn.setAttribute("data-action", this.getAttribute("action") || "click")

    this.btn.setAttribute(
      "data-position",
      this.getAttribute("position") || "bottom-mid"
    )

    this.menu.className += ` dropdown ${
      this.getAttribute("menuAnimation") || ""
    }`
  }
}

window.customElements.define("drop-down", Dropdown)
