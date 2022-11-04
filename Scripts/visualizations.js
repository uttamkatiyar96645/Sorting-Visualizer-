const speedVisualise = function() {
    speed = this.valueAsNumber;
    speed = Math.pow(10, speed);
    delayTime = 10000 / speed;
    speedLabel.textContent = `Speed : ${this.value}`;
}

speedRange.addEventListener('input', speedVisualise);

const divVisualise = function(divs1, divs2, divColor) {
    setTimeout(() => {
        divs1.style.backgroundColor = `${divColor}`;
        divs2.style.backgroundColor = `${divColor}`;
    }, currDelay += delayTime)
}

const heightUpdate = function(div1, divHeight1, div2, divHeight2) {
    setTimeout(() => {
        div1.style.height = `${divHeight1}%`;
        div2.style.height = `${divHeight2}%`;
    }, currDelay += delayTime)
}