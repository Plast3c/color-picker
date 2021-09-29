window.onload = function () {
    initcolorpicker();

}

function initcolorpicker() {
    let colorbox = document.getElementById("colorbox")
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    }
    let colorpickers = document.getElementsByClassName("picker")
setColorPickerEventListeners(colorbox, rgb, colorpickers)
}
function setColorPickerEventListeners(colorbox, rgb, pickerElements) {

    for (let i = 0; i < pickerElements.length; i++) {
        pickerElements[i].addEventListener('change', () => {
            console.log("red value" , rgb.red.value)
            let red = rgb.red.value
            let green = rgb.green.value
            let blue = rgb.blue.value
            setBoxBGColor(colorbox, red, green, blue)
            setDisplayValues(red, green, blue)
        })
    }}

function setBoxBGColor(colorbox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',')
    colorbox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red,green,blue){
    let redval = document.getElementById("redval")
    let greenval = document.getElementById("greenval")
    let blueval = document.getElementById("blueval")

    redval.innerText = red
    greenval.innerText = green
    blueval.innerText = blue
}