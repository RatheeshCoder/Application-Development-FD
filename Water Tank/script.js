let currentTop = 15; 
let interval;
let waterOut = document.querySelector('.water-out');

document.getElementById('tapButton').addEventListener('click', function() {
    let svgElement = document.querySelector('.water-tank .liquid svg');

    if (interval) {
        clearInterval(interval);
        interval = null;
    }

    interval = setInterval(function() {
        if (currentTop < 90) {
            currentTop += 5;
            svgElement.style.top = currentTop + '%';
            waterOut.classList.add('active'); 
        } else {
            clearInterval(interval);
            waterOut.classList.remove('active', 'reverse'); 
        }
    }, 500); 
});
