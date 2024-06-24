const btnNumberConvert = document.getElementById('btnNumberConvert');

btnNumberConvert.addEventListener("click", (e) => {
    convertBase();
});

function convertBase() {
    const from = document.getElementById('fromNumber').value;
    const to = document.getElementById('toNumber').value;
    const input = document.getElementById('inputNumber').value.trim();
    const outputNumber = document.getElementById('outputNumber');
    let output = '';

    try {
        let decimalValue;

        // Convert input to decimal
        switch (from) {
            case 'binary':
                decimalValue = parseInt(input, 2);
                break;
            case 'decimal':
                decimalValue = parseInt(input, 10);
                break;
            case 'octal':
                decimalValue = parseInt(input, 8);
                break;
            case 'hex':
                decimalValue = parseInt(input, 16);
                break;
            default:
                throw new Error('Invalid "From" base');
        }

        if (isNaN(decimalValue)) {
            throw new Error('Invalid input number');
        }

        // Convert decimal to target base
        switch (to) {
            case 'binary':
                output = decimalValue.toString(2);
                break;
            case 'decimal':
                output = decimalValue.toString(10);
                break;
            case 'octal':
                output = decimalValue.toString(8);
                break;
            case 'hex':
                output = decimalValue.toString(16).toUpperCase();
                break;
            default:
                throw new Error('Invalid "To" base');
        }

    } catch (error) {
        output = 'Error: ' + error.message;
    }

    outputNumber.value = output;
}