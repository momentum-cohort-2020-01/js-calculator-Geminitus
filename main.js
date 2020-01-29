// function updateReadout(num) {
//     let currentReadout = document.querySelector('.readout-text')
//     let newReadout = document.createTextNode(num)
//     currentReadout.append(newReadout)
// }

let button0 = document.querySelector('.zero')
button0.addEventListener('click', function () {
    let currentReadout = document.querySelector('.readout-text')
    let newReadout = document.createTextNode('0')
    currentReadout.append(newReadout)
})