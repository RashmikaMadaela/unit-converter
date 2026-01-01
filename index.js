const inputEl = document.getElementById('input-value');
const lengthRes = document.getElementById('length-result');
const volumeRes = document.getElementById('volume-result');
const massRes = document.getElementById('mass-result');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', function() {
    const inputValue = parseFloat(inputEl.value);

    // Length Conversion
    const meters = inputValue * 0.3048;
    const feet = inputValue / 0.3048;

    // Volume Conversion
    const liters = inputValue * 3.78541;
    const gallons = inputValue / 3.78541;

    // Mass Conversion
    const kilos = inputValue * 0.453592;
    const pounds = inputValue / 0.453592;

    lengthRes.innerHTML = `${inputValue} meters = ${feet.toFixed(3)} feet <br> ${inputValue} feet = ${meters.toFixed(3)} meters`;
    volumeRes.innerHTML = `${inputValue} liters = ${gallons.toFixed(3)} gallons <br> ${inputValue} gallons = ${liters.toFixed(3)} liters`;
    massRes.innerHTML = `${inputValue} kilos = ${pounds.toFixed(3)} pounds <br> ${inputValue} pounds = ${kilos.toFixed(3)} kilos`;
});

