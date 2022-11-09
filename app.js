let addBtn = document.getElementById('add')
let countDisplay = document.getElementById('count')
let countTxt = document.querySelector('.count')
let count = 0
let timerId
let minusId
let pressDuration = 5

addBtn.addEventListener('touchstart', addCounter, false);

function addCounter(e) {
  this.textContent = '+'
  // e.preventDefault();
  clearInterval(minusId)
  timerId = setInterval(function () {
    count++
    countTxt.textContent = `increasing: ${count}`
    if (count >= 20000) {
      clearInterval(timerId)
      setTimeout(function () {
        countTxt.textContent = `Max reached: 20k`
      }, 1000)
    }
  }, pressDuration)
}
function minusCounter() {
  clearInterval(timerId)
  timerId = null
  if (count > 0) {
    addBtn.textContent = '-'
    minusId = setInterval(function () {
      count--
      countTxt.textContent = `decreasing: ${count}`

      if (count < 1) {
        clearInterval(minusId)
        setTimeout(function () {
          countTxt.textContent = `min reached: zero`

        }, 1000)
        addBtn.textContent = '+'
      }
    }, (pressDuration + 5))
  }
}
addBtn.ontouchend = function () {
  minusCounter()
}
addBtn.addEventListener('mousedown', function (e) {
  e.preventDefault();
  if (e.button === 0) {
    this.textContent = '+'
    addCounter()
  }
}, false);

addBtn.onmouseup = function () {
  minusCounter()
}
addBtn.onmousemove = function () {
  window.clearInterval(timerId)
}

function customMsg(msg, time) {
  var styler = document.createElement("div")
  styler.classList.add('custom-msg')
  styler.innerHTML = `<h1 id="copied"> ${msg} </h1>`
  setTimeout(function () {
    styler.parentNode.removeChild(styler)
  }, time)
  document.body.appendChild(styler)
}