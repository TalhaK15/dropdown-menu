const toggleBtn = document.querySelector(".main-list-item")
const toggleList = document.querySelector(".toggle-list")
let toggleListDisplay = toggleList.style.display
document.addEventListener("click", function (e) {
  if (e.target == toggleBtn) {
    if (toggleListDisplay != "block") {
      toggleList.style.display = "block"
    } else {
      toggleList.style.display = "none"
    }
  } else if (e.target.className != "toggle-list-item") {
    toggleList.style.display = "none"
  }
  toggleListDisplay = toggleList.style.display
})
