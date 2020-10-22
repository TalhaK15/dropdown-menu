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

export const dropdown = function () {
  const toggleButtons = document.querySelectorAll("[data-toggle]")

  toggleButtons.forEach((btn) => {
    let menuClass = btn.dataset.toggle
    let menu = document.querySelector(`#${btn.id} + .${menuClass}`)
    let type = btn.dataset.action || "click"
    let modal = btn.dataset.modal || "true"

    let isSmallScreen = window.matchMedia("(max-width: 768px)").matches

    if (modal == "true" && isSmallScreen) {
      var modalContainer = document.createElement("div")
      modalContainer.classList.add("modal-container")
      menu.classList.add("modal")
      modalContainer.appendChild(menu)
      btn.parentNode.insertBefore(modalContainer, btn.nextElementSibling)
      type = "click"
    } else {
      var position = btn.dataset.position || "bottom-mid"
      position = position.split("-")
      btn.parentNode.style.position = "relative"
      menu.style.position = "absolute"
      var menuHeight = menu.offsetHeight
      var menuWidth = menu.offsetWidth

      var setPosition = () => {
        if (position[0] == "bottom") {
          menu.style.top = `${btn.offsetHeight}px`
        } else if (position[0] == "top") {
          menu.style.top = `-${menuHeight}px`
        }
      }

      setPosition()
      if (position[1] == "right") {
        menu.style.left = `${btn.offsetWidth - menuWidth}px`
      } else if (position[1] == "left") {
        menu.style.left = 0
      } else if (position[1] == "mid") {
        menu.style.left = `${(btn.offsetWidth - menuWidth) / 2}px`
      }

      menu.style.visibility = "hidden"
      menu.style.opacity = 0
      var zindex = menu.style.zIndex
    }

    if (type == "click") {
      document.addEventListener("click", function (e) {
        if (e.target == btn) {
          if (modal == "true" && isSmallScreen) {
            if (modalContainer.style.display == "block") {
              modalContainer.style.display = "none"
            } else {
              modalContainer.style.display = "block"
            }
          } else {
            if (menu.style.opacity == 1) {
              menu.style.opacity = 0
              menu.style.visibility = "hidden"
              menu.style.zIndex = zindex

              setPosition()
            } else {
              if (!isElementInViewport(menu)) {
                if (position[0] == "bottom") {
                  menu.style.top = `-${menuHeight}px`
                } else if (position[0] == "top") {
                  menu.style.top = `${btn.offsetHeight}px`
                }
              }

              menu.style.zIndex = 999
              menu.style.visibility = "visible"
              menu.style.opacity = 1
            }
          }
        } else if (
          e.target.classList[0] !=
          document.querySelectorAll(`.${menu.classList[0]} > *`)[0].classList[0]
        ) {
          if (modal == "true" && isSmallScreen) {
            if (modalContainer.style.display == "block") {
              modalContainer.style.display = "none"
            }
          } else {
            if (menu.style.opacity == 1) {
              menu.style.opacity = 0
              menu.style.visibility = "hidden"
              menu.style.zIndex = zindex

              setPosition()
            }
          }
        }
      })
    } else if (type == "hover") {
      btn.addEventListener("mouseover", function () {
        if (!isElementInViewport(menu)) {
          if (position[0] == "bottom") {
            menu.style.top = `-${menuHeight}px`
          } else if (position[0] == "top") {
            menu.style.top = `${btn.offsetHeight}px`
          }
        }

        menu.style.zIndex = 999
        menu.style.visibility = "visible"
        menu.style.opacity = 1
      })
      btn.parentNode.addEventListener("mouseleave", function () {
        menu.style.opacity = 0
        menu.style.visibility = "hidden"
        menu.style.zIndex = zindex

        setPosition()
      })
    }
  })
}
