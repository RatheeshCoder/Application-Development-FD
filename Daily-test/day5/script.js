const ShapeElement = document.getElementById("Shape-out");
const increaseButton = document.getElementById("increaseBtn");
const resetButton = document.getElementById("resetBtn");
const redButton = document.getElementById("redBtn");
const blueButton = document.getElementById("blueBtn");
const count = document.getElementById("counter");
const toggleButton = document.getElementById("toggleBtn");
let countValue = 0;
let isDarkTheme = false;

increaseButton.addEventListener("click", () => {
    countValue += 1;
    count.textContent = countValue;
    updateShape();
});

resetButton.addEventListener("click", () => {
    countValue = 0;
    count.textContent = countValue;
    updateShape();
});

redButton.addEventListener("click", () => {
    countValue += 1;
    count.textContent = countValue;
    ShapeElement.style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
    countValue += 1;
    count.textContent = countValue;
    ShapeElement.style.backgroundColor = "blue";
});

toggleButton.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.backgroundColor = isDarkTheme ? "black" : "whitesmoke";
    document.body.style.color = isDarkTheme ? "white" : "black";
});

function updateShape() {
    if (countValue % 5 === 0) {
        ShapeElement.style.width = "300px";
        ShapeElement.style.height = "300px";
        ShapeElement.style.borderRadius = "50%";
    } else if (countValue % 2 === 0) {
        ShapeElement.style.width = "300px";
        ShapeElement.style.height = "300px";
        ShapeElement.style.borderRadius = "0";
    } else {
        ShapeElement.style.width = "600px";
        ShapeElement.style.height = "300px";
        ShapeElement.style.borderRadius = "0";
    }
}
