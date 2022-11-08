let addBtn = document.getElementById('add')
let countDisplay = document.getElementById('count')
let countTxt = document.querySelector('.count')
let count = 0
let timerId
let minusId
let pressDuration = 5


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
    if( count >= 20000){
      clearInterval(timerId)
    }
    countTxt.textContent = `counting....: ${count}`
    
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
        countTxt.textContent = `count: zero`
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