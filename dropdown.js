export const dropdown = function (btn, menu, type) {
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
        document.querySelectorAll(`.${menu.className} > *`)[0].classList[0]
      ) {
        menu.style.display = "none"
      }
    })
  } else if (type == "hover") {
    btn.addEventListener("mouseover", function () {
      menu.style.display = "block"
    })
    btn.addEventListener("mouseleave", function () {
      menu.style.display = "none"
    })
  }
}
