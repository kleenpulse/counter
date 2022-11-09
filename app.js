let addBtn = document.getElementById('add')
let countDisplay = document.getElementById('count')
let dynamicIsland = document.getElementById('dynamic-island')
let dynamicTxt = document.getElementById('theme-text')
let countTxt = document.querySelector('.count')
let count = 0
let timerId
let minusId
let pressDuration = 5
let bodyTimer // for body timeout
let dynamicTimer // for body timeout


// =====Dynamic text======
setTimeout(() => {
  dynamicIsland.classList.add('hidden')
}, 3000);

addBtn.addEventListener('touchstart', addCounter, false);
document.body.onmouseleave = function () {
  window.clearTimeout(dynamicTimer)

  dynamicIsland.classList.remove('hidden')
  dynamicTxt.textContent = 'Bye!'
  bodyTimer = setTimeout(function () {
    dynamicIsland.classList.add('hidden')
  }, 2000)
}
document.body.onmouseenter = function () {
  window.clearTimeout(dynamicTimer)
  window.clearTimeout(bodyTimer)
  document.getElementById('check').style.display = 'none'
  dynamicIsland.classList.remove('hidden')
  dynamicTxt.textContent = 'welcome back!'
  bodyTimer = setTimeout(function () {
    dynamicIsland.classList.add('hidden')
    document.getElementById('check').style.display = 'block'

  }, 2000)
}


function addCounter() {
  window.clearTimeout(bodyTimer)
  this.textContent = '+'
  // e.preventDefault();
  clearInterval(minusId)
  timerId = setInterval(function () {
    count++
    countTxt.textContent = `increasing: ${count}`
    if (count >= 20000) {
      clearInterval(timerId)
      dynamicTxt.textContent = 'Max reached'
      dynamicTimer = setTimeout(function () {
        countTxt.textContent = `Max reached: 20k`
        dynamicIsland.classList.remove('hidden')

      }, 1000)
      setTimeout(function () {
        dynamicIsland.classList.add('hidden')
      }, 3000)
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
        dynamicTxt.textContent = 'min reached'
        setTimeout(function () {
          countTxt.textContent = `min reached: zero`
          dynamicIsland.classList.remove('hidden')
        }, 1000)
        setTimeout(function () {
          dynamicIsland.classList.add('hidden')
        }, 3000)
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
