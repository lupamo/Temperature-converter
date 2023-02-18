const celsiusInput = document.getElementById("celcius");
const faharenheitInput = document.getElementById("faharenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input"); 

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);

        switch(e.target.name){
            case "celcius":
                faharenheitInput.value = (value* 1.8)+32;
                kelvinInput.value = value + 273.15;
                break;
            case "faharenheit": 
                celsiusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 32;
                break;
            case "kelvin":
                celsiusInput.value = value - 273.15;
                faharenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    })
}