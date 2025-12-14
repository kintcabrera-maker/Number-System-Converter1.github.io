<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number System Converter</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <div class="converter">
        <h1>Number System Converter</h1>
        <label for="inputNumber">Enter Number:</label>
        <input type="text" id="inputNumber" placeholder="Enter value">

        <label for="fromBase">From:</label>
        <select id="fromBase">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="8">Octal</option>
            <option value="16">Hexadecimal</option>
        </select>

        <label for="toBase">To:</label>
        <select id="toBase">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="8">Octal</option>
            <option value="16">Hexadecimal</option>
        </select>

        <button onclick="convertNumber()">Convert</button>

        <div class="result" id="result">Result will appear here:</div>
    </div>

    <script src="script.js"></script>
</body>
</html>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.converter {
    background-color: white;
    padding: 30px 25px;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100%;
    max-width: 450px;
}

.converter h1 {
    color: #333;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.converter label {
    display: block;
    color: #555;
    font-size: 0.95rem;
    margin-bottom: 8px;
    font-weight: 500;
}

.converter input[type="text"],
.converter select {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.converter input[type="text"]::placeholder {
    color: #aaa;
}

.converter input[type="text"]:focus,
.converter select:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}


.converter button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 25px;
}

.converter button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.converter button:active {
    transform: translateY(0);
}

.result {
    background-color: #f8f9fd;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #eee;
    text-align: center;
    font-size: 1.1rem;
    color: #333;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
}
