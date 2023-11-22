function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    if (document.getElementById('display').value !== '') {
        if (document.getElementById('display').value !== 'Error') {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                alert('Não é possivel realizar calculo.');
                document.getElementById('display').value = 'Error';
            }
        } else {
            alert('Não é possivel realizar calculo.');
        }
    }
}
