import { dropdown } from "./dropdown.js"

const toggleBtn = document.querySelectorAll(".main-list-item")
const toggleList = document.querySelectorAll(".toggle-list")

dropdown(toggleBtn[0], toggleList[0])
dropdown(toggleBtn[1], toggleList[1])
