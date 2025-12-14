function convertNumber() {
    let inputNumber = document.getElementById("inputNumber").value;
    let fromBase = document.getElementById("fromBase").value;
    let toBase = document.getElementById("toBase").value;
    let resultElement = document.getElementById("result");

    if (inputNumber === "") {
        resultElement.textContent = "Please enter a number.";
        return;
    }

    let decimalValue = parseInt(inputNumber, parseInt(fromBase, 10));

    if (isNaN(decimalValue)) {
        resultElement.textContent = "Invalid input for selected base!";
    } else {
        let convertedValue = decimalValue.toString(parseInt(toBase, 10)).toUpperCase();
        resultElement.textContent = "Result: " + convertedValue;
    }
}