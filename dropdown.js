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
      e.target.className !=
      document.querySelectorAll(`.${menu.className} > li`)[0].className
    ) {
      menu.style.display = "none"
    }
  })
}
