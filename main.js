// function updateReadout(event) {
//     let currentReadout = document.querySelector('.readout-text')
//     let newReadout = document.createTextNode(event)
//     currentReadout.append(newReadout)
// }

let button0 = document.querySelector('.zero')
button0.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(0)
    currentReadout.append(newReadout)
})

let button1 = document.querySelector('.one')
button1.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(1)
    currentReadout.append(newReadout)
})

let button2 = document.querySelector('.two')
button2.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(2)
    currentReadout.append(newReadout)
})

let button3 = document.querySelector('.three')
button3.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(3)
    currentReadout.append(newReadout)
})

let button4 = document.querySelector('.four')
button4.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(4)
    currentReadout.append(newReadout)
})

let button5 = document.querySelector('.five')
button5.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(5)
    currentReadout.append(newReadout)
})

let button6 = document.querySelector('.six')
button6.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(6)
    currentReadout.append(newReadout)
})

let button7 = document.querySelector('.seven')
button7.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(7)
    currentReadout.append(newReadout)
})

let button8 = document.querySelector('.eight')
button8.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(8)
    currentReadout.append(newReadout)
})

let button9 = document.querySelector('.nine')
button9.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode(9)
    currentReadout.append(newReadout)
})

let buttonC = document.querySelector('.clear')
buttonC.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    currentReadout.innerHTML = ""
})

let buttonX = document.querySelector('.multiply')
buttonX.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode('*')
    currentReadout.append(newReadout)
})

let buttonDivi = document.querySelector('.divide')
buttonDivi.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode('/')
    currentReadout.append(newReadout)
})

let buttonAdd = document.querySelector('.add')
buttonAdd.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode('+')
    currentReadout.append(newReadout)
})

let buttonEq = document.querySelector('.equals')
buttonEq.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let readout = currentReadout.innerText
    let ans = eval(readout)
    currentReadout.innerHTML = ans
})

let buttonDec = document.querySelector('.decimal')
buttonDec.addEventListener('click', function updateReadout() {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode('.')
    currentReadout.append(newReadout)
})

let currReadout = document.querySelector('.readout-text')