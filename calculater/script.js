function clearDisplay() {
    document.getElementById('resultDisplay').innerText = '0';
}

function toggleSign() {
    let result = document.getElementById('resultDisplay').innerText;
    if (result !== '0') {
        if (result.charAt(0) === '-') {
            document.getElementById('resultDisplay').innerText = result.slice(1);
        } else {
            document.getElementById('resultDisplay').innerText = '-' + result;
        }
    }
}

function append(value) {
    let result = document.getElementById('resultDisplay').innerText;
    if (result === '0' && value !== '.') {
        document.getElementById('resultDisplay').innerText = value;
    } else {
        document.getElementById('resultDisplay').innerText += value;
    }
}

function calculate() {
    let result = document.getElementById('resultDisplay').innerText;
    let calculatedResult = eval(result);
    document.getElementById('resultDisplay').innerText = calculatedResult;
}

// Hours
document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById('time').innerText = hours + ':' + minutes;
});
