export const dropdown = function (btn, menu) {
  menu.style.display = "none"
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
}
