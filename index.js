import { dropdown } from "./dropdown.js"

const toggleBtnUl = document.querySelectorAll(".main-list-item")
const toggleListUl = document.querySelectorAll(".toggle-list")
const toggleBtnBtn = document.querySelector(".toggle-btn")
const toggleListDiv = document.querySelector(".dropdown-menu")
const toggleBtnA = document.querySelector(".toggle-a")
const toggleListOl = document.querySelector(".dropdown-orderedlist")

dropdown(toggleBtnUl[0], toggleListUl[0], "hover")
dropdown(toggleBtnUl[1], toggleListUl[1], "hover")
dropdown(toggleBtnBtn, toggleListDiv, "click")
dropdown(toggleBtnA, toggleListOl, "click")
