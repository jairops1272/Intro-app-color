document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
    const colorPicker = document.getElementById("colorPicker");

    function updateColor() {
        let r = parseInt(red.value);
        let g = parseInt(green.value);
        let b = parseInt(blue.value);

        let hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateFromInput() {
        let r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
        let g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
        let b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function updateFromPicker() {
        let hex = colorPicker.value;
        hexCode.textContent = hex.toUpperCase();
        colorBox.style.backgroundColor = hex;

        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateFromInput);
    greenInput.addEventListener("input", updateFromInput);
    blueInput.addEventListener("input", updateFromInput);
    
    colorPicker.addEventListener("input", updateFromPicker);
});
