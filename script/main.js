function checkNumber() {
    let numberchecker = document.querySelector("#number");
    let number = parseInt(numberchecker.value);
    let display = document.querySelector("#result");
        if (number % 2 === 0) {
            display.innerHTML = "Even number";
        } 
        else {
            display.innerHTML = "Odd number";
        }
}