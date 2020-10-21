const template = document.createElement("template")
template.innerHTML = `
      <style>
        .fade {
          transition: opacity 3s;
        }

        .dropdown-container {
          position: relative !important;
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


    function isElementInViewport(e) {
      let element = e.getBoundingClientRect()
      return (
        element.top >= 0 &&
        element.left >= 0 &&
        element.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        element.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    /* this.shadowRoot.querySelector("slot[name='menu']").classList.add(this.getAttribute("animation") || "") */

    this.btn = this.querySelector("[slot=button]")
    this.menu = this.querySelector("[slot=menu]")

    this.type = this.getAttribute("action") || "click"
    this.position = this.getAttribute("position") || "bottom-mid"
    this.position = this.position.split("-")
    this.menu.style.position = "absolute"
    this.menuHeight = this.menu.offsetHeight
    this.menuWidth = this.menu.offsetWidth

    function setPosition(t) {
      if (t.position[0] == "bottom") {
        t.menu.style.top = `${t.btn.offsetHeight}px`
      } else if (t.position[0] == "top") {
        t.menu.style.top = `-${t.menuHeight}px`
      }
    }

    setPosition(this)
    if (this.position[1] == "right") {
      this.menu.style.left = `${this.btn.offsetWidth - this.menuWidth}px`
    } else if (this.position[1] == "left") {
      this.menu.style.left = 0
    } else if (this.position[1] == "mid") {
      this.menu.style.left = `${(this.btn.offsetWidth - this.menuWidth) / 2}px`
    }

    this.menu.style.visibility = "hidden"
    this.menu.style.opacity = 0
    this.zindex = this.menu.style.zIndex

    if (this.type == "click") {
      document.addEventListener("click", (e) => {
        if (e.target == this.btn) {
          if (this.menu.style.opacity != 0) {
            this.menu.style.zIndex = this.zindex
            this.menu.style.visibility = "hidden"
            this.menu.style.opacity = 0
            setPosition(this)
          } else {
            if (!isElementInViewport(this.menu)) {
              if (this.position[0] == "bottom") {
                this.menu.style.top = `-${this.menuHeight}px`
              } else if (this.position[0] == "top") {
                this.menu.style.top = `${this.btn.offsetHeight}px`
              }
            }

            this.menu.style.zIndex = 999
            this.menu.style.visibility = "visible"
            this.menu.style.opacity = 1
          }
        } else if (
          e.target.classList[0] !=
          document.querySelectorAll(`.${this.menu.classList[0]} > *`)[0].classList[0]
        ) {
          this.menu.style.zIndex = this.zindex
          this.menu.style.visibility = "hidden"
          this.menu.style.opacity = 0
        }
      })
    } else if (this.type == "hover") {
      this.btn.addEventListener("mouseover", () => {
        if (!isElementInViewport(this.menu)) {
          if (this.position[0] == "bottom") {
            this.menu.style.top = `-${this.menuHeight}px`
          } else if (this.position[0] == "top") {
            this.menu.style.top = `${this.btn.offsetHeight}px`
          }
        }

        this.menu.style.zIndex = 999
        this.menu.style.visibility = "visible"
        this.menu.style.opacity = 1
      })
      this.btn.parentNode.addEventListener("mouseleave", function () {
        this.menu.style.zIndex = this.zindex
        this.menu.style.visibility = "hidden"
        this.menu.style.opacity = 0
        setPosition(this)
      })
    }
  }
}

customElements.define("drop-down", Dropdown)
