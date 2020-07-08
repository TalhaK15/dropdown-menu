const toggleBtn = document.querySelector(".main-list-item")
const toggleList = document.querySelector(".toggle-list")
toggleList.style.display = "none"

const dropdown = function (btn, menu) {
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

dropdown(toggleBtn, toggleList)
