let clickCount = 0
let clickCountElem.innerText


function addPoints1() {
  clickCount++

  let clickCountElem = document.getElementById("click-count")
  clickCountElem.innerText = clickCount.toString()
}

function addPoints3() {
  clickCount += 3

  let clickCountElem = document.getElementById("click-count")
  clickCountElem.innerText = clickCount.toString()
}