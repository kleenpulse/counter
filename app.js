let addBtn = document.getElementById('add')
let countDisplay = document.getElementById('count')
let countTxt = document.querySelector('.count')
let count = 0
let timerId
let minusId
let pressDuration = 5

countDisplay.textContent = count
addBtn.onclick = function () {
  count++
}
var element;
addBtn.addEventListener('touchstart', function (e) {
  this.textContent = '+'
  e.preventDefault();
  // var touch = e.touches[0];
  addCounter()

}, false);

function addCounter() {
  clearInterval(minusId)
  timerId = setInterval(function () {
    count++
    countTxt.textContent = `counting: ${count}`
    // countDisplay.textContent = count
  }, pressDuration)
}
function minusCounter() {

  clearInterval(timerId)
  timerId = null
  addBtn.textContent = '-'
  if (count > 0) {
    minusId = setInterval(function () {
      count--
      countTxt.textContent = `decreasing: ${count}`
      
      if (count < 1) {
        clearInterval(minusId)
        countTxt.textContent = `count: ${count}`
      }
    }, (pressDuration + 5))
  }
}
addBtn.ontouchend = function () {
  minusCounter()
}


addBtn.addEventListener('mousedown', function (e) {
  this.textContent = '+'
  e.preventDefault();

  addCounter()
}, false);

addBtn.onmouseup = function () {
 minusCounter()
}