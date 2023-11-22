const display = document.getElementById('display').value;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    display = '';
}

function calculate() {
    if (document.getElementById('display').value !== 'Error') {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    } else {
        alert('Não é possivel realizar calculo.')
    }
}
