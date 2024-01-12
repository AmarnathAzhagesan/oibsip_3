function convertTemperature() {
    
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;


    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }


    let convertedTemperature;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
        resultUnit = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    }


    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
