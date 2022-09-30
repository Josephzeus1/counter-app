let minusEl = document.getElementById("minus-el")
let countEl = document.getElementById("count-el")
let multiplyEl = document.getElementById("multiply-el")
let stopEl = document.getElementById("stop-el")
let add = 0

function increment() {
    add += 1
    countEl.textContent = add
}
let minus = 0
function decrement() {
    minus -= 1
    //let countStr = count - 1
    minusEl.textContent = minus
  //  countEl.textContent = 0
  //  count = 0
}


let time = 1
function multiply() {
    time = time * 3
    multiplyEl.textContent = time
}

function stop() {
    let saver = time + add
    stopEl.textContent += saver + " - "
    countEl.textContent = 0
    multiplyEl.textContent = 0
    minusEl.textContent = 0
    count = 0 
    time = 1
    minus = 0
}