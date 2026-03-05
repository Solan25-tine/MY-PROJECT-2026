document.addEventListener(`DOMContentLoaded`, () => {
    const display = document.getElementById(`display`);

    window.appendToDisplay = function(value) {
        if (display.value === `0`) {
            display.value = value;
        } else {
            display.value += value;
        }
    };

    window.clearDisplay = function() {
        display.value = `0`;
    };

    window.deleteLast = function() {
        display.value = display.value.slice(0, -1) || `0`;
    };

    window.calculateResult = function() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = `Error`;
        }
    };
});