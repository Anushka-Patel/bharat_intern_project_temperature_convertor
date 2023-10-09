const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }  

    // Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        let kelvin = ((K-273.15) *9 / 5 + 32).toFixed(1);
        return kelvin;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }

    if (valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }

    else {
        document.getElementById("result").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
    }
}
    
