export const dropdown = function (btn, menu) {
  const toggleButtons = document.querySelectorAll("[data-toggle=dropdown]")

  toggleButtons.forEach((btn) => {
    let menu = document.querySelector(`#${btn.id} + .dropdown`)
    let type = btn.getAttribute("data-action") || "click"
    let positionData = btn.getAttribute("data-position")
    btn.parentNode.style.position = "relative"
    menu.style.position = "absolute"
    if (positionData.startsWith("bottom-")) {
      menu.style.top = `${btn.offsetHeight}px`
      if (positionData == "bottom-right") {
        menu.style.left = `${btn.offsetWidth - menu.offsetWidth}px`
      } else if (positionData == "bottom-left") {
        menu.style.left = 0
      } else if (positionData == "bottom-mid") {
        menu.style.left = `${(btn.offsetWidth - menu.offsetWidth) / 2}px`
      }
    } else if (positionData.startsWith("top-")) {
      menu.style.top = `-${menu.offsetHeight}px`
      if (positionData == "top-right") {
        menu.style.left = `${btn.offsetWidth - menu.offsetWidth}px`
      } else if (positionData == "top-left") {
        menu.style.left = 0
      } else if (positionData == "top-mid") {
        menu.style.left = `${(btn.offsetWidth - menu.offsetWidth) / 2}px`
      }
    }
    menu.style.display = "none"
    if (type == "click") {
      document.addEventListener("click", function (e) {
        if (e.target == btn) {
          if (menu.style.display != "block") {
            menu.style.display = "block"
          } else {
            menu.style.display = "none"
          }
        } else if (
          e.target.classList[0] !=
          document.querySelectorAll(`.${menu.classList[0]} > *`)[0].classList[0]
        ) {
          menu.style.display = "none"
        }
      })
    } else if (type == "hover") {
      if (!btn.getAttribute("tabindex")) btn.setAttribute("tabindex", 0)

      btn.addEventListener("focus", function () {
        menu.style.display = "block"
      })
      btn.addEventListener("blur", function () {
        menu.style.display = "none"
      })
      btn.addEventListener("mouseover", function () {
        menu.style.display = "block"
      })
      btn.addEventListener("mouseleave", function () {
        menu.style.display = "none"
      })
    }
  })
}
