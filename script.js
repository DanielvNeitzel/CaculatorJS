const display = document.getElementById('display').value;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    display = '';
}

function calculate() {
    if (display.value == 'Error') {
        try {
            display = eval(display);
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        alert('Não é possivel realizar calculo.')
    }
}
